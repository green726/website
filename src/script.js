document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement; 

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        if (savedTheme === 'dark') {
            themeToggleButton.textContent = '☾';
        } else {
            themeToggleButton.textContent = '☼';
        }
    } else {
        themeToggleButton.textContent = '☼'; 
    }

    themeToggleButton.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');

        if (currentTheme === 'dark') {
            htmlElement.setAttribute('data-theme', 'light');
            themeToggleButton.textContent = '☼'; 
            localStorage.setItem('theme', 'light'); 
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            themeToggleButton.textContent = '☾'; 
            localStorage.setItem('theme', 'dark'); 
        }
    });
});
