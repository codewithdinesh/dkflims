import { useRouter } from 'next/router';
import React from 'react'
import Layout from "../../Components/Layout"

// for show/movie info
function show() {

    const router = useRouter();

    return (
        <Layout>

            <div>Path: {router.query.id}</div>
            {/* Video media - trailer/show*/}


        </Layout>
    )
}

export default show;

export function getServerSideProps(props) {
    return {
        props: {
            demo: "Namaste"

        }
    }
}