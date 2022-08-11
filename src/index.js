import Model from './mvc/model.js'
import View from './mvc/view.js'
import Controller from './mvc/controller.js'

import confetti from 'canvas-confetti';

/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/


confetti.create(document.getElementById('canvas'), {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });

console.log('hello world again x2');

function main() {
    const m = new Model()
    const v = new View()
    const c = new Controller(m, v)

    c.sayHelloFromEveryone() // prove to ourselves the wiring all works
}

main()

