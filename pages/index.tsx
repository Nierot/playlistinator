import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useSession, signIn, signOut } from "next-auth/react"
import { Button, Container, Text } from '@nextui-org/react'
import styles from '../styles/Home.module.css'
import PlaylistView from '@/components/PlaylistView'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()
  return <>
    <Head>
      <title>Playlistinator</title>
      <meta name="description" content="Invictus playlist maker" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      {session ? <>
        <PlaylistView />
      </> : <Container className={styles.signIn}>
        <Text h1 size={60} css={{ textGradient: "30deg, $purple500 0%, #8844ff 100%"}} weight="bold">O.D.D. Invictus Playlistinator 9000</Text>

        <Button className={styles.button} onClick={() => signIn('authentik')}>Log in met Invictus</Button>
      </Container>}
    </main>

  </>
}
