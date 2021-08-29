import React from "react";
import googleMapReact from "google-map-react";
import { Paper, Typography } from "@material-ui/core";

import useStyles from "./styles";

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery("(min-width:600px)");

    return (
        <div>
            <h1>Map</h1>
        </div>
    );
};

export default Map;
