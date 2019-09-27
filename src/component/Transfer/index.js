import React, { Component, Fragment, PureComponent } from "react";
import TransferInner from "./TransferInner";

import "./index.scss";

//主要功能是将带入的参数转换，变为左右两个数组

// 传入的参数
// mockData: [
//     { value: "a", text: "选项一" },
//     { value: "b", text: "选项二", disabled: true },
//     { value: "c", text: "选项三" },
//     { value: "d", text: "选项四", disabled: true },
//     { value: "e", text: "选项五" }
// ],
// targetArr: ["c", "d"]

//转出的参数， 左右各一个option
// options: [
//     { value: "a", text: "选项一", checked: false, disabled: true },
//     { value: "b", text: "选项二", checked: true }
// ]

class Transfer extends Component {
    getUnselectedOptions = () => {
        const { mockData, targetArr } = this.props;
        const options = mockData.filter(item => {
            if (targetArr.indexOf(item.key) == -1) {
                return true;
            }
            return false;
        });

        return options.map(item => Object.assign({}, item, { checked: false }));
    };

    getSelectedOption = () => {
        const { mockData, targetArr } = this.props;
        let options = mockData.filter(item => {
            if (targetArr.indexOf(item.key) == -1) {
                return false;
            }
            return true;
        });
        return options.map(item => Object.assign({}, item, { checked: false }));
    };

    render() {
        return (
            <TransferInner
                selectedOptions={this.getSelectedOption()}
                unselectedOptions={this.getUnselectedOptions()}
            />
        );
    }
}

export default Transfer;
