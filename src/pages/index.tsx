import Head from "next/head"
import Header from "../components/Header"
import Main from "../components/Main"

export default function Home() {
  return(
    <div>
      <Head>
        <title>ScrollCom</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <Header />
        <div>
          <Main />
        </div>
      </main>
    </div>
  )
}