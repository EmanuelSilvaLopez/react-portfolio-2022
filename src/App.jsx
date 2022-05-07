import NavBar from "./components/navbar/NavBar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import "./app.scss"

function App() {
  return (
    <div className="app">
    <NavBar></NavBar>
    <section className="sections">
      <Intro></Intro>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </section>
    </div>
  );
}

export default App;
