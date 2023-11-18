import { reviewsEndpoints, searchEndpoints } from "./endpoints";
import requestHTTP from "./requestHTTP";

async function addReview(review) {
    const createdReview = await requestHTTP.post(reviewsEndpoints.base, review);
    return createdReview;
}

async function editReview(editedReview, reviewId) {
    const result = await requestHTTP.patch(reviewsEndpoints.specificReview(reviewId), editedReview);
    return result;
}

async function deleteReview(reviewId) {
    const result = await requestHTTP.delete(reviewsEndpoints.specificReview(reviewId));
    return result;
}

async function getReviewsForSpecificDealership(dealershipId) {
    const url = searchEndpoints.reviewsBase + searchEndpoints.where + searchEndpoints.queryString('reference', dealershipId);

    const reviews = await requestHTTP.get(url);
    return reviews;
}

const reviewsService = {
    getReviewsForSpecificDealership,
    addReview,
    editReview,
    deleteReview
};

export default reviewsService;