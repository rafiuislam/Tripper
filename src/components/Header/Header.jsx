import { useState } from "react";
import { Toolbar, Typography, AppBar, Box, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
// import { Autocomplete } from "@react-google-maps/api";

import React from "react";
import useStyles from "./styles";

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Trippy
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore the world!
                    </Typography>
                    {/* <Autocomplete> */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search ..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                        />
                    </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
