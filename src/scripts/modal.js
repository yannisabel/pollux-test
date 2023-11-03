document.addEventListener('DOMContentLoaded', function () {
  const openButton = document.getElementById('modal-opening-button')
  const closeButtons = document.querySelectorAll('.close-modal')
  const form = document.getElementById('form-infos')

  function openModal(id) {
    form.reset()
    document.getElementById(id).classList.add('open')
  }

  function closeModal() {
    document.querySelector('.overlay.open').classList.remove('open')
    document.body.classList.remove('modal-open')
  }

  openButton.addEventListener('click', function (event) {
    event.stopPropagation()
    openModal('form-modal')
    document.getElementById('name').focus()
  })

  closeButtons.forEach(item => {
    item.addEventListener('click', function (event) {
      event.stopPropagation()
      closeModal()
    })
  })
})
