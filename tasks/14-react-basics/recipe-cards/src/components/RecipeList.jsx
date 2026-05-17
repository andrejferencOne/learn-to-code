import RecipeCard from "./RecipeCard";

function RecipeList({ recipes }) {
    return (
        <div className="recipe-list">
            {recipes.map(recipe => (
                <RecipeCard
                    key={recipe.id}
                    title={recipe.title}
                    image={recipe.image}
                    time={recipe.time}
                    difficulty={recipe.difficulty}
                    servings={recipe.servings}
                    ingredients={recipe.ingredients}
                    description={recipe.description}
                />
            ))}
        </div>
    );
}

export default RecipeList;
