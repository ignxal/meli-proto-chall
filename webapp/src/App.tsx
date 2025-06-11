import Navbar from "./components/navbar/navbar";
import { Routes, HashRouter, Route, Navigate } from "react-router-dom";
import "./App.css";
import ItemPage from "./pages/item-page";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <HashRouter>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/items/MLA83796059239" replace />}
            />
            <Route path="/items/:id" element={<ItemPage />} />
          </Routes>
        </HashRouter>
      </main>

      <footer></footer>
    </>
  );
};

export default App;
