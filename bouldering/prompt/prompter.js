export class Prompter {
    constructor() {
        this.button = document.querySelector('[data-role="roll"]')
        this.output = document.querySelector('[data-role="prompt"]')
        this.button.addEventListener('click', (event) => this.roll(event))
    }

    roll(event) {
        this.output.innerHTML = 'What about a.. '
    }
}