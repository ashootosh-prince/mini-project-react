import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1694153273644-68a821119e2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjBza3l8ZW58MHx8MHx8fDA%3D";
    const HOT_URL = 
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL =
     "https://images.unsplash.com/photo-1505322266409-1c77f8b33a8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGNvbGR8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = 
    "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJhaW58ZW58MHx8MHx8fDA%3D";
    
 
    return(
        <div className='InfoBox'>            
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity > 75
            ? RAIN_URL
            : info.temp > 15
            ? HOT_URL
            : COLD_URL           
            }
        title="Weather Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {           
             info.humidity > 75
             ? <ThunderstormIcon />
             : info.temp > 15
             ? <WbSunnyIcon/>
             : <AcUnitIcon />
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature - {info.temp}&deg;C</p>
            <p>Humidity - {info.humidity}</p>
            <p>Max Temp - {info.tempMax}&deg;C</p>
            <p>Min Temp - {info.tempMin}&deg;C</p>
            <p>The weather can be described as <i>{info.weather}</i> and feels like - {info.feelsLike}&deg;C</p>
                       
         </Typography> 
      </CardContent>    
    </Card>
    </div>
        </div>
    )
};