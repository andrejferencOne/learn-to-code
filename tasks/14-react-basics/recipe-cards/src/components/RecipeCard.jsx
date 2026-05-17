import Badge from "./Badge";

function RecipeCard({ title, image, time, difficulty, servings, ingredients, description }) {
    return (
        <div className="recipe-card">
            <img src={image} alt={title} />
            <div className="recipe-body">
                <h2>{title}</h2>
                <div className="badges">
                    <Badge text={time} icon="⏱️" />
                    <Badge text={difficulty} icon="📊" />
                    <Badge text={`${servings} servings`} icon="🍽️" />
                </div>
                <p className="description">{description}</p>
                <h3>Ingredients</h3>
                <ul>
                    {ingredients.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RecipeCard;
