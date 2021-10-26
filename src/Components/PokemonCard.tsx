import {
	Button,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
	Card,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./PokemonCard.css";

function PokemonCard({ pokemon }: { pokemon: any }) {
	const axios = require("axios").default;
	const baseURL = "https://pokeapi.co/api/v2/";

	// const [pokemon, setPokemon] = useState({});

	const getPokemon = async (name: string) => {
		return await axios.get(baseURL + "pokemon/" + name);
	};

	// const updatePokemon = async (name: string) => {
	// 	const poke = await getPokemon(name);
	// 	setPokemon(poke.data);
	// };

	useEffect(() => {
		// console.log("card", pokemon);
	}, [pokemon]);

	return (
		<Card className="card">
			<CardMedia
				className="image"
				component="img"
				height="140"
				image={pokemon?.sprites.front_default}
				alt="Imagem do pokemon"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{pokemon?.name.toUpperCase()}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default PokemonCard;
