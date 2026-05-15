let currentPage = 1;
const totalPages = 4;

load();


function showPage(page) {
  for (let i = 1; i <= totalPages; i++) {
    document.getElementById(`page${i}`).style.display = (i === page) ? "block" : "none";
  }
  document.getElementById("prevBtn").disabled = (page === 1 || page === 4);
  document.getElementById("nextBtn").disabled = (page === 3 || page === 4);
  document.getElementById("doneBtn").style.display = (page === 3) ? "inline-block" : "none";
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


function load() {
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
};


function donebtn() {
  if (!allFieldsFilled()) {
    alert('Täytäppä kaikki kentät!');
    return;
  }
  donePage();
};

function allFieldsFilled() {
  const fields = ['answer1', 'answer2', 'answer3'];
  return fields.every(id => {
    const elem = document.getElementById(id);
    return elem && elem.value.trim() !== '';
  });
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
    <h2>Tuloksesi:</h2>
    <p>Olet ${(answers.answer1 || 'Unknown').toLowerCase()} ${(answers.answer2 || 'Unknown').toLowerCase()}, joka syö ${(answers.answer3 || 'Unknown').toLowerCase()}${a}.</p>
  `;

  currentPage = 4;
  showPage(4);
}

function getAnswers() {
  return {
    answer1: document.getElementById("answer1").value,
    answer2: document.getElementById("answer2").value,
    answer3: document.getElementById("answer3").value
  };
}
