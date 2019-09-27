import React, { Component } from "react";
import CheckSvg from "./CheckSvg";

import "./Checkbox.scss";

class Checkbox extends Component {
    render() {
        const { checked, text, value, disabled, onChange } = this.props;
        return (
            <div
                className={[
                    "radio-container",
                    "clearfix",
                    disabled ? "disabled" : null
                ].join(" ")}
                onClick={() => {
                    onChange(value);
                }}
            >
                <div
                    className={["radio-box", checked ? "checked" : null].join(
                        " "
                    )}
                >
                    <div className="svg-container">
                        <CheckSvg />
                    </div>
                </div>
                <div className="text">{text}</div>
            </div>
        );
    }
}

export default Checkbox;
