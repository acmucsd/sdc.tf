import * as React from "react";
import {Component} from "react";
import Button from "./Button"
import {SIGNUP_URL} from "./Config"

interface HeroProps {}
interface HeroState {}

export default class Hero extends Component<HeroProps, HeroState> {
	constructor(props: HeroProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return <div className="hero">
			<div className="hero-presents">
				<strong>ACM Cyber&nbsp;</strong> 
				<span>at UCSD presents</span>
			</div>
			<img className="logo" src="svg/sdctf-no-palm.svg" alt="SDCTF 2024 Logo"></img>
			<div className="hero-date">
				<span>
					<strong>Friday</strong> May 10th, 5pm - 
				</span>
				<span>
					<strong>Sunday</strong> May 12th, 5pm (PDT)
				</span>
			</div>
			<Button link={SIGNUP_URL}>Join Now</Button>
			<div className="hero-bg">
				<img className="palm-left" src="svg/palm-left.svg"></img>
				<img className="stars-top" src="svg/stars-top.svg"></img>
				<img className="palm-right" src="svg/palm-right.svg"></img>
			</div>
		</div>;
	}
}
