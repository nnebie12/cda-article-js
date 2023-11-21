import { Date_now } from "./model.js";
import { articles } from "./template.js";

document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    Date_now.builder();
    //ajouter l'import
    console.log(Date_now.dates);
    //ajouter la date
    Date_now.el.innerText = Date_now.dates;
    //ajouter la date dans l'attribut datetime
    Date_now.el.setAttribute("datetime", Date_now.dates);

    console.table(articles);
});