import React from 'react'
import { Box, Grid, Paper } from '@mui/material'
import ExploreCard from './ExploreCard'

// For categories wise exploration
function ExploreContainer({ category, item }) {
    return (
        <Box sx={{ flexGrow: 1, margin: 0 }}>

            <h1>{category}</h1>
            <Grid container
                direction="row"
                sx={
                    {
                        display: "flex",
                        flexGrow: 1
                    }
                }
            >
                {
                    item?.map((i, key) => {
                        return <ExploreCard key={key} item={i} />
                    })
                }

            </Grid>

        </Box>
    )
}

export default ExploreContainer