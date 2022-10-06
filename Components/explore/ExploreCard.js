import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Link from 'next/link';
import { Box } from '@mui/system';


function ExploreCard({ item }) {
  return (

    <Card sx={{
      margin: "3px",
      width: {
        xl: "220px",
        lg: "230px",
        md: "250px",
        sm: "350px",
        xs: "100%",
      },
      maxWidth: {
        xl: "500px",
        lg: "400px",
        md: "300px"
      },
      flexGrow: 1
    }}  >

      <Link href={`/explore/` + item?.slug}>

        <CardActionArea >

          {/* Image */}
          <CardMedia
            component="img"
            image={item?.imageUrl}
            alt="Poster"
            sx={{
              objectFit: "contain",
              width: "100%",
            }}

          />

          {/* Title and Desc */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" noWrap>
              {item?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              {item?.desc}
            </Typography>
          </CardContent>

        </CardActionArea>

      </Link>
    </Card>

  )
}

export default ExploreCard;