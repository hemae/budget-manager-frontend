import { DebounceCallback } from './interfaces';

/** the function debounce returns the function that calls specified callback in specified time (ms),
 * but prevents call if returned function called before specified time
 * */

export const debounce = (cb: DebounceCallback, ms: number) => {
    let timer: any;
    return function (this: any, ...args: any[]) {
        const onComplete = () => {
            cb.apply(this, args);
            timer = null;
        };
        if (timer) clearTimeout(timer);
        timer = setTimeout(onComplete, ms);
    };
};
