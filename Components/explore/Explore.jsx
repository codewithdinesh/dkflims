import { Box, Grid, Paper } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import ExploreContainer from './ExploreContainer'


const item = [
    {

        imageUrl: "/media/suit-boy-thumbnail.png",
        title: "Suit Boy",
        desc: "Suit boy is indian superman web series",
        slug: "suit-boy"
    },
    {

        imageUrl: "/media/suit-boy-thumbnail.png",
        title: "Suit Boy",
        desc: "Suit boy is indian superman web series",
        slug: "super-hero",

    },
    {

        imageUrl: "/media/suit-boy-thumbnail.png",
        title: "Suit Boy ",
        desc: "Suit boy is indian superman web series",
        slug: "super-duper-hero"
    },
    {

        imageUrl: "/media/suit-boy-thumbnail.png",
        title: "Suit Boy",
        desc: "Suit boy is indian superman web series",
        slug: "superman-salman-ka-fan"
    },

]


// "Comedy",
// "Horror",
// "Thriller",
// "Romantic",
// "Adventures"

function Explore() {
    return (

        <Container maxWidth={"xl"} >

            {/* Popular */}
            <ExploreContainer category={"Popular"} item={item} />

            {/* Comedy */}
            <ExploreContainer category={"Comedy"} item={item} />

            {/* Thriller */}
            <ExploreContainer category={"Thriller"} item={item} />

            {/* Horror */}
            <ExploreContainer category={"Horror"} item={item} />

        </Container>
    )
}

export default Explore