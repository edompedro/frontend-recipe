import React, { useEffect, useState } from "react";
import RecipeList from "../../container/RecipeList";
import { useRecipe } from "../../context/Recipe/index";
import { useNavigate } from "react-router-dom";
import { Input, Select, Button, Typography, Space } from "antd";

const sortOptions = [
  { value: "alphabetical", label: "alphabetical" },
  { value: "favorites", label: "Favorites" },
  { value: "numIngredients", label: "Num Ingredients" },
  { value: "none", label: "None" },
];

const Home = () => {
  // Get recipe data
  const { recipes, toggleFavorite } = useRecipe();
  const { Option } = Select;
  const { Title } = Typography;

  const navigate = useNavigate();
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(sortOptions[0].value);

  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleSortChange = (value) => setSortBy(value);
  const handleFavorite = (recipe) => {
    toggleFavorite(recipe.id, !recipe.favorite);
  };

  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);

  return (
    <>
      <div
        style={{
          maxWidth: "90%",
          margin: "2px",
          padding: "2rem",
          color: "black",
        }}
      >
        <Title level={1}>Recipe Finder</Title>
        <Space align="center" style={{ width: "100%" }}>
          <Input
            placeholder="Search for a recipe..."
            value={search}
            onChange={handleSearchChange}
            style={{ flex: 1, minWidth: 200 }}
            size="large"
          />
          <Select
            value={sortBy}
            onChange={handleSortChange}
            style={{ minWidth: 160 }}
            size="large"
          >
            {sortOptions.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
          <Button
            type="primary"
            size="large"
            onClick={() => navigate("/favorite")}
          >
            Go to Favorites
          </Button>
        </Space>
      </div>
      <div
        style={{
          maxWidth: "90%",
          margin: "2px",
          padding: "2rem",
          color: "black",
        }}
      >
        <RecipeList
          recipes={filteredRecipes}
          onFavorite={handleFavorite}
          filter={{ sortBy, search }}
        />
      </div>
    </>
  );
};

export default Home;
