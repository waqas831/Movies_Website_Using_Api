import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Search from "./pages/Search/Search";
import Trending from "./pages/Trending/Treanding";
import ShowDetails from "./components/ShowDetails";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/series" element={<Series />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/singlepost" element={<ShowDetails />} />
      </Routes>
    </div>
  );
}

export default App;
