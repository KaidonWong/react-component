import React, { Component } from "react";

class CheckSvg extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <svg
                width="12"
                height="10"
                viewBox="0,0,120,100"
                xmlns="http://www.w3.org/2000/svg"
                // viewBox = "0 0 12 10"
            >
                <path
                    stroke="transparent"
                    d="m4.861905,43.606694l12.142092,-13.085759l33.263067,35.830935l55.44846,-59.718224l12.146385,13.076511l-67.594844,72.813231"
                    fill="#fff"
                />
            </svg>
        );
    }
}

export default CheckSvg;
