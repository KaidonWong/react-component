import React, { Component } from "react";
import CheckboxGroup from "./index";

//props: options=[{value:xxx,text:xxx,checked:true,disabled},{value:xxx,text:xxx,checked:false}]
//       onChange=function()  在父组件里修改options
class Demo extends Component {
    state = {
        options: [
            { value: "a", text: "选项一", checked: false, disabled: true },
            { value: "b", text: "选项二", checked: true }
        ]
    };

    //把对应的那个选项的checked 切换下
    onChange = options => {
        this.setState({ options });
    };

    render() {
        return (
            <CheckboxGroup
                options={this.state.options}
                onChange={this.onChange}
            />
        );
    }
}

export default Demo;
