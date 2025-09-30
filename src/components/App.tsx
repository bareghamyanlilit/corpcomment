import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HashtagList from "./hashtag/HashtagList";
import FeedbakItemsContextProvider from "../context/FeedbakItemsContextProvider";

function App() {
  return (
    <div className="app">
      <Footer />

      <FeedbakItemsContextProvider>
        <Container />
        <HashtagList />
      </FeedbakItemsContextProvider>
    </div>
  );
}

export default App;
