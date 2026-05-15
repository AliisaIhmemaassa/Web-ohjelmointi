
const toggleButton = document.createElement('button');
toggleButton.onclick = toggleTheme;
document.querySelector('.navbar').appendChild(toggleButton);

applyTheme();

function applyTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleButton.textContent = 'Vaalea teema';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleButton.textContent = 'Tumma teema';
    }
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleButton.textContent = 'Tumma teema';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleButton.textContent = 'Vaalea teema';
        localStorage.setItem('theme', 'dark');
    }
}
