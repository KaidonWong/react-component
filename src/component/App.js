import React, { Component, Fragment } from "react";
import Toolbar from "./toolbar";
import Editor from "./editor";
import { EditorContext } from "./context";
import { cmdWithStatus, cmdWithList, cmdWithColor } from "../util/CmdList";
import { getValFromName } from "../util/FontOption";

import "../resources/style/common.scss";
import "../resources/iconfont/iconfont.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editorDom: null,
			activeConfig: {
				bold: false,
				italic: false,
				underline: false,
				strikeThrough: false,
				justifyLeft: false,
				justifyRight: false,
				justifyCenter: false,
				insertOrderedList: false,
				insertUnorderedList: false,

				//outdent   indent  没有状态

				fontName: "Arial",
				fontSize: 5, //1-7
				foreColor: "#aaa",
				backColor: "#aaa"
			}
		};
    }

	//ref 回调函数, 获取编辑框的DOM
	getEditor = dom => {
		this.setState({ editorDom: dom });
	};

	setActive = (scmd, val) => {
		this.setState(state => {
			let { activeConfig } = state;
			const ret = Object.assign({}, activeConfig, {
				[scmd]: val
			});
			return { activeConfig: ret };
		});
	};

	updateCmdStatus = () => {
        if(this.state.editorDom.innerHTML == '') {
            // 在页面没有内容的时候，添加一个内容标签
            // document.execCommand("fontname",false,"Arial");
            // document.execCommand("fontsize",false,"3");
            this.state.editorDom.innerHTML = "<font face='Arial' size=3></font>";
        }
		cmdWithStatus.map(scmd => {
			let val = document.queryCommandState(scmd);
			this.setActive(scmd, val);
		});
		cmdWithList.map(scmd => {
            let val = document.queryCommandValue(scmd);
            val = getValFromName(scmd,val);
			this.setActive(scmd, val);
		});
	};

	getSelectedElement = () => {
		const selection = document.getSelection();
		if (selection.rangeCount == 0) {
			return;
		}
		const range = selection.getRangeAt(0);
		let elem = range.commonAncestorContainer;
		return elem.nodeType === 1 ? elem : elem.parentNode; //获得选择区里的组件
	};

	handleToolClick = () => {
		const ele = this.getSelectedElement();
		if (this.state.editorDom.contains(ele)) {
			this.updateCmdStatus();
		}
	};

	render() {
		return (
			<EditorContext.Provider value={this.state.editorDom}>
				<div onClick={this.handleToolClick}>
					<Toolbar activeConfig={this.state.activeConfig} />
				</div>

				<Editor
					getEditor={this.getEditor}
					updateCmdStatus={this.updateCmdStatus}
				/>
			</EditorContext.Provider>
		);
	}
}

export default App;
