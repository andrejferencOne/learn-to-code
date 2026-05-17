import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import Footer from "./components/Footer";
import recipes from "./data/recipes";
import "./App.css";

function App() {
    return (
        <div className="app">
            <Header />
            <main className="main">
                <RecipeList recipes={recipes} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
