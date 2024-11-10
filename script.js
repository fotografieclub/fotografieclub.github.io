document.addEventListener('DOMContentLoaded', function() {
  // Hardcoded rooster data in JavaScript (direct in code)
  const scheduleData = {
    maandag: {
      "08:15-09:05": "",
      "09:05-09:55": "",
      "09:55-10:15": "pauze",
      "10:15-11:05": "",
      "11:05-11:55": "",
      "11:55-12:25": "Pauze",
      "12:25-13:15": "",
      "13:15-14:05": "",
      "14:05-14:25": "Pauze",
      "14:25-15:15": "",
      "15:15-16:05": "",
      "16:05-17:05": "110a"
    },
    dinsdag: {
      "08:15-09:05": "",
      "09:05-09:55": "",
      "09:55-10:15": "Pauze",
      "10:15-11:05": "",
      "11:05-11:55": "",
      "11:55-12:25": "Pauze",
      "12:25-13:15": "",
      "13:15-14:05": "",
      "14:05-14:25": "Pauze",
      "14:25-15:15": "",
      "15:15-16:05": "",
      "16:05-17:05": "Vrij"
    },
    woensdag: {
      "08:15-09:05": "",
      "09:05-09:55": "",
      "09:55-10:15": "Pauze",
      "10:15-11:05": "",
      "11:05-11:55": "",
      "11:55-12:25": "Pauze",
      "12:25-13:15": "",
      "13:15-14:05": "",
      "14:05-14:25": "Pauze",
      "14:25-15:15": "",
      "15:15-16:05": "",
      "16:05-17:05": "Vrij"
    },
    donderdag: {
      "08:15-09:05": "",
      "09:05-09:55": "",
      "09:55-10:15": "Pauze",
      "10:15-11:05": "",
      "11:05-11:55": "",
      "11:55-12:25": "Pauze",
      "12:25-13:15": "",
      "13:15-14:05": "",
      "14:05-14:25": "Pauze",
      "14:25-15:15": "",
      "15:15-16:05": "",
      "16:05-17:05": "ontmoeting ingang"
    },
    vrijdag: {
      "08:15-09:05": "",
      "09:05-09:55": "",
      "09:55-10:15": "pauze",
      "10:15-11:05": "",
      "11:05-11:55": "",
      "11:55-12:25": "pauze",
      "12:25-13:15": "",
      "13:15-14:05": "",
      "14:05-14:25": "pauze",
      "14:25-15:15": "",
      "15:15-16:05": "",
      "16:05-17:05": "Les in 110d"
    },
    zaterdag: {
      "08:15-09:05": "Vrij",
      "09:05-09:55": "Vrij",
      "09:55-10:15": "Vrij",
      "10:15-11:05": "Vrij",
      "11:05-11:55": "Vrij",
      "11:55-12:25": "Vrij",
      "12:25-13:15": "Vrij",
      "13:15-14:05": "Vrij",
      "14:05-14:25": "Vrij",
      "14:25-15:15": "Vrij",
      "15:15-16:05": "Vrij",
      "16:05-17:05": "Vrij"
    },
    zondag: {
      "08:15-09:05": "Vrij",
      "09:05-09:55": "Vrij",
      "09:55-10:15": "Vrij",
      "10:15-11:05": "Vrij",
      "11:05-11:55": "Vrij",
      "11:55-12:25": "Vrij",
      "12:25-13:15": "Vrij",
      "13:15-14:05": "Vrij",
      "14:05-14:25": "Vrij",
      "14:25-15:15": "Vrij",
      "15:15-16:05": "Vrij",
      "16:05-17:05": "Vrij"
    }
  };

  const scheduleBody = document.getElementById('schedule-body');
  const times = [
    "08:15-09:05", "09:05-09:55", "09:55-10:15", "10:15-11:05", "11:05-11:55", "11:55-12:25", "12:25-13:15",
    "13:15-14:05", "14:05-14:25", "14:25-15:15", "15:15-16:05", "16:05-17:05"
  ];

  times.forEach(time => {
    const row = document.createElement('tr');
    const timeCell = document.createElement('td');
    timeCell.textContent = time;
    row.appendChild(timeCell);

    // Voeg voor elke dag de activiteit in dit tijdsblok toe
    ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'].forEach(day => {
      const cell = document.createElement('td');
      cell.textContent = scheduleData[day][time] || "Normale les"; // Toon 'Normale les' als er geen activiteit is
      if (time.includes("Pauze")) {
        cell.classList.add('break'); // Pauzes highlighten met vetgedrukte tekst
      } else if (scheduleData[day][time] === "") {
        cell.classList.add('empty');
      }
      row.appendChild(cell);
    });

    scheduleBody.appendChild(row);
  });
});
