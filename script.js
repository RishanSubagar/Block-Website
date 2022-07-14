const menuToggle = document.querySelector('.toggle')
const homepage = document.querySelector('.homepage')
const page = document.querySelector
('.page')

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  homepage.classList.toggle('active')
})

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  page.classList.toggle('active')
})
