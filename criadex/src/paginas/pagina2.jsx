import React, {  useEffect, useState} from 'react';
import Navbar from '../componentes/NavBar/indexNav';
import CardeDois from "../componentes/Cardes/indexCardDois";
import { useParams } from "react-router-dom";



export const Pagina2 = () => {
    
    const {id} = useParams()
    const [pokemon, setPokemons] = useState({});
    const imagem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}`+".png";

    useEffect( () => {
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => response.json())
        .then( data => {
            
            console.log(data)
            setPokemons(data)
            
            
        })


    },[id])
    
    return(
        <>
            
            <div>
                <Navbar/> 
                <CardeDois image ={imagem} name={pokemon.name} base_experience = {pokemon.base_experience} height ={pokemon.height} weight ={pokemon.weight}/>
            </div>
        </> 
    ); 
        
}
                        /*imagem = {data.sprites.other.home.front_default}*/