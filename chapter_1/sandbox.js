const ul = document.querySelector(".people");

const people = ["mario", "luigi", "ryu", "chun-li", "Koom"];

let html = ``;

//function
// people.forEach(function (person) {
//   //create html template
//   html += `<li style="color:purple">${person}</li>`;
// });

//arrow functions

people.forEach((person) => {
  //create html template
  html += `<li style="color:purple">${person}</li>`;
});

ul.innerHTML = html;
