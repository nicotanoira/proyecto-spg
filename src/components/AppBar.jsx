import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { name: "3D Configurators", source: "/3D-configurators" },
  { name: "2D Configurators", source: "/2D-configurators" },
  { name: "Renderings", source: "/renderings" }
  /* { name: "Contact" }, */
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link style={{ textDecoration: "none" }} to="/">
        <Typography variant="h6" sx={{ my: 2, color: "black" }}>
          SPG
        </Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link style={{ textDecoration: "none" }} to={item.source}>
            <ListItem key={item.name} sx={{ color: "black" }} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        {/* CONTACT */}
        {/* <ListItem key={"Contact"} sx={{ color: "black" }} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Contact"} />
          </ListItemButton>
        </ListItem> */}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#F3F2EE" }}>
        <Toolbar>
          {/* Menu Hamburguesa */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none", color: "#73807F" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link style={{ textDecoration: "none" }} to="/">
            <Typography
              variant="h6"
              component="div"
              sx={{
                display: { xs: "none", sm: "block", color: "black" },
              }}
            >
              SPG
            </Typography>
          </Link>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
                marginInlineStart: "auto",
              },
            }}
          >
            {navItems.map((item) => (
              <Link style={{ textDecoration: "none" }} to={item.source}>
                <Button key={item.name} sx={{ color: "black" }}>
                  {item.name}
                </Button>
              </Link>
            ))}
            {/* <Button key={"Contact"} sx={{ color: "black" }}>
              {"Contact"}
            </Button> */}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
