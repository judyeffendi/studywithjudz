class Typewriter {
    constructor(elementId, text) {
        this.element = document.getElementById(elementId);
        this.text = text;
        this.i = 0;
    }

    typeWriter() {
        if (this.i < this.text.length) {
            this.element.innerHTML += this.text.charAt(this.i);
            this.i++;
            setTimeout(() => {
                this.typeWriter();
            }, 100);
        }
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const typewriter = new Typewriter("typing-text", "Come along for my journey from Software Engineer to Pre-Med Student preparing for Medical School. I developed this website as a way to help improve my study habits and inspire others to hold themselves accountable.");
    typewriter.typeWriter();
});
