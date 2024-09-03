import { countdown } from './countdown.js'
import { removeHeroAnimation } from './removeHeroAnimation.js'
import { setTableTexts } from './setTableTexts.js'

const data = {
  KAL: 'Алла',
  VPS: 'Санька',

  KB: 'Батьки нареченої',
  VB: 'Батьки нареченого',
  VD: 'дядько Віталій',
  VH: 'Хрещений та Хрещена',
  VH1: 'Хрещена та Хрещений',
  KT: 'тітко Ольга',
  VP: 'Світлана та Франц',
  KL: 'Леся Іванівна',

  VN: "сім'я Носенко",
  KD: 'Дівки',
  OAD: 'Дмитро та Анастасія',
  VV: 'Вадим',
  KS: 'Сестричка',
  KBA: 'Андрій',
  VS: 'Сергій і Альона',
  VPZ: 'Женя і Юля',
  OB: 'Дмитро',
  OG: 'Геннадій',

  VA: 'Альбіна',
  KO: 'дядько Саша',
  KBD: 'Бабуся та Дідусь'
}

document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(document.location.search)
  const name = params.get('n')
  const invitationSubtitle = document.querySelector('.invitation__subtitle')
  const invitationTitle = document.querySelector('.invitation__title')
  const invitationPronouns = document.querySelectorAll(
    '.invitation__description-pronoun'
  )
  const invitationDescription = document.querySelector(
    '.invitation__description'
  )
  const tablesSubtitle = document.querySelector('.tables__subtitle')

  if (['KS', 'VA', 'VN', 'KAL', 'KT', 'KL'].indexOf(name) !== -1) {
    invitationSubtitle.innerText = 'Дорога'
  } else if (
    ['KO', 'VV', 'VD', 'KBA', 'VPS', 'OG', 'OB'].indexOf(name) !== -1
  ) {
    invitationSubtitle.innerText = 'Дорогий'
  } else {
    invitationSubtitle.innerText = 'Дорогі'
  }

  if (name === 'KAL') {
    invitationDescription.innerText =
      'Урочисто запрошуємо на наше весілля у якості дружки!'
  }

  if (name === 'VPS') {
    invitationDescription.innerText =
      'Урочисто запрошуємо на наше весілля у якості свідка, дружби, шафера та товаришом молодого!'
  }

  if (
    ['KS', 'KBA', 'VV', 'VPS', 'KAL', 'VA', 'OG', 'OB'].indexOf(name) !==
    -1
  ) {
    invitationPronouns.forEach(pronoun => {
      pronoun.textContent = 'тебе'
    })
    tablesSubtitle.textContent = 'Твоє місце'
  }

  invitationTitle.innerText = data[name] || 'Гості'

  setTableTexts(name)
  countdown()

  const container = document.querySelector('.container')
  if (container) {
    container.addEventListener(
      'scroll',
      () => {
        removeHeroAnimation()
      },
      { once: true }
    )
  }
})
