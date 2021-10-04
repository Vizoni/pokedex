import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
	const axios = require("axios").default;
	const baseURL = "https://pokeapi.co/api/v2/";

	const [pokemons, setPokemons] = useState<any[]>([]);
	const [myPokemon, setMyPokemon] = useState({});
	const [searchPokemon, setSearchPokemon] = useState("");

	useEffect(() => {
		async function getPokemons() {
			const pokemonsFromAPI = await getFirstTenPokemons();
			setPokemons(pokemonsFromAPI.data.results);
		}
		getPokemons();
	}, []);

	const getFirstTenPokemons = async () => {
		return await axios.get(baseURL + "pokemon?limit=10");
	};

	const getPokemon = async (name: string) => {
		return await axios.get(baseURL + "pokemon/" + name);
	};

	const updateMyPokemon = async (name: string) => {
		const poke = await getPokemon(name);
		setMyPokemon(poke.data);
	};

	return (
		<div className="app">
			<input
				type="text"
				value={searchPokemon}
				className="search-name"
				onChange={(event) => setSearchPokemon(event.target.value)}
			/>
			{pokemons
				.filter(
					(poke) => searchPokemon === "" || poke.name.includes(searchPokemon)
				)
				.map((poke: any) => {
					return (
						<>
							<div
								className="list-item"
								onClick={() => updateMyPokemon(poke.name)}
							>
								{poke.name}
							</div>
						</>
					);
				})}
		</div>
	);
}

export default App;
