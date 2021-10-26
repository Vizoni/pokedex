import React, { useEffect, useState } from "react";
import "./App.css";
import Grid from "./Components/Grid";

function App() {
	const axios = require("axios").default;
	const baseURL = "https://pokeapi.co/api/v2/";

	const [pokemons, setPokemons] = useState<any[]>([]);
	const [searchPokemon, setSearchPokemon] = useState("");

	useEffect(() => {
		async function getPokemons() {
			const pokemonsFromAPI = await getFirstTenPokemons();
			pokemonsFromAPI.data.results.forEach(async (pokemon: any) => {
				const pokemonDetails = await getPokemon(pokemon.name);
				setTimeout(() => {
					setPokemons((pokemons) => [...pokemons, pokemonDetails.data]);
				}, 5000);
			});
		}
		getPokemons();
	}, []);

	useEffect(() => {}, [pokemons]);

	const getFirstTenPokemons = async () => {
		return axios.get(baseURL + "pokemon");
	};

	const getPokemon = async (name: string) => {
		return await axios.get(baseURL + "pokemon/" + name);
	};

	return (
		<div className="app">
			<input
				type="text"
				value={searchPokemon}
				className="search-name"
				onChange={(event) => setSearchPokemon(event.target.value)}
				placeholder="Pesquise um pokemon"
			/>
			<Grid pokemons={pokemons || []} searchPokemon={searchPokemon}></Grid>
		</div>
	);
}

export default App;
