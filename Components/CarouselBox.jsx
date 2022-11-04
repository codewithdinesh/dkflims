import React, { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box, } from '@mui/material'
import Image from 'next/image';
import { Container } from '@mui/system';
import Link from 'next/link';

const CarouselBox = () => {


    var items = [
        {
            name: "Pahila Chakraview - Chalava",
            description: "A mysterious serial killer is being transferred from one prison to another; Ashish Dutta, a new police officer, is assigned to lead the journey, which leads to shocking events, deaths, and unimaginable crimes ",
            background: "/media/chalava_poster_horizontal.jpg",
            gif: "/media/pahila-chakraview-trailer.webp",
            link: "/explore/chalava"
        },
        {
            name: "1945 - Naam Namak Nishan",
            description: "The nation was always free, It's us who are imprisoned. Naam Namak Nishan is a war-based fictional short film inspired by the Burma campaign in 1945. ",
            background: "/media/1945-tumbnail.png",
            gif: "/media/1945-nam-namak-nishan.webp",
            link: "/explore/1945"
        },
        {
            name: "Magic Pencil Returns",
            description: "Shaka Laka Boom Boom - Magic Pencil Returns",
            background: "/media/shaka-laka-boom-boom-pencil-tumbnail.png",
            gif: "/media/shaka-laka-boom-pencil-gif.webp",
            link: "/explore/magic-pencil-return"
        },
        {
            name: "Suit Boy",
            description: "SUITBOY - Indian Superhero",
            gif: "/media/suite-boy-gif.webp",
            background: "/media/suit-boy-thumbnail.png",
            link: "/explore/suitboy"
        },
    ]
    return (
        <Box>
            <Container maxWidth="xl">

                {/* Desktop */}
                <Carousel navButtonsAlwaysVisible="true" duration={80} height={370} sx={{
                    display: {
                        md: "block",
                        xs: "none"
                    }, 
                }}>
                    {
                        items.map((item, i) => <Item key={i} item={item} />)
                    }
                </Carousel>

            </Container>

            {/* Phone */}
            <Carousel navButtonsAlwaysVisible="true" duration={80} height={220} sx={{
                display: {
                    md: "none",
                    xs: "block"
                }
            }}>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>

        </Box >
    )
}


// Item component
function Item(props) {
    return (
        <Link href={props.item.link}>

            <Box sx={{
                height: "100%",
                display: {
                    md: "flex",
                    cursor: "pointer"
                },
               
            }}>

                {/* Show Info */}
                <Paper sx={{
                    width: "40%",
                    margin: "10px",
                    padding: "20px",
                    height: "100%",
                    display: {
                        md: "block",
                        xs: "none"
                    }

                }}>

                    <h2>{props.item.name}</h2>
                    <p>{props.item.description}</p>

                    {/* Display Cast */}

                    <Button variant='contained' sx={{
                        position: "absolute",
                        right: {
                            xs: "0px",
                            md: "0%"
                        },
                        bottom: "0",
                        margin: "20px"
                    }}>
                        Watch
                    </Button>
                </Paper>

                {/* Tumbnail */}
                <Paper
                    sx={{
                        margin: {
                            md: "10px",
                            sm: "0px"
                        },
                        padding: "60px",
                        backgroundImage: `url('${props.item.background}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundColor: "black",
                        backgroundSize: {
                            lg: "cover",
                            md: "contain",
                            xs: "contain"
                        },
                        height: "100%",

                        backgroundPositionY: "0px 0px",
                        ":hover": {
                            backgroundImage: `url('${props.item?.gif}')`,

                        },
                        cursor: "pointer",
                        flex: 1

                    }} >


                    {/* <Image src={props.item.background} width={"100"} height={"90"} layout="fill" sizes='cover' /> */}

                </Paper>
            </Box>

        </Link>


    )
}

export default CarouselBox