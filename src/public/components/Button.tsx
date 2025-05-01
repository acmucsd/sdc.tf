import * as React from "react";
import {Component} from "react";

interface ButtonProps {
	link: string;
	classes?: string;
}
interface ButtonState {}

export default class Button extends Component<ButtonProps, ButtonState> {
	constructor(props: ButtonProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return <a className={`animated-button ${this.props.classes || ""}`} href={this.props.link}>{this.props.children}</a>;
	}
}
