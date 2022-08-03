import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";

const TextList = () => {
  const [texts, setText] = useState([]);
  const navigate = useNavigate();

  const loadTexts = async () => {
    const response = await fetch("https://demo-deploy0077.herokuapp/texts");
    const data = await response.json();
    console.log(data)
    setText(data);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://demo-deploy0077.herokuapp/texts/${id}`, {
        method: "DELETE",
      });
      setText(texts.filter((e) => e.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadTexts();
  }, []);

  return (
    <>
       
      {texts.map((e) => (
        <Card
          style={{
            marginBottom: ".7rem",
            backgroundColor: "#1e272e",
          }} key={e.id}
           >
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
            key={e.id}
          >
            <div
              style={{
                color: "white",
              }}
            >
              <Typography>{e.text}</Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="warning"
                onClick={() => handleDelete(e.id)}
                style={{ marginLeft: ".5rem" }}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default TextList;