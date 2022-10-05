import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import CarouselBox from '../Components/CarouselBox'
import Explore from '../Components/explore/Explore'
// Main page

import Header from '../Components/Header'
import Layout from '../Components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Dkflim</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <CarouselBox />
        <Explore />
      </Layout>

    </div>
  )
}
