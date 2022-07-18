import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { FETCH_BY_SEARCH } from "../api/apiCalls";
import { NotFound, SliderContent } from "../components";
import { resetSingle } from "../redux/moviesSlice";

const Filtered = () => {
  const { filteredMovies, isFetching } = useSelector(
    (state) => state.moviesList
  );
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("searchQuery");
  const dispatch = useDispatch();
  useEffect(() => {
    FETCH_BY_SEARCH(query, dispatch);
    return () => dispatch(resetSingle());
  }, [query]);

  return (
    <div className="h-[80vh]">
      {filteredMovies.length > 0 ? (
        <SliderContent title={`Results from ${query}`} data={filteredMovies} />
      ) : (
        !isFetching && <NotFound />
      )}
    </div>
  );
};

export default Filtered;
