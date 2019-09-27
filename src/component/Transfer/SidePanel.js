import React, { Component } from "react";
import CheckBox from "./CheckBox";
import SearchInput from "./SearchInput";

import "./SidePanel.scss";

//props: options=[{key:'a',title:'b'}]

class SidePanel extends Component {
    constructor(props){
        super(props);
        this.checkedSet = new Set();
    }

    handleChange = (value,checked) => {
        if(checked) {
            this.checkedSet.add(value);
        }else {
            this.checkedSet.delete(value);
        }
    };

    getLiArr = () => {
        const { options } = this.props;
        return options.map(item => (
            <li key={item.key} disabled={item.disabled}>
                <CheckBox
                    text={item.title}
                    value={item.key}
                    emitValue={this.handleChange}
                    disabled={item.disabled}
                />
            </li>
        ));
    };

    render() {
        return (
            <div className="panel-container">
                <div className="check-all">
                    <CheckBox text="xx项" />
                </div>
                <SearchInput />
                <ul className="item-list">{this.getLiArr()}</ul>
            </div>
        );
    }
}

export default SidePanel;
