import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  CircularProgress,
} from "@mui/material";

const TextForm = () => {
  const [text, setText] = useState({
    text: "",
  
  });
  const [loading, setLoading] = useState(false);
 

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      loadText(params.id);
    }
  }, [params.id]);

  const loadText = async (id) => {
    const res = await fetch("https://demo-deploy0077.herokuapp/texts/" + id);
    const data = await res.json();
    setText({ text: data.text }); 

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    try {
    
        const response = await fetch("https://demo-deploy0077.herokuapp/text", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(text),
        });
        await response.json();
  

      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) =>
    setText({ ...text, [e.target.name]: e.target.value });

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{
            backgroundColor: "#1E272E",
            padding: "1rem",
          }}
        >
       
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Write your Text"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="text"
                onChange={handleChange}
                value={text.text}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
             
              <Button
                type="submit"
                variant="contained"
                color="warning"
              >
                {loading ? (
                  <CircularProgress color="secondary" size={25} />
                ) : (
                  "add list"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default TextForm;