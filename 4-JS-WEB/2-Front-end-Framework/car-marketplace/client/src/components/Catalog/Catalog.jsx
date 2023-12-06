import { useEffect, useState } from "react";
import offerService from "../../services/offerService";
import OfferPreview from "./OfferPreview";
import Pagination from "../Pagination/Pagination";

const Catalog = () => {
  const PAGE_SIZE = 6;

  const [offers, setOffers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [offerCount, setOfferCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fetchedOffers, count] = await Promise.all([
          offerService.fetchPaginatedEntities("offers", currentPage, PAGE_SIZE),
          offerService.getOfferCount(),
        ]);

        setOffers(fetchedOffers);
        setOfferCount(count);
      } catch (error) {
        console.error("Error fetching offers in Catalog:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const onPageChange = (action) => {
    if (action === "reduce" && currentPage > 1) {
      setCurrentPage((state) => state - 1);
    } else if (action === "increase" && currentPage < Math.ceil(offerCount / PAGE_SIZE)) {
      setCurrentPage((state) => state + 1);
    }
  };

  const setParticularPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="catalog">
      {offers.length > 0 ? (
        <>
          {offers.map((offer) => (
            <OfferPreview key={offer._id} {...offer} />
          ))}

          <Pagination
            currentPage={currentPage}
            linkCount={Math.ceil(offerCount / PAGE_SIZE)}
            onPageChange={onPageChange}
            setParticularPage={setParticularPage}
          />
        </>
      ) : (
        <p>There are no offers yet</p>
      )}
    </section>
  );
};

export default Catalog;
