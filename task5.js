const mountains = document.getElementById("mountains");
const tableRow = document.createElement("tr");
const name = document.createElement("th");
const height = document.createElement("th");
const place = document.createElement("th");

mountains.appendChild(tableRow);
tableRow.append(name, height, place);

name.textContent = "Name";
height.textContent = "height";
place.textContent = "Location";

mountains.style.border = "1px solid";
mountains.style.borderCollapse = "collapse";
name.style.border = "1px solid";
name.style.padding = "0.5rem";
height.style.border = "1px solid";
height.style.padding = "0.5rem";
place.style.padding = "0.5rem";

let mountainsData = [
  {
    name: "Kilimanjaro",
    height: 5895,
    place: "Tanzania",
  },
  {
    name: "Everest",
    height: 8848,
    place: "Nepal/China",
  },
  {
    name: "Denali",
    height: 6190,
    place: "United States",
  },
  {
    name: "Elbrus",
    height: 5642,
    place: "Russia",
  },
  {
    name: "Mont Blanc",
    height: 4810,
    place: "France/Italy",
  },
  {
    name: "Aconcagua",
    height: 6960,
    place: "Argentina",
  },
  {
    name: "Vinson",
    height: 4892,
    place: "Antarctica",
  },
  {
    name: "Pico de Orizaba",
    height: 5636,
    place: "Mexico",
  },
  {
    name: "Mount Kosciuszko",
    height: 2228,
    place: "Australia",
  },
  {
    name: "Mount Fuji",
    height: 3776,
    place: "Japan",
  },
];

mountainsData.map((items) => {
  let newRow = document.createElement("tr");
  let newName = document.createElement("td");
  let newHeight = document.createElement("td");
  let newPlace = document.createElement("td");

  mountains.appendChild(newRow);
  newRow.append(newName, newHeight, newPlace);

  newName.style.border = "1px solid";
  newName.style.padding = "0.5rem";
  newHeight.style.border = "1px solid";
  newHeight.style.padding = "0.5rem";
  newPlace.style.border = "1px solid";
  newPlace.style.padding = "0.5rem";

  newName.textContent = items.name;
  newHeight.textContent = items.height;
  newPlace.textContent = items.place;
});
