import { Box } from "@material-ui/core";
import Skeleton from "@mui/material/Skeleton";
import React, { useEffect, useState } from "react";
import "./../App.css";
import PokemonCard from "./PokemonCard";

function Grid({
	pokemons,
	searchPokemon,
}: {
	pokemons: any[];
	searchPokemon: string;
}) {
	return (
		// <Box className="grid">
		<Box
			sx={{
				flexDirection: "row",
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
			}}
		>
			{pokemons.length > 0 ? (
				pokemons
					.filter(
						(poke) => searchPokemon === "" || poke.name.includes(searchPokemon)
					)
					.map((poke: any) => {
						return (
							<>
								<PokemonCard pokemon={poke}></PokemonCard>
							</>
						);
					})
			) : (
				<>
					<Skeleton sx={{ bgcolor: "grey.800", margin: 1 }}>
						<PokemonCard pokemon={null} />
					</Skeleton>
					<Skeleton sx={{ bgcolor: "grey.800", margin: 1 }}>
						<PokemonCard pokemon={null} />
					</Skeleton>
					<Skeleton sx={{ bgcolor: "grey.800", margin: 1 }}>
						<PokemonCard pokemon={null} />
					</Skeleton>
					<Skeleton sx={{ bgcolor: "grey.800", margin: 1 }}>
						<PokemonCard pokemon={null} />
					</Skeleton>
				</>
			)}
		</Box>
	);
}

export default Grid;
