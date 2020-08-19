import { Person, render } from "../components/personalProfile";

let people = [
  new Person("Bob", "bob-ross.jpg"),
  new Person("Frida", "frida-kahlo.jpg"),
  new Person("Dali", "dali.jpg"),
];

window.onload = () => {
  renderList(people);
};

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
