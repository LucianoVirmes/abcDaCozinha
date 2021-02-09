import { Button, Card, Divider, List } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
import {Recipe} from "../../services/recipeService";
import { gql, useQuery } from "@apollo/client";

interface ReceipeListProps {
  title: string;
}

const GET_RECIPES = gql`
  query recipes {
    recipes {
      id
      title
    }
  }
`;

interface Recipes {
  recipes: Recipe[];
}

const RecipeList = (props: ReceipeListProps) => {
  const history = useHistory();
  const { data, loading } = useQuery<Recipes>(GET_RECIPES);

  return (
    <div>
      <Button
        onClick={() => history.push("/recipe/new-recipe")}
        type="primary"
        shape="round"
        icon={<PlusOutlined />}
      >
        Nova receita
      </Button>
      <Divider>{props.title}</Divider>
      <div className="recipe-content">
        <List
          grid={{ column: 4, xs: 2, gutter: 20 }}
          dataSource={data?.recipes}
          loading={loading}
          renderItem={(item) => (
            <List.Item>
              <Card
                size="small"
                className="card"
                hoverable
                cover={
                  <img
                    alt="alt"
                    src="https://image.freepik.com/free-photo/breaded-chicken_1157-14.jpg"
                  />
                }
              >
                {item.title}
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default RecipeList;
