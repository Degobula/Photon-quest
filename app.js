const quests = [
  { title: "Crystal Plains", description: "Find the Bandgap Scroll", xp: 20, done: false },
  { title: "Caverns of Illumina", description: "Craft your LED Sword", xp: 30, done: false },
  { title: "Eye of the Oracle", description: "Unlock PIN Photodiode", xp: 30, done: false },
  { title: "Realm of Radiowaves", description: "Harness Solar Beacons", xp: 40, done: false },
  { title: "Labs of Light", description: "Forge Photonic Core", xp: 50, done: false }
];

let totalXP = 0;
const xpDisplay = document.getElementById("xp");
const questsContainer = document.getElementById("quests");

function updateUI() {
  questsContainer.innerHTML = '';
  quests.forEach((q, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${q.title}</h2>
      <p>${q.description}</p>
      <button ${q.done ? "disabled" : ""} onclick="completeQuest(${index})">
        ${q.done ? "Completed" : `Complete (+${q.xp} XP)`}
      </button>
    `;
    questsContainer.appendChild(card);
  });
  xpDisplay.textContent = `XP: ${totalXP}`;
}

function completeQuest(index) {
  if (!quests[index].done) {
    quests[index].done = true;
    totalXP += quests[index].xp;
    updateUI();
  }
}

updateUI();