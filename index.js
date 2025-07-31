/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

const makeFreelancer = () => {
  const minCeiled = Math.ceil(PRICE_RANGE.min);
  const maxFloored = Math.floor(PRICE_RANGE.max);
  const rateWithDecimals =
    Math.random() * (Math.floor(maxFloored) - Math.ceil(minCeiled) + 1) +
    Math.ceil(minCeiled);
  const rateRounded = rateWithDecimals.toFixed(0);

  const freelancer = {
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
    occupation: OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)],
    rate: Number(rateRounded),
  };

  return freelancer;
};

const freelancers = [];
for (let i = 0; i < NUM_FREELANCERS; i++) {
  freelancers.push(makeFreelancer());
}

const findAverage = () => {
  let total = 0;
  for (let i = 0; i < freelancers.length; i++) {
    total += freelancers[i].rate;
  }
  const average = total / freelancers.length;
  return average;
};

const average = findAverage();

const $app = document.querySelector("#app");

const displayFreelancer = (freelancer) => {
  const $td = document.createElement("tc"); //This might have to be a section instead.
  let $pName = document.createElement("td");
  let $pOccupation = document.createElement("td");
  let $pRate = document.createElement("td");

  $pName.textContent = freelancer.name; // These variables can possibly go back to consts now.
  $pOccupation.textContent = freelancer.occupation;
  $pRate.textContent = `$${freelancer.rate}`;

  $td.append($pName);
  $td.append($pOccupation);
  $td.append($pRate);

  return $td;
};

const allFreelancers = () => {
  const $table = document.createElement("table");
  const $tableHeadingName = document.createElement("th");
  $tableHeadingName.textContent = "Name";
  const $tableHeadingOccupation = document.createElement("th");
  $tableHeadingOccupation.textContent = "Occupation";
  const $tableHeadingRole = document.createElement("th");
  $tableHeadingRole.textContent = "Role";

  for (let i = 0; i < freelancers.length; i++) {
    const row = $table.insertRow(i);
    for (let j = 0; j < 3; j++) {
      const oldData = displayFreelancer(freelancers[i]);
      const newData = oldData.innerHTML;
      row.innerHTML = newData;
    }
  }
  $app.append($tableHeadingName);
  $app.append($tableHeadingOccupation);
  $app.append($tableHeadingRole);
  $app.append($table);
};

const displayAverage = () => {
  const $average = document.createElement("p");
  $average.textContent = `The average hourly rate is $${String(average)}`;
  $average.classList.add("average");

  $app.append($average);
};

const main = () => {
  const $heading = document.createElement("h1");
  $heading.textContent = "Freelancer Forum";
  $app.append($heading);
  displayAverage();
  allFreelancers();
};

main();
