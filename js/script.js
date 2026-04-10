// =========================
// DASHBOARD SYSTEM
// =========================

function updateDashboard() {
  let quizzes = JSON.parse(localStorage.getItem("quizzes") || "[]");
  let labs = JSON.parse(localStorage.getItem("labs") || "[]");
  let exams = JSON.parse(localStorage.getItem("exams") || "[]");

  if (document.getElementById("quizCount")) {
    document.getElementById("quizCount").innerText = quizzes.length;
  }

  if (document.getElementById("labCount")) {
    document.getElementById("labCount").innerText = labs.length;
  }

  if (document.getElementById("examCount")) {
    document.getElementById("examCount").innerText = exams.length;
  }
}

// =========================
// QUIZ UPLOAD
// =========================
function saveQuiz() {
  let title = document.getElementById("quizTitle").value;

  let quizzes = JSON.parse(localStorage.getItem("quizzes") || "[]");

  quizzes.push({ title: title });

  localStorage.setItem("quizzes", JSON.stringify(quizzes));

  alert("Quiz saved!");
}

// =========================
// LAB UPLOAD + DISPLAY
// =========================
function saveLab() {
  let title = document.getElementById("labTitle").value;

  let labs = JSON.parse(localStorage.getItem("labs") || "[]");

  labs.push({ title: title });

  localStorage.setItem("labs", JSON.stringify(labs));

  displayLabs();

  alert("Lab saved!");
}

function displayLabs() {
  let labs = JSON.parse(localStorage.getItem("labs") || "[]");

  let list = document.getElementById("labList");

  if (!list) return;

  list.innerHTML = "";

  labs.forEach((lab) => {
    let li = document.createElement("li");
    li.innerText = lab.title;
    list.appendChild(li);
  });
}

// =========================
// EXAM UPLOAD
// =========================
function saveExam() {
  let title = document.getElementById("examTitle").value;

  let exams = JSON.parse(localStorage.getItem("exams") || "[]");

  exams.push({ title: title });

  localStorage.setItem("exams", JSON.stringify(exams));

  alert("Exam saved!");
}

// =========================
// CAROUSEL (YOUR LAB IMAGES)
// =========================
let images = [
  "images/lab1.png",
  "images/lab2.png"
];

let index = 0;

function showImage() {
  let img = document.getElementById("slide");
  if (img) img.src = images[index];
}

function next() {
  index = (index + 1) % images.length;
  showImage();
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}

// =========================
// AUTO RUN
// =========================
displayLabs();
showImage();
