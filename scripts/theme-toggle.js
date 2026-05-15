const toggleButton = document.createElement('button');
toggleButton.onclick = toggleTheme;
document.querySelector('.navbar').appendChild(toggleButton);

applyTheme();

function applyTheme() {
    const sheet = document.querySelector('link[rel="stylesheet"]');
    const page = sheet.dataset.page;

    if (localStorage.getItem('theme') === 'dark') {
        if (page === 'style1') {sheet.href = `styles/${page}-dark.css`;} 
        else {sheet.href = `../styles/${page}-dark.css`;}
        toggleButton.textContent = 'Vaalea teema';
    }
    else {
        if (page === 'style1') {sheet.href = `styles/${page}.css`;} 
        else {sheet.href = `../styles/${page}.css`;}
        toggleButton.textContent = 'Tumma teema';
    }
}

function toggleTheme() {
    const sheet = document.querySelector('link[rel="stylesheet"]');
    const page = sheet.dataset.page;

    if (localStorage.getItem('theme') === 'dark') {
        if (page === 'style1') {sheet.href = `styles/${page}.css`;} 
        else {sheet.href = `../styles/${page}.css`;}
        toggleButton.textContent = 'Tumma teema';
        localStorage.setItem('theme', 'light');
    } else {
        if (page === 'style1') {sheet.href = `styles/${page}-dark.css`;} 
        else {sheet.href = `../styles/${page}-dark.css`;}
        toggleButton.textContent = 'Vaalea teema';
        localStorage.setItem('theme', 'dark');
    }
}