import { Box, Paper, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import Layout from "../../Components/Layout"

// for show/movie info
export default function Explore() {



    // get data from api maybe sanity or json file or youtube api
    var item =
    {
        name: "Pahila Chakraview - Chalava",
        description: "A mysterious serial killer is being transferred from one prison to another; Ashish Dutta, a new police officer, is assigned to lead the journey, which leads to shocking events, deaths, and unimaginable crimes ",
        background: "/media/1945-tumbnail.png",
        gif: "/media/pahila-chakraview-trailer.webp",
        link: "https://www.youtube.com/embed/BmkgmN8Lcwo",
        release: 2022,
        type: "webseries",
        category: "thriller",
        cast: [
            "Dushant",
            "Dinesh Rathod",
            "Priya",
            "Omkar",
            "Karthi",
            "xyz",
            "abc",
            "bcd",
            "god",
            "Hello",
            "amazon",
            "chalava"
        ]

    }



    return (
        <Layout>

            {/* <div>Path: {router.query.id}</div> */}
            {/* Video media - trailer/show*/}
            {/* Info - cast , title, desc, imbd, where to watch Options,and youtube embbed */}

            <Box>


                {/* Info */}
                <Box sx={{

                    display: {
                        md: "flex",

                    },
                    alignItems: {
                        md: "normal",
                        sm: "center",
                        xs: "center"
                    },
                    marginTop: 1,
                    // backgroundColor: "black",
                    zIndex: 0,
                    overflow: "hidden",



                }}>

                    {/* Show Info */}
                    <Paper variant='' sx={{
                        display: "block",
                        width: {
                            md: "40%",
                            xs: "100%"
                        },

                        padding: {
                            md: "20px",
                            sm: "5px",
                            xs: "0px"
                        },
                        marginBottom: {
                            xs: "10px"
                        },
                        paddingRight: {
                            md: "50px"
                        },

                        color: "inherit",
                        overflow: "hidden",
                        backgroundColor: "inherit",




                    }}>
                        <h2 style={
                            {
                                fontSize: "3rem",
                                margin: 0,
                            }}>
                            {
                                item?.name
                            }
                        </h2>


                        <p>{item?.description}</p>
                        <br />
                        <div style={{
                            opacity: 0.5,
                            width: "100%",
                            height: "2px",
                            display: "block",
                            backgroundColor: "red"

                        }} ></div>

                        {/* Show Details in more */}
                        <Paper sx={{
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 1,
                            display: {
                                md: "block"
                            },
                            flex: 1,
                            backgroundColor: "inherit",
                            color: "inherit",


                        }}>
                            {/* Type of video,category and release date */}
                            <Box
                                marginBottom={2}

                            >

                                {/* Category */}
                                <Typography sx={{
                                    display: "inline-block",
                                    padding: "5px",
                                    margin: "2px",
                                    backgroundColor: "#39366197",
                                    borderRadius: "5px",
                                    display: "inline-block",
                                    cursor: "pointer",
                                    color: "white",
                                    fontWeight: 500,
                                    textTransform: "capitalize",
                                    letterSpacing: "2px",
                                    ':hover': {
                                        backgroundColor: " #87a4d4",
                                        color: "black"
                                    }
                                }}>
                                    {
                                        item?.category
                                    }
                                </Typography>


                                {/* Divider */}
                                <Typography sx={{
                                    display: "inline-block",
                                    padding: "5px",
                                    margin: "2px",
                                    display: "inline-block",
                                    fontWeight: 500,
                                    color: "inherit"


                                }}>
                                    {
                                        "|"
                                    }
                                </Typography>


                                {/* Release Date  */}
                                <Typography sx={{
                                    display: "inline-block",
                                    padding: "5px",
                                    margin: "2px",
                                    backgroundColor: "#39366197",
                                    borderRadius: "5px",
                                    display: "inline-block",
                                    cursor: "pointer",
                                    color: "white",
                                    fontWeight: 500,
                                    textTransform: "capitalize",
                                    letterSpacing: "2px",
                                    ':hover': {
                                        backgroundColor: " #87a4d4",
                                        color: "black"
                                    }
                                }}>
                                    {
                                        item?.release
                                    }
                                </Typography>


                                {/* Divider */}
                                <Typography sx={{
                                    display: "inline-block",
                                    padding: "5px",
                                    margin: "2px",
                                    display: "inline-block",
                                    fontWeight: 500,

                                }}>
                                    {
                                        "|"
                                    }
                                </Typography>


                                {/* show Type */}
                                <Typography sx={{
                                    display: "inline-block",
                                    padding: "5px",
                                    margin: "2px",
                                    backgroundColor: "#39366197",
                                    borderRadius: "5px",
                                    display: "inline-block",
                                    cursor: "pointer",
                                    color: "white",
                                    fontWeight: 500,
                                    textTransform: "capitalize",
                                    letterSpacing: "2px",
                                    ':hover': {
                                        backgroundColor: " #87a4d4",
                                        color: "black"
                                    }
                                }}>
                                    {
                                        item?.type
                                    }
                                </Typography>

                            </Box>



                            {/* cast */}
                            <p style={{
                                fontWeight: 600,
                                fontSize: "1.6rem",
                                margin: 0,
                                marginBottom: 5,
                                backgroundColor: "transparent",
                                color: "inherit"

                            }}>Cast:</p>

                            {
                                item?.cast.map(cast => {
                                    return <Typography key={cast}
                                        sx={{
                                            padding: "10px",
                                            margin: "2px",
                                            marginRight: "5px",
                                            backgroundColor: "#ffe2df",
                                            borderRadius: "5px",
                                            display: "inline-block",
                                            cursor: "pointer",
                                            textTransform: "capitalize",
                                            fontWeight: 500,
                                            backgroundColor: "#39366197",


                                            ':hover': {
                                                backgroundColor: "#726db8",
                                                color: "white"
                                            }

                                        }}
                                    >{cast}</Typography>
                                })
                            }

                        </Paper>

                    </Paper>


                    {/* Tumbnail */}
                    <Paper variant=''
                        sx={{
                            display: {
                                xs: "block"
                            },

                            height: {
                                md: "100%",
                                sm: "100%",
                                xs: "100%"
                            },
                            width: "100%",
                            flex: 1,
                            padding: "0px",
                            backgroundColor: "inherit",
                            color: "inherit",
                            zIndex: 2,
                            // overflow:"hidden"


                        }} >

                        <div className='backgroundImage-container' style={{
                            boxShadow: "rgba(0, 0, 0, 17) -23px -23px 58px 0px inset, rgba(0, 0, 0, 15) 26px 36px 30px 0px inset, rgba(0, 0, 0, 1) 10px -79px 70px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px, rgba(0, 0, 0, 15) -16px 0px 60px 34px",
                            zIndex: 1,
                            borderRadius: "5px",
                            // overflow:"hidden"
                        }}>

                            <img src={item.background} width={"100%"} height={"100%"} style={{
                                margin: "0px",
                                padding: "0px",
                                zIndex: -1,
                                position: "relative",
                                borderRadius: "5px"

                            }} sizes='cover' />


                            <div className="container shadow-efffect">

                            </div>

                        </div>

                    </Paper>
                </Box>

                {/* Watch option or video player */}

                <Box sx={{
                    height: {
                        xl: 600,
                        lg: 500,
                        md: 400,
                        xs: 200
                    },
                    marginBottom: "5rem"
                }}
                >
                    <Typography sx={{
                        fontWeight: 600,
                        fontSize: "1.6rem",
                        color: "inherit",
                        margin: {
                            md: "20px"
                        }

                    }}>Watch Now</Typography>

                    <iframe width="100%" height="100%" src={item?.link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen" ></iframe>

                </Box>

            </Box>
        </Layout >
    )
}

export function getServerSideProps(props) {

    // Make API request for show info

    return {
        props: {
            demo: "Namaste"

        }
    }
}