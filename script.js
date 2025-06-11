// ----------------------------
// 🎵 Setlist Generator
// ----------------------------

const songs = [
    "No Body European Tour Intro",
    "A Marrow Escape",
    "The Final Pulse",
    "Shadow Over the Stage",
    "Encore: Lights Out"
  ];
  
  function generateSetlist() {
    const shuffledSongs = songs.sort(() => Math.random() - 0.5);
  
    // This line updates the webpage by adding new HTML content using JavaScript.
    // Think of it like telling JavaScript: “Print this list onto the page.”
    document.getElementById("setlist").innerHTML =
      shuffledSongs.map(song => `<li>${song}</li>`).join('');
  }
  
  document.getElementById("generateSetlist").addEventListener("click", generateSetlist);
  
  // ----------------------------
  // ⏳ Countdown Timer
  // ----------------------------

  const tourStart = new Date("2025-08-01T20:00:00");
  const countdown = document.getElementById("countdown");
  
  function updateCountdown() {
    const now = new Date();
    const diff = tourStart - now;
  
    if (diff <= 0) {
      countdown.textContent = "The tour has started!";
      clearInterval(timer);
      return;
    }
  
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    countdown.textContent = `⏰ ${hours}h ${minutes}m ${seconds}s until showtime`;
  }
  
  const timer = setInterval(updateCountdown, 1000);
  
  // ----------------------------
  // 🛠️ Feature Scaffolds
  // ----------------------------
  
  // 1️⃣ VIP Ticket Winner Generator
  document.getElementById("vipWinner").innerHTML = `
    <h3>VIP Ticket Winner</h3>
    <button id="pickWinner">Pick Winner</button>
    <div id="winnerOutput"></div>
  `;
  
  document.getElementById("pickWinner").addEventListener("click", () => {
    // Add your code here
  });
  
  // 2️⃣ Fan Favorite Showdown
  document.getElementById("fanFavorite").innerHTML = `
    <h3>Fan Favorite Showdown</h3>
    <button id="vote">Vote</button>
    <div id="voteCount">Votes: 0</div>
  `;
  
  document.getElementById("vote").addEventListener("click", () => {
    // Add your code here
  });
  
  // 3️⃣ Tour Date Spotlight
  document.getElementById("tourHighlight").innerHTML = `
    <h3>Tour Date Spotlight</h3>
    <ul>
    <li id="cityOslo">Oslo</li>
    <li id="cityBerlin">Berlin</li>
    <li id="cityLondon">London</li>
    </ul>
  `;

  // Sample event listener for one city
  document.getElementById("cityOslo").addEventListener("click", () => {
    // Add your code here
  });
  
  // Students will need to add one for each remaining city (Berlin and London)
  
  // 4️⃣ On the Road Again
  const tourDates = [
    { city: "Oslo", date: new Date("2025-08-01T20:00:00") },
    { city: "Berlin", date: new Date("2025-08-05T20:00:00") },
    { city: "London", date: new Date("2025-08-10T20:00:00") }
  ];
  
  document.getElementById("nextTourStop").innerHTML = `
    <h3>On the Road Again</h3>
    <div id="nextStop"></div>
  `;
  
  // This logic can run on page load or refresh
  function displayNextTourStop() {
    const now = new Date();
    // Find all upcoming dates
    const upcoming = tourDates.filter(t => t.date > now).sort((a, b) => a.date - b.date);
    const nextStopDiv = document.getElementById("nextStop");
    if (upcoming.length > 0) {
      const next = upcoming[0];
      nextStopDiv.innerHTML = `<strong>Next Concert:</strong> ${next.city} on ${next.date.toLocaleDateString()} at ${next.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        <div id='mainCountdown' style='font-size:1.1em;margin:8px 0;'></div>`;
      // Add smaller countdowns for the rest
      if (upcoming.length > 1) {
        nextStopDiv.innerHTML += `<div style='margin-top:10px;font-size:0.95em;color:#ccc;'>Upcoming:</div>`;
        for (let i = 1; i < upcoming.length; i++) {
          nextStopDiv.innerHTML += `<div class='mini-countdown' id='miniCountdown${i}' style='font-size:0.85em;color:#aaa;'></div>`;
        }
      }
      updateConcertCountdowns(upcoming);
      if (window.concertCountdownTimer) clearInterval(window.concertCountdownTimer);
      window.concertCountdownTimer = setInterval(() => updateConcertCountdowns(upcoming), 1000);
    } else {
      nextStopDiv.innerHTML = "No upcoming concerts.";
    }
  }

  function updateConcertCountdowns(upcoming) {
    const now = new Date();
    // Main countdown for next concert
    const next = upcoming[0];
    const diff = next.date - now;
    if (diff > 0) {
      const {h, m, s, d} = getTimeParts(diff);
      document.getElementById('mainCountdown').textContent = `⏰ ${d}d ${h}h ${m}m ${s}s until showtime`;
    } else {
      document.getElementById('mainCountdown').textContent = 'The concert is starting!';
    }
    // Mini countdowns for the rest
    for (let i = 1; i < upcoming.length; i++) {
      const diff2 = upcoming[i].date - now;
      if (diff2 > 0) {
        const {h, m, s, d} = getTimeParts(diff2);
        document.getElementById(`miniCountdown${i}`).textContent = `${upcoming[i].city}: ${d}d ${h}h ${m}m ${s}s`;
      } else {
        document.getElementById(`miniCountdown${i}`).textContent = `${upcoming[i].city}: Starting!`;
      }
    }
  }

  function getTimeParts(ms) {
    const d = Math.floor(ms / (1000 * 60 * 60 * 24));
    const h = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const m = Math.floor((ms / (1000 * 60)) % 60);
    const s = Math.floor((ms / 1000) % 60);
    return {d, h, m, s};
  }
  
  // 5️⃣ Entry Checkpoint
  document.getElementById("emailCheck").innerHTML = `
    <h3>Entry Checkpoint</h3>
    <input type="email" id="emailInput" placeholder="Enter email">
    <button id="checkEmail">Check</button>
    <div id="emailResult"></div>
  `;
  
  document.getElementById("checkEmail").addEventListener("click", () => {
    // Add your code here
  });
  
  // 6️⃣ Band Bio Toggle
  document.getElementById("bioToggle").innerHTML = `
    <h3>Band Bio Toggle</h3>
    <button id="toggleBio">Show/Hide Bio</button>
    <p id="bio" style="display:none;">Skullcapz is a heavy metal band from Norway, known for their dark, intense sound and high-energy shows.</p>
  `;

  document.getElementById("toggleBio").addEventListener("click", () => {
    // Add your code here
  });

  document.addEventListener("DOMContentLoaded", displayNextTourStop);