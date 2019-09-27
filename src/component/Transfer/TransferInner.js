import React, { Component, Fragment, PureComponent } from "react";
import SidePanel from "./SidePanel";
import Button from "./Button";



class TransferInner extends Component {

    triggerHandler = pattern => {
        if (pattern == "left") {

        } else {

        }
    };

    render() {
        return (
            <div className="transfer-container clearfix">
                <div className="left-panel">
                    <SidePanel options={this.getUnselectedOptions()} />
                </div>
                <div className="buttons">
                    <div className="right-button-container">
                        <Button
                            pattern="ToRight"
                            triggerHandler={this.triggerHandler}
                        />
                    </div>
                    <div className="left-button-container">
                        <Button
                            pattern="ToLeft"
                            triggerHandler={this.triggerHandler}
                        />
                    </div>
                </div>
                <div className="right-panel">
                    <SidePanel options={this.getSelectedOption()} />
                </div>
            </div>
        );
    }
}

export default TransferInner;
