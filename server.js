import { express } from "express";
import { handlebars } from "express-handlebars";
import { mysql } from "mysql"
import { db } from "./models"
import { bodyParser } from "body-parser";

const app = express();
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({
  extended: false
}))

app.use(methodOverride("_method"))
