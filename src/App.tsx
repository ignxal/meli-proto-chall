import Navbar from "./components/navbar/navbar.tsx";
import Breadcrumbs from "./components/breadcrumbs/breadcrumbs.tsx";
import "./App.css";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Breadcrumbs
          recomendations={"fake - test"}
          category={"fake"}
          subcategories={["fake", "fake"]}
        />
      </main>

      <footer></footer>
    </>
  );
};

export default App;
