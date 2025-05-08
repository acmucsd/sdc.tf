"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFilePages = exports.respond = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const TEMPLATE = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, "public/template.html")).toString();
const SITES = JSON.parse((0, fs_1.readFileSync)((0, path_1.join)(__dirname, "sites.json"), "utf8"));
function respond(res, site) {
    res.set({
        "Content-Type": "text/html"
    });
    res.send(generatePage(site));
}
exports.respond = respond;
function generatePage(site) {
    var _a;
    if (typeof site === "string") {
        site = SITES.find(s => s.sitename === site);
    }
    if (!site)
        return ":(";
    let html = TEMPLATE;
    for (let key of Object.keys(site)) {
        let var_regex = new RegExp("\\$" + key.toUpperCase());
        if (typeof site[key] === "string") {
            html = html.replace(var_regex, site[key]);
        }
        else {
            let line = new RegExp(`^.*?\\$${key.toUpperCase()}.*?$`, "m");
            let repeat = ((_a = html.match(line)) !== null && _a !== void 0 ? _a : [])[0];
            if (repeat) {
                html = html.replace(line, site[key].map(k => repeat.replace(var_regex, k)).join("\n"));
            }
        }
    }
    return html;
}
function generateFilePages() {
    for (let site of SITES) {
        let html = generatePage(site);
        (0, fs_1.writeFileSync)((0, path_1.join)(__dirname, "public/", `${site.sitename}.html`), html);
    }
}
exports.generateFilePages = generateFilePages;
