import {Grid} from "@mui/material";
import { Container} from "@mui/system";
import axios from "axios";
import React, { Component, useEffect, useState} from 'react';
import Navbar from '../componentes/NavBar/indexNav';
import Cardes from '../componentes/Cardes/indexCard';




export const Pagina1 = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect( () => {
        getPokemon()
    },[]);

    const getPokemon = async () => {
        let endpoints = [];
        
        for(let i = 1; i<500; i++){  
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        
        let resposta = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
        
        return resposta;
    };

    return(
    <>
        <div>
            <Navbar/> 
            <Container maxWidth="">
                <Grid container spacing={3}>
                    
                    {pokemons.map((pokemon)=>(
                    <Grid item xs={3} >
                        <Cardes id= {pokemon.data.id} name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
                        
                    </Grid>
                    ))}

                </Grid>
            </Container>  
        </div>
    </> 
    ) ; 

}