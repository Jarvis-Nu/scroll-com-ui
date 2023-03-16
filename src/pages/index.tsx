import Head from "next/head"
import Header from "../components/Header"

export default function Home() {
  return(
    <div>
      <Head>
        <title>ScrollCom</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <Header />
      </main>
    </div>
  )
}