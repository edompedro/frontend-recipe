import React, { useState } from "react";
import { Card, Button, Typography } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const RecipeCard = ({ recipe, onMakeFavorite }) => {
  let { name, description, ingredients, instructions } = recipe;
  const [expanded, setExpanded] = useState(false);

  const formatIngredients = (ingredients) => {
    return ingredients.join(", ");
  };
  ingredients = formatIngredients(recipe.ingredients || []);
  const handleCardClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Card
      hoverable
      onClick={handleCardClick}
      style={{
        width: "300px",
        margin: "16px auto",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
      actions={[
        <Button
          key="make-favorite"
          icon={
            recipe.favorite ? (
              <StarFilled style={{ color: "gold" }} />
            ) : (
              <StarOutlined />
            )
          }
          onClick={(e) => {
            e.stopPropagation();
            onMakeFavorite();
          }}
        >
          {recipe.favorite ? "Unfavorite" : "Favorite"}
        </Button>,
      ]}
      cover={
        recipe.imageUrl ? (
          <img
            alt={name}
            src={recipe.imageUrl}
            style={{ width: "100%", height: 150, objectFit: "cover" }}
          />
        ) : (
          // placeholder image if no imageUrl is provided
          <img
            alt={name}
            src="https://via.placeholder.com/400"
            style={{ width: "100%", height: 150, objectFit: "cover" }}
          />
        )
      }
    >
      <Title level={4} style={{ margin: 10 }}>
        {name}
      </Title>
      <Paragraph
        style={{
          height: !expanded ? 50 : "auto",
          width: "100%",
          overflowY: "auto",
          marginBottom: 8,
        }}
      >
        <strong>Ingredients:</strong> {ingredients}
      </Paragraph>
      {expanded && (
        <div style={{ flex: 1, overflowY: "auto" }}>
          <Paragraph>
            <strong>Description:</strong> {description}
          </Paragraph>
          <Paragraph>
            <strong>Instructions:</strong> {instructions}
          </Paragraph>
        </div>
      )}
    </Card>
  );
};

export default RecipeCard;
