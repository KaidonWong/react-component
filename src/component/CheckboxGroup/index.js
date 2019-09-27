import React, { Component, Fragment } from "react";
import Checkbox from "./Checkbox";

//props: options=[{value:xxx,text:xxx,checked:true,disabled},{value:xxx,text:xxx,checked:false}]
//       onChange=function()  在父组件里修改options
class CheckboxGroup extends Component {
    state = {
        checked: false
    };

    //把对应的那个选项的checked 切换下
    onChange = value => {
        let { options,onChange } = this.props;
        let i;
        for (i = 0; i < options.length; i++) {
            if (options[i].value === value) {
                break;
            }
        }
        if (i >= options.length) return;
        let originOption = options[i];
        originOption.checked = !originOption.checked;
        options.splice(i, 1, originOption);
        onChange(options);
    };

    generateCheckboxes = () => {
        const { options } = this.props;
        return options.map(item => (
            <Checkbox
                key={item.value} //无效，不传递prop
                checked={item.checked}
                text={item.text}
                value={item.value}
                disabled={item.disabled}
                onChange={this.onChange}
            />
        ));
    };

    render() {
        return <Fragment>{this.generateCheckboxes()}</Fragment>;
    }
}

export default CheckboxGroup;
