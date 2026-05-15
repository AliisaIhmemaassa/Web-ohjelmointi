let currentPage = 1;
const totalPages = 4;

function showPage(page) {
  for (let i = 1; i <= totalPages; i++) {
    document.getElementById(`page${i}`).style.display = (i === page) ? "block" : "none";
  }

  document.getElementById("prevBtn").disabled = (page === 1 || page === 4);
  document.getElementById("nextBtn").disabled = (page === totalPages);
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}

function getAnswers() {
  return {
    answer1: document.getElementById("answer1").value,
    answer2: document.getElementById("answer2").value,
    answer3: document.getElementById("answer3").value
  };
}

function donePage() {
  const answers = getAnswers();
  const resultsDiv = document.getElementById("results");
  let a;
  if ( answers.answer3.toLowerCase().includes("a") || answers.answer3.toLowerCase().includes("o") || answers.answer3.toLowerCase().includes("u")) {
    a = "a"
  }
  else {
    a = "ä"
  }
  resultsDiv.innerHTML = `
    <h3>Tuloksesi:</h3>
    <p>Olet ${(answers.answer1 || 'Unknown').toLowerCase()} ${(answers.answer2 || 'Unknown').toLowerCase()}, joka syö ${(answers.answer3 || 'Unknown').toLowerCase()}${a}.</p>
  `;

  currentPage = 4;
  showPage(4);
}

showPage(currentPage);

document.addEventListener("DOMContentLoaded", function() {
  const page3 = document.getElementById("page3");
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Valmis";
  doneBtn.onclick = function() {
  if (!allFieldsFilled()) {
    alert('Täytäppä kaikki kentät!');
    return;
  }
  donePage();
};
  doneBtn.style.marginTop = "10px";
  doneBtn.style.width = "100%";
  page3.appendChild(doneBtn);
});
function allFieldsFilled() {
  const fields = ['answer1', 'answer2', 'answer3'];
  return fields.every(id => {
    const elem = document.getElementById(id);
    return elem && elem.value.trim() !== '';
  });
}
document.addEventListener("DOMContentLoaded", function() {
  const page4 = document.getElementById("page4");
  const againBtn = document.createElement("button");
  againBtn.textContent = "Tee uudestaan";
  againBtn.onclick = function() {
    document.getElementById("answer1").value = "";
    document.getElementById("answer3").value = "";
    document.getElementById("answer2").value = "";
    currentPage = 1;
    showPage(currentPage);
  };
  againBtn.style.marginTop = "10px";
  againBtn.style.width = "100%";
  page4.appendChild(againBtn);
});