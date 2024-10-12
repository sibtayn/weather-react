import {useState} from "react"
import "./infobox.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Infobox({info}){
    const HOT_URL = "https://images.unsplash.com/photo-1527666466760-f6a7a2b31176?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAINY_URL = "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnl8ZW58MHx8MHx8fDA%3D"
    const COLD_URL = "https://images.unsplash.com/photo-1542267207-f8127b454605?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbGR8ZW58MHx8MHx8fDA%3D"
    return(
        <div className="infobox">
            {/* <h2>WeatherInfo - {info.weather}</h2> */}
        <div className="cards">
            <Card  sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>temperature = {info.temp}&deg;c</p>
          <p>humidity = {info.humidity}</p>
          <p>min temp = {info.tempmin}&deg;c</p>
          <p>max temp = {info.tempmax}&deg;c</p>
          <p>the weather can be described as {info.weather} and feels like {info.feelslike}&deg;c</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    </div>

        </div>
    )

    
}