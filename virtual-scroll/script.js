import {virtualScroll} from "./virtualscroll";

const scroller = new VirtualScroll();
scroller.on(event => {
    console.log(event)
});