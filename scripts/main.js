// Tailwind config
tailwind.config = {
    darkMode: 'class'
}

if (localStorage.theme === 'dark') {
    document.getElementsByTagName('html')[0].classList.add('dark')
    document.getElementsByTagName('html')[0].classList.add('bg-slate-900')
}

function toggleTheme() {
    if (localStorage.theme === 'dark') {
        document.getElementsByTagName('html')[0].classList.remove('dark')
        document.getElementsByTagName('html')[0].classList.remove('bg-slate-900')
        localStorage.theme = 'light'
    } else {
        document.getElementsByTagName('html')[0].classList.add('dark')
        document.getElementsByTagName('html')[0].classList.add('bg-slate-900')
        localStorage.theme = 'dark'
    }
}
