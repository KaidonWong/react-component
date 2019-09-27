import React, { Component } from "react";

import MagnifySvg from "./MagnifySvg";
import "./SearchInput.scss";

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    handleChange = e => {
        this.setState({ value: e.target.value });
    };

    render() {
        return (
            <div className="search-input">
                <div className="magnify-icon">
                    <MagnifySvg />
                </div>
                <input
                    placeholder="请输入搜索内容"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default SearchInput;
