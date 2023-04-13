import React from "react"
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/Navbar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import { Originals,ComedyMovies,HorrorMovies,ActionMovies,RomanceMovies,Documentaries } from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={Originals} title='Netflix Originals' />
      <RowPost url={ComedyMovies} title='ComedyMovies' isSmall />
      <RowPost url={HorrorMovies} title='HorrorMovies' isSmall />
      <RowPost url={ActionMovies} title='ActionMovies' isSmall />
      <RowPost url={RomanceMovies} title='RomanceMovies' isSmall />
      <RowPost url={Documentaries} title='Documentaries' isSmall />
    </div>
    );
}

export default App;
