import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const MainMenu = () => {
  return (
    <>
    <h1>Home</h1>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/counter">
            <ListItemText primary="Counter" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/todo">
            <ListItemText primary="Todo" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default MainMenu;
