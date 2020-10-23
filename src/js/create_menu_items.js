import markupCardsItems from "../templates/menu.hbs"
import menuCards from "../menu.json"


const containerMenu = document.querySelector(`.js-menu`)
const menuCardsMarkup = creatrCardsMarkup(menuCards)

containerMenu.insertAdjacentHTML('beforeend', menuCardsMarkup)

function creatrCardsMarkup(items) {
    return items.map(markupCardsItems).join(' ')
}