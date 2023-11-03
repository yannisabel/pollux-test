document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-infos')
  const nameInput = document.getElementById("name")
  const emailInput = document.getElementById("email")
  const favoriteNumberInput = document.getElementById("favorite-number")

  function pressHandler(e) {
    const isValid = e.target.checkValidity()
    const iconElement = this.nextElementSibling.nextElementSibling

    if (!this.value) {
        iconElement.classList.remove('visible')
        iconElement.setAttribute('aria-hidden', true)
    } else {

      if (isValid) {
        iconElement.classList.add('visible')
        iconElement.removeAttribute('aria-hidden')
        this.classList.add('valid')
        this.classList.remove('invalid')
      } else {
          this.classList.add('invalid')
          this.classList.remove('valid')
      }
    }
  }

  form.addEventListener("input", () => {
    if (!form.checkValidity()) {
      document.getElementById('submit-button').setAttribute('disabled', 'disabled')
      document.getElementById('submit-button').setAttribute('aria-disabled', true)
    } else {
      document.getElementById('submit-button').removeAttribute('disabled')
      document.getElementById('submit-button').removeAttribute('aria-disabled')
    }
  })

  nameInput.addEventListener("input",pressHandler)
  emailInput.addEventListener("input",pressHandler)
  favoriteNumberInput.addEventListener("input",pressHandler)
  favoriteNumberInput.addEventListener("keypress", function (e) {
    if (isNaN(e.key)) e.preventDefault() // allow only numbers
  })
})