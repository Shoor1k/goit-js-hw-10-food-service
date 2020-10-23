// Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.
// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
// Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
// Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true, чтобы ползунок сдвинулся в правильное положение.
// Для удобства хранения списка тем используй такое перечисление.

const body = document.querySelector('body')
const themeSwitchBtn = document.querySelector('#theme-switch-toggle')

themeSwitchBtn.addEventListener('change', changeTheme)

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const curentTheme = localStorage.getItem('theme')

loadSavedTheme()


function changeTheme(event) {
    if (event.target.checked) {
      setDarkTheme()
    } else  { 
  setLightTheme()
    }
    let ChangeCurentTheme = body.dataset.theme
    localStorage.setItem('theme', ChangeCurentTheme)
}

function loadSavedTheme() {
    if (curentTheme === Theme.DARK) {
        themeSwitchBtn.setAttribute(`checked`, '')
      setDarkTheme()
    }
}

function setDarkTheme() { 
  body.classList.remove(`${Theme.LIGHT}`)
        body.classList.add(`${Theme.DARK}`)
        body.setAttribute('data-theme', Theme.DARK)
}
function setLightTheme() {
    body.classList.remove(`${Theme.DARK}`)
        body.classList.add(`${Theme.LIGHT}`)
    body.setAttribute('data-theme', Theme.LIGHT)
}




