customElements.define('my-button', class MyButton extends HTMLElement {
  constructor() {
    super()
    const button = document.createElement('button')
    button.textContent = 'Klicka här'
    button.addEventListener('click', () => {
      alert('Knappen klickades!')
    })
    this.appendChild(button)
  }
}
)
