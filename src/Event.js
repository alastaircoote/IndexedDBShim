import EventTarget from 'eventtarget';
import * as util from './util';

const {ShimEventTarget, ShimEvent, ShimCustomEvent} = EventTarget;

function createEvent (type, debug, evInit) {
    const ev = new ShimEvent(type, evInit);
    ev.debug = debug;
    return ev;
}

// We don't add within polyfill repo as might not always be the desired implementation
Object.defineProperty(ShimEvent, Symbol.hasInstance, {
    value: obj => util.isObj(obj) && 'target' in obj && typeof obj.bubbles === 'boolean'
});

export {createEvent, ShimEvent, ShimCustomEvent, ShimEventTarget};
