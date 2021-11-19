import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LoadingBar from "./LoadingBar";
import { AlertTitle, Alert } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const TimeLinePost = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return (
      <div>
        <Alert sx={{ m: 6 }} severity="warning">
          <AlertTitle>Warning</AlertTitle>
          {error.message} — <strong>check it out!</strong>
        </Alert>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div>
        <LoadingBar />
      </div>
    );
  } else {
    return (
      <ul>
        {items.map((item) => (
          <Card sx={{ maxWidth: `100%` }} sx={{ m: 4 }} key={item.userId}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.title}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="100%"
              image="https://s.yimg.com/ny/api/res/1.2/MrOhD_SSrQ5vX49VWVgmxg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTQ3MDtjZj13ZWJw/https://s.yimg.com/uu/api/res/1.2/z5jxME6R_08QYPJeawOprw--~B/aD0xMDAwO3c9MTUwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/people_218/7b66c8e1fb4bdcbf469da42e88a98a39"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.title}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>{item.title}</Typography>

                <Typography paragraph>
                  {item.body}
                  (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then
                  serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </ul>
    );
  }
};

export default TimeLinePost;
