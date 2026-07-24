// Figures out which message to show, handles photos, and the passcode gate.

// ---- Passcode gate ---------------------------------------------------
const gate = document.getElementById("gate");
const card = document.getElementById("card");

function unlock() {
  gate.hidden = true;
  card.hidden = false;
  render();
}

function setupGate() {
  // No passcode set, or she already unlocked earlier this visit.
  if (!PASSCODE || sessionStorage.getItem("unlocked") === "yes") {
    unlock();
    return;
  }

  gate.hidden = false;
  const form = document.getElementById("gateForm");
  const input = document.getElementById("gateInput");
  const error = document.getElementById("gateError");
  input.focus();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.trim().toLowerCase() === PASSCODE.toLowerCase()) {
      sessionStorage.setItem("unlocked", "yes");
      unlock();
    } else {
      error.hidden = false;
      input.value = "";
      input.focus();
    }
  });
}

// ---- Which day are we on? -------------------------------------------
function daysBetween(from, to) {
  const a = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  const b = new Date(to.getFullYear(), to.getMonth(), to.getDate());
  return Math.round((b - a) / (1000 * 60 * 60 * 24));
}

const start = new Date(START_DATE + "T00:00:00");
const today = new Date();
const todayIndex = Math.max(0, daysBetween(start, today));
const maxIndex = Math.min(todayIndex, MESSAGES.length - 1);

let viewIndex = maxIndex;

const dayLabel = document.getElementById("dayLabel");
const message = document.getElementById("message");
const gallery = document.getElementById("gallery");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const todayBtn = document.getElementById("todayBtn");

// Accept either photos: ["a.jpg"] (new) or photo: "a.jpg" (old), or none.
function photosFor(entry) {
  if (Array.isArray(entry.photos)) return entry.photos.filter((p) => p && p.trim() !== "");
  if (entry.photo && entry.photo.trim() !== "") return [entry.photo];
  return [];
}

function render() {
  if (MESSAGES.length === 0) {
    dayLabel.textContent = "";
    message.textContent = "No messages yet — check back soon. 💛";
    gallery.hidden = true;
    return;
  }

  const entry = MESSAGES[viewIndex];
  dayLabel.textContent = "Day " + (viewIndex + 1);
  message.textContent = entry.text;

  const pics = photosFor(entry);
  gallery.innerHTML = "";
  if (pics.length > 0) {
    gallery.classList.toggle("single", pics.length === 1);
    pics.forEach((name) => {
      const img = document.createElement("img");
      img.src = "photos/" + name;
      img.alt = "A photo for you";
      img.className = "photo";
      gallery.appendChild(img);
    });
    gallery.hidden = false;
  } else {
    gallery.hidden = true;
  }

  prevBtn.disabled = viewIndex <= 0;
  nextBtn.disabled = viewIndex >= maxIndex;
  todayBtn.hidden = viewIndex === maxIndex;
}

prevBtn.addEventListener("click", () => { if (viewIndex > 0) { viewIndex--; render(); } });
nextBtn.addEventListener("click", () => { if (viewIndex < maxIndex) { viewIndex++; render(); } });
todayBtn.addEventListener("click", () => { viewIndex = maxIndex; render(); });

setupGate();
