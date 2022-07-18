import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_LATEST_MOVIES,
  FETCH_NOW_PLAYING_MOVIES,
  FETCH_POPULAR_MOVIES,
  FETCH_TOP_RATED_MOVIES,
  FETCH_UPCOMING_MOVIES,
} from "../api/apiCalls";
import { Card, Carousel, Slider, SliderContent } from "../components";



const Home = () => {
  const {
    popularMovies,
    upComingMovies,
    topRatedMovies,
    latestMovies,
    nowPlayingMovies,
  } = useSelector((state) => state.moviesList);
  const dispatch = useDispatch();
  useEffect(() => {
    FETCH_LATEST_MOVIES(dispatch);
    FETCH_NOW_PLAYING_MOVIES(dispatch);
    FETCH_POPULAR_MOVIES(dispatch);
    FETCH_TOP_RATED_MOVIES(dispatch);
    FETCH_UPCOMING_MOVIES(dispatch);
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="">
        <Slider  autoplay={true}>
          {topRatedMovies?.map((item) => (
            <Carousel key={item.title} data={item} />
          ))}
        </Slider>
      </div>
      <SliderContent title="Popular" data={popularMovies} />
      <SliderContent title="Up Coming" data={upComingMovies} />
      <SliderContent title="Top Rated" data={topRatedMovies} />
      <SliderContent title="Now Playing" data={nowPlayingMovies} />
    </div>
  );
};

export default Home;
