import * as React from "react";
import {Component} from "react";
import {FACEBOOK, LINKEDIN, TWITTER, WEBSITE} from "./Config";

interface FooterProps {}
interface FooterState {}

export default class Footer extends Component<FooterProps, FooterState> {
	constructor(props: FooterProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return <div className="footer">
			<div className="totally-epic-and-awesome-container-div">
				<img className="stars-bottom-right" src="svg/stars-bottom-left.svg"></img>
				<img className="stars-bottom-left" src="svg/stars-bottom-right.svg"></img>
			</div>
			<div className="really-cool-css-class-name-wow">
				<div className="socials">
					<a className="fa fa-linkedin" href={LINKEDIN}></a>
					<a className="fa fa-facebook" href={FACEBOOK}></a>
					<a className="fa fa-twitter" href={TWITTER}></a>
				</div>
				<div className="copyright">© 2025 - <a href={WEBSITE}>ACM Cyber</a></div>
			</div>
		</div>;
	}
}
