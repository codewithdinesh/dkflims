
import { Container } from "@mui/system"
import Header from "./Header"

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Container maxWidth={"xl"}>

                <main>{children}</main>

            </Container>
        </>
    )
}