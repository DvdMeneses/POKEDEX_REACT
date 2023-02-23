import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export default function CardeDois( { image,name,base_experience,height,weight } ) {

  return (
    <>

      <Card sx={{ maxWidth: 345 }} className = "CardDois">
        <CardMedia   classename = "ImagemCardeDois" component="img" image={image} alt={name} />
        

        <CardContent>
          
          <Typography gutterBottom variant="h5" component="div" >
            <Button variant= "contained" color="primary"  className='BotaoTipos' fullWidth = {true}>
              {name}
            </Button>
          </Typography> 
          
          
          
          <Button variant= "contained" color="secondary"  className='BotaoTipos' fullWidth = {true}>
          base_experience: {base_experience}
          </Button>

          

        </CardContent>
            
        <CardActions>
        
        <Button variant= "contained" color="secondary"  className='BotaoTipos' fullWidth = {true}>
          height: {height} | weight: {weight}
          </Button>

        
        
        
        </CardActions>
      </Card>
    </>
  );
}
