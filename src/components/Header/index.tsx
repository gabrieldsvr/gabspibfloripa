import {Button, IconButton} from "@mui/material";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import {MenuLateral} from "../PlanCard";


export const Header = () => {


    const [menuLateral, setMenuLateral] = React.useState(false);

    const toggleDrawer = () => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setMenuLateral(!menuLateral);
    };


    return (
        <>
            <AppBar position="static" sx={{mb: 5}}>
                <Toolbar>
                    <IconButton
                        onClick={toggleDrawer}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}>
                        <MenuIcon/>
                    </IconButton>
                    <MenuLateral click={toggleDrawer} state={menuLateral}/>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        GABS PIB FLORIPA
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <br/>
        </>
    );
}
