import { Suspense } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Players from "./components/Players";
import type Iplayer from "./types/playerTypes";
import Footer from "./components/Footer";

const playersfetch = async (): Promise<Iplayer[]> => {
  const res= fetch("./data.json");
  const data =(await res).json();
  return data;
}
function App() {
  const playersPromise = playersfetch();

  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={ <h2>Looding.......</h2>}>
      <Players playersPromise ={playersPromise} /></Suspense>
      <Footer />
      
      
    </>
  )
}

export default App
