import * as express from "express";
import {Request, Response} from "express";
import {join} from "path";
import {generateFilePages, respond} from "./Respond";

const app = express();
const PORT = 8080;

// Make the public directory traversible
app.use(express.static(join(__dirname, "public")));

// Make cookies easier to access
app.use((req: Request, res: Response, next: any)=>{
	req.cookies = req.headers.cookie;
	next();
});

// Receive json post requests and urlencoded requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Send main page
app.get("/", (req: Request, res: Response)=>{
	respond(res, "index");
});

app.get("*", (req: Request, res: Response)=>{
	respond(res, "404");
});

if (process.argv[2] === "generate") {
	generateFilePages();
} else {
	app.listen(PORT, "127.0.0.1");
}