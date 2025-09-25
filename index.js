// Code your solution here
findMatching(['Tina', 'Stella', 'Sonia'], 'tina')

function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

fuzzyMatch(['Tina', 'Stella', 'Sonia', 'Brad'], 'Stella') //partial match

function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.startsWith(letters));
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}





