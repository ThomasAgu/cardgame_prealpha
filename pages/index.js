import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
//components
import Cards from  './cards'
import Newcard from './Newcard'
//styles
import styles from '../styles/Home.module.css'

export default function Home() {
 


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel&family=Rubik:ital,wght@1,300&display=swap" rel="stylesheet" />

      </Head>
      
      <Cards></Cards>
    </div>
  )
}
