import React, { Component } from "react";

import "./Button.scss";

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { pattern, disabled } = this.props;
        return (
            <div
                className={[
                    "transfer-button",
                    disabled ? "disabled" : null
                ].join(" ")}
            >
                <div
                    className={[
                        "inner-pattern",
                        pattern == "ToRight" ? "left" : "right"
                    ].join(" ")}
                ></div>
            </div>
        );
    }
}

export default Button;
