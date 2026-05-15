const pieces = document.querySelectorAll('.hitbox');
let revealedCount = 0;
pieces.forEach((piece) => {
  piece.addEventListener('click', function() {
    if (revealedCount < 4){revealedCount++;}
    if (revealedCount === 1){document.getElementById('Sb2').style.opacity = '1';}
    if (revealedCount === 2){document.getElementById('Sb3').style.opacity = '1';}
    if (revealedCount === 3){document.getElementById('Sb4').style.opacity = '1';}
    if (revealedCount === 4){document.getElementById('bugged').play();}
  })
  piece.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    if (revealedCount === 4){revealedCount--;}
    if (revealedCount > 0){revealedCount--;}
    if (revealedCount < 4){document.getElementById('bugged').pause(); document.getElementById('bugged').currentTime = 0}
    if (revealedCount < 3){document.getElementById('Sb4').style.opacity = '0';}
    if (revealedCount < 2){document.getElementById('Sb3').style.opacity = '0';}
    if (revealedCount < 1){document.getElementById('Sb2').style.opacity = '0';}
  })
});