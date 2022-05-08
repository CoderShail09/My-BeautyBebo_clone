

import { navbar } from "../components/nav.js";

let n = document.getElementById("myNav");
n.innerHTML = navbar()
console.log(n);

import { footer } from "../components/nav.js";
let f  = document.getElementById("footer")
f.innerHTML = footer()
console.log(f)