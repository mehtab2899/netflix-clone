import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.scss";

const base_url = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			return request;
		};
		fetchData();
	}, []);

	const trucate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};

	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
				backgroundPosition: "center center",
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__contents--title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner__contents--buttons">
					<button>Play</button>
					<button>My List</button>
				</div>
				<h1 className="banner__contents--description">
					{trucate(movie?.overview, 150)}
				</h1>
			</div>
			<div className="banner__fadeBottom"></div>
		</header>
	);
};

export default Banner;
