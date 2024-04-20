export function setTableTexts(name) {
  const tableTitle = document.querySelector('.tables__title')
  const tableText = document.querySelector('.tables__text')
  const tableWeeding = document.querySelector('.tables__table--weeding')
  const tableOne = document.querySelector('.tables__table--one')
  const tableTwo = document.querySelector('.tables__table--two')

  if (['KAL', 'VS'].indexOf(name) !== -1) {
    tableTitle.innerText = 'За столом молодят'
    tableWeeding.classList.add('tables__table--active')
    tableText.innerText = ''

    return
  }

  if (['KB', 'VB', 'VD', 'VH', 'VH1', 'KT', 'VP', 'KL'].indexOf(name) !== -1) {
    tableTitle.innerText = 'За столом №1'
    tableOne.classList.add('tables__table--active')

    return
  }

  tableTitle.innerText = 'За столом #2'
  tableTwo.classList.add('tables__table--active')
}
