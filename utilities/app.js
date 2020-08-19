import { Person, render } from "./personalProfile.js";
Person();
render();

import { render } from "./personalProfile.js";
render();

let people = [
  new Person("Bob", "bob-ross.jpg"),
  new Person("Frida", "frida-kahlo.jpg"),
  new Person("Dali", "dali.jpg"),
];

window.onload = () => {
  renderList(people);
};


let result = render(person);
console.log(result);
function renderList(people) {
  let html = "";
  html += `<ul>`;
  for (let person of people) {
    html += "<li>";
    html += render(person);
    html += "</li>";
  }
  html += "</ul>";

  document.getElementById("list").innerHTML = html;
}
