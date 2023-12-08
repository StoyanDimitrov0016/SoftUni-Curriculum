import { useEffect, useState } from "react";
import offerService from "../../services/offerService";
import OfferPreview from "./OfferPreview";
import Pagination from "../Pagination/Pagination";

const Catalog = () => {
  const PAGE_SIZE = 5;

  const [offersData, setOffers] = useState({
    offers: [],
    count: 0,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fetchedOffers, count] = await Promise.all([
          offerService.fetchPaginatedEntities("offers", currentPage, PAGE_SIZE),
          offerService.getOfferCount(),
        ]);

        setOffers({ offers: fetchedOffers, count });
        setError(null);
      } catch (error) {
        console.error("Error fetching offers in Catalog:", error);
        setError("An error occurred while fetching offers. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  //TODO: Set Catalog styles to offers-container
  return (
    <section className="catalog">
      {loading && <h1>Loading...</h1>}
      {error && <p>{error}</p>}
      {!loading && !error && offersData.offers.length > 0 ? (
        <>
          {/* <div className="offers-container"> */}
          {offersData.offers.map((offer) => (
            <OfferPreview key={offer._id} {...offer} />
          ))}
          {/* </div> */}

          <Pagination
            PAGE_SIZE={PAGE_SIZE}
            offerCount={offersData.count}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : !loading && !error ? (
        <p>There are no offers yet</p>
      ) : null}
    </section>
  );
};

export default Catalog;
