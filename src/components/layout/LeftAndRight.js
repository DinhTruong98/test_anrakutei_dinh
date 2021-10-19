import React from "react";
import PropTypes from "prop-types";

export default function LeftAndRight({
    left,
    right,
    rightStyle,
    leftStyle,
    ...other
}) {
    return (
        <div style={{ display: "flex", alignItems: "center", ...other }}>
            <div style={leftStyle}>{left}</div>
            <div style={{ flexGrow: "1", textAlign: "right", ...rightStyle }}>
                {right}
            </div>
        </div>
    );
}
LeftAndRight.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node,
};