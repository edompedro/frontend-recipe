import React from "react";
import { List, Typography, Empty } from "antd";
import { useRecipe } from "../../context/Recipe";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import RecipeCard from "../../components/Card";

const { Title } = Typography;

const FavoritePage = () => {
  const { recipes } = useRecipe();
  const favoriteRecipes = recipes.filter((recipe) => recipe.favorite);

  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", padding: "40px 0" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <Button
          type="primary"
          style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
        <Title level={1} style={{ textAlign: "center", marginBottom: 32 }}>
          Your Favorite Recipes
        </Title>
        {favoriteRecipes.length === 0 ? (
          <Empty
            description="You have no favorite recipes yet."
            style={{ marginTop: 60 }}
          />
        ) : (
          <List
            grid={{ gutter: 32, xs: 1, sm: 2, md: 3, lg: 4 }}
            dataSource={favoriteRecipes}
            renderItem={(recipe) => (
              <List.Item
                key={recipe.id}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <RecipeCard recipe={recipe} />
              </List.Item>
            )}
          />
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
