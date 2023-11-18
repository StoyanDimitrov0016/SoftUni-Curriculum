import { useState, useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
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
          return { ...offer, sellerType: "person" }; // Modify the offer as needed
        } catch (error) {
          console.log("Error while fetching the data occurred:", error);
          return null; // Handle the error, return null or a default value
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
        setLoading(true);
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
    <div>
      <h2>Watchlist</h2>
      {loading && <p>Loading watchlist...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {offers.length === 0 && !loading && !error && <p>Your watchlist is empty.</p>}
      {offers.length > 0 && (
        <ul>
          {offers.map((offer) => (
            <OfferPreview key={offer._id} {...offer} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Watchlist;
