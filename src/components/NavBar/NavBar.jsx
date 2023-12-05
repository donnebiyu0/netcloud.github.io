import React, { useEffect, useState } from "react";
import useStyles from "./style";
import {
  ToolBar,
  AppBar,
  IconButton,
  Drawer,
  Avatar,
  Button,
  Icon,
  Toolbar,
  useMediaQuery,
  Box,
} from "@mui/material";
import {
  Menu,
  Brightness4,
  Brightness7,
  AccountCircle,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { SideBar } from "..";
import Search from "../Search/Search";
import { createSessionId, fetchToken, movieApi } from "../../utils";

const NavBar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 700px)");
  const theme = useTheme();
  const isAuthenticated = false;
  const [mobileOpen, setMobileOpen] = useState(false);
  const token = localStorage.getItem("request_token");
  const sessionIdFromLocalStorage = localStorage.getItem("session_id");
  const drawerWidth = 240;

  useEffect(() => {
    const loginUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await movieApi(
            `/account?session_id=${sessionIdFromLocalStorage}`
          );
        } else {
          const sessionId = await createSessionId();
          const { data: userData } = await movieApi(
            `/account?session_id=${sessionId}`
          );
        }
      }
    };
  }, [token]);
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              className={classes.menuButton}
              style={{ outline: "none" }}
              onClick={() => {
                setMobileOpen((prevMobileOpen) => !prevMobileOpen);
              }}
            >
              <Menu className={classes.menu}></Menu>
            </IconButton>
          )}
          {/* <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton> */}
          {!isMobile && <Search />}
          <div>
            {isAuthenticated ? (
              <Button
                onClick={() => {}}
                color="inherit"
                component={Link}
                to="/profile/:id"
                className={classes.linkButton}
              >
                <Avatar
                  style={{ width: 40, heiht: 30 }}
                  alt="profile"
                  src="https://i.pinimg.com/736x/73/d1/2a/73d12ad89a364c65cc3da4434d4977fa.jpg"
                ></Avatar>
              </Button>
            ) : null}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <nav>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              className={classes.deawerBackground}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }}
            >
              <SideBar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
              anchor="left"
              open
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }}
            >
              <SideBar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </Box>
  );
};

export default NavBar;
