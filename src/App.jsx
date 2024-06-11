import {Stack} from "@chakra-ui/react"
import { Navbar } from "./components/navbar"
import { Aside } from "./components/aside"
import { Cabecera } from "./components/cabecera"
import { VideosCards } from "./components/videosCards/VideosCards"

function App() {

  return (
    <>
      <Stack padding={3} backgroundColor="#0f0f0f">
        <Navbar></Navbar>
        <Stack marginLeft={{sm:0,md:20}} direction="row" >
          <Aside/>
          <Cabecera/>
          <VideosCards/>
        </Stack>
      </Stack>
    </>
  )
}

export default App
