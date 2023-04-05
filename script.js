const APP = document.getElementById("app");

class Component {
    constructor(tag, textContent, styles, modifiers, events) {
        this.tag = tag;
        this.styles = styles;
        this.modifiers = modifiers;
        this.textContent = textContent;
        this.events = events;
    }

    render() {
        let element = document.createElement(this.tag);
        element.textContent = this.textContent;

        for (let key in this.styles) {
            element.style[key] = this.styles[key];
        }

        for (let modifier of this.modifiers) {
            element.classList.add(modifier);
        }

        for (let key in this.events) {
            element.addEventListener(key, this.events[key]);
        }

        return element;
    }
}

let buttons = [
    button1 = new Component(
        "button",
        "Button 1",
        {backgroundColor: 'red', color: 'white'},
        ['btn', 'btn-lg'],
        {click: () => console.log('Button 1 clicked!')}
    ),
    button2 = new Component(
        "button",
        "Button 2",
        {},
        ['btn', 'btn-md', 'success'],
        {click: () => console.log('Button 2 clicked!')}
    ),
    button3 = new Component(
        "button",
        "Button 3",
        {},
        ['btn', 'btn-sm', 'warning'],
        {click: () => console.log('Button 3 clicked!')}
    ),
]

buttons.forEach(button => {
    APP.appendChild(button.render());
})


