function Button(text) {
    this.text = text;
}

Button.prototype = {
    create: function () {
        var self = this;
        this.element = document.createElement('button');
        this.element.innerText = this.text;
        document.body.appendChild(this.element);
        this.element.addEventListener('click', function () {
            alert(self.text);
        });
    }
}

var btn1 = new Button('Hello');

btn1.create();

var btn2 = new Button('Ciao');

btn2.create();