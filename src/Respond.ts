import {join} from "path";
import {readFileSync, writeFileSync} from "fs";

interface Website {
	[key: string]: string | string[];
	sitename: string;
	title: string;
	description: string;
	jsfile: string | string[];
	cssfile: string | string[];
	themecolor: string;
}

const TEMPLATE = readFileSync(join(__dirname, "public/template.html")).toString();

const SITES = JSON.parse(readFileSync(join(__dirname, "sites.json"), "utf8")) as Website[];

export function respond(res: any, site: Website | string) {
	res.set({
		"Content-Type": "text/html"
	});
	res.send(generatePage(site));
}

function generatePage(site: Website | string): string {
	if (typeof site === "string") {
		site = SITES.find(s=>s.sitename === site);
	}
	if (!site) return ":(";
	let html = TEMPLATE;
	for (let key of Object.keys(site)) {
		let var_regex = new RegExp("\\$" + key.toUpperCase());
		if (typeof site[key] === "string") {
			html = html.replace(var_regex, (site[key] as string)); 
		} else {
			let line = new RegExp(`^.*?\\$${key.toUpperCase()}.*?$`, "m");
			let repeat = (html.match(line)??[])[0];
			if (repeat) {
				html = html.replace(line, (site[key] as string[]).map(k => 
					repeat.replace(var_regex, k)
				).join("\n"));
			}
			
		}
	}
	return html;
}

export function generateFilePages() {
	for (let site of SITES) {
		let html = generatePage(site);
		writeFileSync(join(__dirname, "public/", `${site.sitename}.html`), html);
	}
}