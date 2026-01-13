import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Character from "./pages/Character";
import FinalStory from "./pages/FinalStory";
import { Routes, Route } from "react-router-dom";
import Episodes from "./pages/Episodes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Character />
            </>
          }
        />

        
        <Route path="/ending" element={<FinalStory />} />
        <Route path="/Episodes" element={<Episodes/>}/>
      </Routes>
    </>
  );
}

export default App;
