import { Button, Container, Text, Navbar } from '@nextui-org/react'
import styles from '../styles/PlaylistView.module.css'
import { useSession, signOut } from "next-auth/react"

export default function PlaylistView() {
  const { data: session } = useSession()

  return <Container className={styles.main}>
    <Navbar isBordered variant="floating">
      <Navbar.Brand>Playlistinator 9000</Navbar.Brand>
      <Navbar.Content justify="end">

        <Text>{session?.user?.name}</Text>
        <Button onClick={() => signOut()}>Uitloggen</Button>
      </Navbar.Content>
    </Navbar>


  </Container>
}