
import { Container } from "@mui/system"
import Header from "./Header"

// export default function Layout({ children }) {
//     return (
        
//     )
// }

import React, { Component } from 'react'

export default class Layout extends Component {
    render() {
        return (
            <>
                <Header />
                <Container maxWidth={"xl"} >

                    <main>{this.props.children}</main>

                </Container>
            </>
        )
    }
}
