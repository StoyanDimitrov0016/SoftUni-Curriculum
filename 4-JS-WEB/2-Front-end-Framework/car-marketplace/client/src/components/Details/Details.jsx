import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import offerService from "../../services/offerService";
import DetailsPreview from "./DetailsPreview";
import useAuthContext from "../../hooks/useAuthContext";

const Details = () => {
  const [offer, setOffer] = useState({});
  const [isDeleting, setIsDeleting] = useState(false);

  const navigate = useNavigate();

  const { offerId } = useParams();
  const { userCredentials } = useAuthContext();
  const { userId } = userCredentials;

  const deleteClickHandler = () => {
    setIsDeleting(true);
  };

  const cancelDeleteClickHandler = () => {
    setIsDeleting(false);
  };

  const confirmDeleteClickHandler = async () => {
    try {
      await offerService.delete(offerId);
      navigate("/my-offers");
    } catch (error) {
      console.error("Error deleting offer:", error);
    }
  };

  const addToWatchList = async () => {
    await offerService.addToWatchList(offerId);
    const watchlistCount = await offerService.getWatchlistCountForOffer(offerId);

    setOffer((state) => ({
      ...state,
      canAdd: !state.canAdd,
      watchlistCount,
    }));
  };

  const removeFromWatchList = async () => {
    await offerService.removeFromWatchList(offerId, userId);
    const watchlistCount = await offerService.getWatchlistCountForOffer(offerId);

    setOffer((state) => ({
      ...state,
      canAdd: !state.canAdd,
      watchlistCount,
    }));
  };

  useEffect(() => {
    const fetchOfferData = async () => {
      try {
        const [fetchedOffer, watchlistCount, canAdd] = await Promise.all([
          offerService.getOne(offerId),
          offerService.getWatchlistCountForOffer(offerId),
          offerService.canAddToWatchlist(offerId, userId),
        ]);

        const isOwner = fetchedOffer._ownerId === userId;

        setOffer({
          ...fetchedOffer,
          watchlistCount,
          canAdd,
          isOwner,
        });
      } catch (error) {
        console.error("Error fetching offer data:", error);
      }
    };

    fetchOfferData();
  }, [offerId, userId]);

  return (
    <DetailsPreview
      offer={offer}
      isDeleting={isDeleting}
      deleteClickHandler={deleteClickHandler}
      cancelDeleteClickHandler={cancelDeleteClickHandler}
      confirmDeleteClickHandler={confirmDeleteClickHandler}
      addToWatchList={addToWatchList}
      removeFromWatchList={removeFromWatchList}
    />
  );
};

export default Details;
