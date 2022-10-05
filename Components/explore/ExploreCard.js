import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Link from 'next/link';


function ExploreCard({ item }) {
  return (
    <Card sx={{
      margin: "3px",
      // width: {
      //   xs: "100%",
      //   md: "250px",
      //   lg: "230",
      //   xl: "220"
      // },
      width: 300,
      flexGrow: 1

    }}  >

      <Link href={`/explore/` + item?.slug}>

        <CardActionArea >
          <CardMedia
            component="img"
            image={item.imageUrl}
            alt="Poster"
            sx={{
              objectFit: "contain",


            }}

          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" noWrap>
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              {item.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default ExploreCard;