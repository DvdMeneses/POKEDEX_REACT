import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Routes,Route,Link} from 'react-router-dom';
import { Pagina2 } from '../../paginas/pagina2';
import CardeDois from './indexCardDois';

//david meneses
//davi samuel
//giovanna aparecida
//jaum meneses

 
export default function Carde( { id, name, image, types} ) {
  
  
  const pegarTipos = ()=>{
    
    if(types[1]){
      
      return types[0].type.name +" | "+ types[1].type.name;
    }
    

    return types[0].type.name;
  };

    
 
  

  return (
    <>
      

      <Card sx={{ maxWidth: 345 }} className = "Card">
        <CardMedia className='ImagemCarde' component="img"  image={image} alt={name} />
        <CardContent>

          <Typography gutterBottom variant="h5" component="div">
            {name.toUpperCase()}
          </Typography> 
          
          
          
          <Button variant= "contained" color="secondary"  className='BotaoTipos'>
            {pegarTipos()}
          </Button>

        </CardContent>
            
        <CardActions>
        
        <Link to ={`/pagina2/${id}/`}>
          <Button variant="contained" fullWidth = {true} >SPELLS</Button>
        </Link>
        
        </CardActions>
      </Card>
    </>
  );
}