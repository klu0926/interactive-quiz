

// Inorder to play 'hover' event sound effect,
// users will need to interact with a button first
function noticeButton() {
  const button = document.querySelector('#notice-button')
  button.addEventListener('click', () => {
    const fill = document.querySelector('#notice-fill')
    if (fill) {
      const buttonSound = new Audio('./fallout-sound/pip-boy-tab-change.mp3')
      buttonSound.play()
      // wait for a little bit before closing fill div for the 'old tech feel'
      setTimeout(() => {
        fill.classList.add('hidden')
      }, 700);
    }
  })
}

function addSoundEffects() {
  // Add sound to question
  let selected = false
  const minTimeBeforeSoundPlayAgain = 300
  const questions = document.querySelectorAll('.question-div')
  questions.forEach(q => q.addEventListener('mouseenter', () => {

    if (!selected) {
      const questionSound = new Audio('./fallout-sound/pip-boy-tab-change-short.mp3')
      questionSound.play()
      selected = true

      setTimeout(() => {
        selected = false
      }, minTimeBeforeSoundPlayAgain)
    }
  }))

  // Add sound to question selection
  const selections = document.querySelectorAll('input[type="radio"]')
  selections.forEach(s => s.addEventListener('click', () => {
    const selectSound = new Audio('./fallout-sound/pip-boy-select.mp3')
    selectSound.play()
  }))

  // Add sound to submit
  const submit = document.querySelector('#submit-button')
  submit.addEventListener('mouseenter', () => {
    const submitHoverSound = new Audio('./fallout-sound/pip-boy-tab-change-short.mp3')
    submitHoverSound.play()
  })
}

document.addEventListener('DOMContentLoaded', () => {
  noticeButton()
  addSoundEffects()
})