//import Smooth from './smooth-scrolling.js'
//var Smooth = require('./smooth-scrolling.js');

console.log(window.Smooth)

const section = document.querySelector('.vs-section')
const smooth = new Smooth({
    native: false,
    section: section,
    ease: 0.1,
    preload:true
})

smooth.init()