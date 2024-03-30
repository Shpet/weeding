import data from '../data.json' with { type: 'json' };
import { countdown } from './countdown.js'
import { setTableTexts } from './setTableTexts.js'

document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(document.location.search)
  const name = params.get('n')
  const invitationSubtitle = document.querySelector('.invitation__subtitle')
  const invitationTitle = document.querySelector('.invitation__title')
  const invitationPronoun = document.querySelector(
    '.invitation__description-pronoun'
  )
  const invitationDescription = document.querySelector(
    '.invitation__description'
  )

  if (['KS', 'KA', 'VN', 'KAL', 'KT'].indexOf(name) !== -1) {
    invitationSubtitle.innerText = 'Дорога'
  } else if (
    ['KO', 'VV', 'VS', 'VD', 'KBA', 'VPS', 'VPZ'].indexOf(name) !== -1
  ) {
    invitationSubtitle.innerText = 'Дорогий'
  } else {
    invitationSubtitle.innerText = 'Дорогі'
  }

  if (name === 'KAL') {
    invitationDescription.innerText =
      'Урочисто запрошуємо на наше весілля у якості дружки!'
  }

  if (name === 'VS') {
    invitationDescription.innerText =
      'Урочисто запрошуємо на наше весілля у якості свідка, дружби, шафера та товаришом молодого!'
  }

  if (['KS', 'KBA', 'VV', 'VPS', 'VPZ', 'KAL', 'VS'].indexOf(name) !== -1) {
    invitationPronoun.textContent = 'тебе'
  }

  invitationTitle.innerText = data[name] || 'Гості'

  setTableTexts(name)
  countdown()
})
