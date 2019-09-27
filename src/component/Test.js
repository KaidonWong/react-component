import React, { Component, Fragment } from "react";
import Transfer from "./Transfer";
import CheckboxGroup from "./CheckboxGroup";
import Demo from "./CheckboxGroup/demo";

import "../resources/style/common.scss";

class Test extends Component {
    state = {
        mockData: [],
        targetArr: []
    };

    componentDidMount() {
        this.setState({
            mockData: [
                { value: "a", text: "选项一" },
                { value: "b", text: "选项二", disabled: true },
                { value: "c", text: "选项三" },
                { value: "d", text: "选项四", disabled: true },
                { value: "e", text: "选项五" }
            ],
            targetArr: ["c", "d"]
        });
    }

    handleChange = targetArr => {
        this.setState({ targetArr });
    };

    render() {
        const { mockData, targetArr } = this.state;
        return (
            <Fragment>
                <Transfer
                    mockData={mockData}
                    targetArr={targetArr}
                    handleChange={this.handleChange}
                />
                <Demo />
            </Fragment>
        );
    }
}

export default Test;
