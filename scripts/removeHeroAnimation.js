export const removeHeroAnimation = () => {
  const hero = document.querySelector('.hero')

  if (hero) {
    hero.classList.remove('animated')
  }
}
