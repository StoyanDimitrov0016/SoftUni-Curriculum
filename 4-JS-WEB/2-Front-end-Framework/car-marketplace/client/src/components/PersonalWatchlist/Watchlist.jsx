import { useState, useEffect } from "react";
import useAuthContext from "../../hooks/useAuthContext";

import watchlistService from "../../services/watchlistService";
import OfferPreview from "../Catalog/OfferPreview";
import offerService from "../../services/offerService";

const Watchlist = () => {
  const { userCredentials } = useAuthContext();
  const { userId } = userCredentials;

  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadOffers = async (ids) => {
    try {
      const offerPromises = ids.map(async (id) => {
        try {
          const offer = await offerService.getOne(id);
          return { ...offer, sellerType: "person" };
        } catch (error) {
          console.log("Error while fetching the data occurred:", error);
          return null;
        }
      });

      const loadedOffers = await Promise.all(offerPromises);
      setOffers(loadedOffers.filter((offer) => offer !== null));
    } catch (error) {
      console.log("Error while fetching watchlist offers:", error);
      setError(error.message || "An error occurred while fetching watchlist offers.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchWatchlistOffers = async () => {
      try {
        const ids = await watchlistService.getAllOffersFromWatchlist(userId);
        await loadOffers(ids);
      } catch (error) {
        setError(error.message || "An error occurred while fetching watchlist offers.");
      } finally {
        setLoading(false);
      }
    };

    fetchWatchlistOffers();
  }, [userId]);

  return (
    <div className="watchlist-wrapper">
      <h2>Watchlist</h2>
      {loading && <h3>Loading watchlist...</h3>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {offers.length === 0 && !loading && !error && <p>Your watchlist is empty.</p>}
      {offers.length > 0 && (
        <div className="offers-container">
          {offers.map((offer) => (
            <OfferPreview key={offer._id} {...offer} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
