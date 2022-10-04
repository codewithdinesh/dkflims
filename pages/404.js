import { Padding } from '@mui/icons-material'
import { Box, Card } from '@mui/material'
import Link from 'next/link'

export default function FourOhFour() {
    return <>
        <Card sx={{
            width: "auto", margin: "10px 10px", display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingBottom: "10px"
        }}>

            <h1>404 - Page Not Found</h1>
            <Link href="/#" >
                <a style={{
                    backgroundColor: "#f0f0ff",
                    padding: "10px",
                    color: "blue",
                    fontWeight: "bold"
                }}>
                    Go back home
                </a>
            </Link>


        </Card>


    </>
}