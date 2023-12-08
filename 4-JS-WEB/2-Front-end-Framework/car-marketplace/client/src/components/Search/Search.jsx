import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useCarOfferForm } from "../../hooks/useCarOfferForm";
import searchService from "../../services/searchService";

import SearchForm from "./SearchForm";
import OfferPreview from "../Catalog/OfferPreview";

const Search = () => {
  const navigate = useNavigate();
  const locationSearch = useLocation();

  const [matches, setMatches] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const queryString = locationSearch.search.slice(1);
  const searchParameters = queryString.split("&").map((qs) => qs.split("="));

  const onSubmitHandler = async () => {
    const criteria = Object.entries(formValues).filter(([key, value]) => Boolean(value));

    const foundOffers = await searchService.search(criteria);

    setMatches(foundOffers);
    const url = criteria.map(([key, value]) => `${key}=${value}`).join("&");
    navigate(`/search?${url}`);
  };

  const {
    offerPredefinedOptions,
    formValues,
    changeHandler,
    submit,
    setFormValues,
    resetFormValues,
  } = useCarOfferForm(onSubmitHandler, null);

  useEffect(() => {
    searchService
      .search(searchParameters)
      .then((result) => setMatches(result))
      .catch((error) => console.log("Error while fetching offers in search page:", error))
      .finally(() => setLoading(false));

    setFormValues((state) => ({ ...state, ...Object.fromEntries(searchParameters) }));
  }, []);

  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <SearchForm
          offerPredefinedOptions={offerPredefinedOptions}
          formValues={formValues}
          changeHandler={changeHandler}
          submit={submit}
          resetFormValues={resetFormValues}
          isLoading={isLoading}
        />
      )}

      {matches.length >= 1 ? (
        <section className="content-container">
          {matches.map((m) => (
            <OfferPreview key={m._id} {...m} />
          ))}
        </section>
      ) : (
        <p className="no-matches message">No offers match this criteria</p>
      )}
    </>
  );
};

export default Search;
