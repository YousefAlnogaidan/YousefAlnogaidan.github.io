// Load items from JSON files
function loadItems(file) {
  return fetch(file)
    .then(response => response.json())
    .then(data => data.items);
}

// Generate a random item from the given items array
function generateRandomItem(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex].name;
}

// Generate random builds
async function generateRandomBuild() {
  const rightHandWeapons = await loadItems('weapons_RightHand.json');
  const leftHandWeapons = await loadItems('weapons_LeftHand.json');
  const chests = await loadItems('chests.json');
  const gauntlets = await loadItems('gauntlets.json');
  const helms = await loadItems('helms.json');
  const legs = await loadItems('legs.json');
  const sorceries = await loadItems('sorceries.json');
  const incantations = await loadItems('incantations.json');
  const talismans = await loadItems('talisman.json'); // Load talismans items

  const randomRightHandWeapon = generateRandomItem(rightHandWeapons);
  const randomLeftHandWeapon = generateRandomItem(leftHandWeapons);
  const randomChest = generateRandomItem(chests);
  const randomGauntlet = generateRandomItem(gauntlets);
  const randomHelm = generateRandomItem(helms);
  const randomLegs = generateRandomItem(legs);
  const randomSorceries = generateRandomItems(sorceries, 10);
  const randomIncantations = generateRandomItems(incantations, 10);
  const randomTalismans = generateRandomItems(talismans, 4); // Generate random talismans

  displayBuild(randomRightHandWeapon, randomLeftHandWeapon, randomChest, randomGauntlet, randomHelm, randomLegs);
  displaySorceries(randomSorceries);
  displayIncantations(randomIncantations);
  displayTalismans(randomTalismans); // Display the randomized talismans
}

// Generate random items from the given items array
function generateRandomItems(items, count) {
  const randomItems = [];
  const shuffledItems = items.slice();

  while (randomItems.length < count && shuffledItems.length > 0) {
    const randomIndex = Math.floor(Math.random() * shuffledItems.length);
    const randomItem = shuffledItems.splice(randomIndex, 1)[0];
    randomItems.push(randomItem.name);
  }

  return randomItems;
}

// Display the randomized build
function displayBuild(rightHandWeapon, leftHandWeapon, chest, gauntlet, helm, legs) {
  document.getElementById('right-hand-weapon').textContent = rightHandWeapon;
  document.getElementById('left-hand-weapon').textContent = leftHandWeapon;
  document.getElementById('chest').textContent = chest;
  document.getElementById('gauntlet').textContent = gauntlet;
  document.getElementById('helm').textContent = helm;
  document.getElementById('legs').textContent = legs;
}

// Display the randomized sorceries
function displaySorceries(sorceries) {
  const sorceriesList = sorceries.map(sorcery => `<li>${sorcery}</li>`).join('');
  document.getElementById('sorceries').innerHTML = sorceriesList;
}

// Display the randomized incantations
function displayIncantations(incantations) {
  const incantationsList = incantations.map(incantation => `<li>${incantation}</li>`).join('');
  document.getElementById('incantations').innerHTML = incantationsList;
}

// Display the randomized talismans
function displayTalismans(talismans) {
  const talismansList = talismans.map(talisman => `<li>${talisman}</li>`).join('');
  document.getElementById('talismans').innerHTML = talismansList;
}

// Generate a random build when the page loads
window.onload = generateRandomBuild;
