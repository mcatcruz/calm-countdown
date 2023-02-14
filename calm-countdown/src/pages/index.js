import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google' /* Change font  */
import styles from '@/styles/Home.module.css' /* Make changes to Home page appearance using Home.module.css  */

import HomeComponent from '../components/HomeComponent'
import FormHub from '@/components/FormHub'

const inter = Inter({ subsets: ['latin'] })  // Additional font styling

export default function Home() {
  return (
    <>
      <Head>
        <title>Calm Countdown</title>
        <meta name="description" content="Connect to the present by engaging your senses." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <HomeComponent />
        <FormHub />
      </main>
    </>
  )
}
