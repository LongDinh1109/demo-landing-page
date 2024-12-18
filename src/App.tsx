import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="font-lato">
        <div className="bg-[url('./assets/Grid.png')] bg-cover bg-no-repeat">
          <Header />
          <Body />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
