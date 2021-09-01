import * as VirtualScroll from "./virtualscroll.js";
//
// console.log(virtualScroll)

// const scroller = new VirtualScroll();
// scroller.on(event => {
//     console.log(event)
// });

VirtualScroll.on(function(e){
    // e is an object that holds scroll values, including:
    e.deltaY; // <- amount of pixels scrolled vertically since last call
    e.deltaX; // <- amount of pixels scrolled horizontally since last call
});