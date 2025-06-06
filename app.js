document.addEventListener("DOMContentLoaded", () => {
  const modules = [
    {
      name: "Module 1: Introduction to Optoelectronics",
      mainQuest: "Defeat the Bandgap Beast",
      subQuests: [
        { topic: "Absorption and Emission", question: "What is the process where electrons fall and emit photons?", answer: "Emission", xp: 10 },
        { topic: "Bandgap Energy", question: "What energy separates the valence and conduction bands?", answer: "Bandgap", xp: 10 },
        { topic: "Carrier Dynamics", question: "What carriers are involved in conduction in semiconductors?", answer: "Electrons and Holes", xp: 10 }
      ]
    },
    {
      name: "Module 2: Light Sources",
      mainQuest: "Forge the LED Sword",
      subQuests: [
        { topic: "LEDs", question: "What determines the color of an LED?", answer: "Bandgap", xp: 10 },
        { topic: "Laser Diodes", question: "Which device emits coherent light?", answer: "Laser Diode", xp: 10 },
        { topic: "Spontaneous Emission", question: "Which emission occurs without external stimulation?", answer: "Spontaneous Emission", xp: 10 }
      ]
    }
  ];

  let playerXP = 0;
  const answered = {};

  const root = document.getElementById("root");

  function render() {
    root.innerHTML = `<h1>Photon Quest: Rise of the Opto-Knight</h1><p>XP: ${playerXP}</p>`;
    modules.forEach((mod, modIdx) => {
      const moduleDiv = document.createElement("div");
      moduleDiv.innerHTML = `<h2>${mod.name}</h2><h3>Main Quest: ${mod.mainQuest}</h3>`;
      mod.subQuests.forEach((q, subIdx) => {
        const key = `${modIdx}-${subIdx}`;
        const disabled = answered[key] ? "disabled" : "";
        const div = document.createElement("div");
        div.innerHTML = `
          <p><strong>${q.topic}:</strong> ${q.question}</p>
          <input type="text" id="input-${key}" ${disabled}/>
          <button ${disabled} onclick="submitAnswer('${modIdx}', '${subIdx}')">Submit</button>
        `;
        moduleDiv.appendChild(div);
      });
      root.appendChild(moduleDiv);
    });
  }

  window.submitAnswer = (modIdx, subIdx) => {
    const key = `${modIdx}-${subIdx}`;
    const input = document.getElementById(`input-${key}`);
    if (!input) return;

    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = modules[modIdx].subQuests[subIdx].answer.toLowerCase();
    if (userAnswer === correctAnswer && !answered[key]) {
      playerXP += modules[modIdx].subQuests[subIdx].xp;
      answered[key] = true;
      alert("Correct! XP +" + modules[modIdx].subQuests[subIdx].xp);
    } else {
      alert("Incorrect. Try again!");
    }
    render();
  };

  render();
});