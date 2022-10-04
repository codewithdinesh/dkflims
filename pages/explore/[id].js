import { useRouter } from 'next/router';
import React from 'react'

// for show/movie info
function show() {

    const router = useRouter();

    return (
        <div>Path: {router.query.id}</div>
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