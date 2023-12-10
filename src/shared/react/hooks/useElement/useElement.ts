import { RefObject, useRef } from 'react';

interface Returned<HTMLElementType extends HTMLElement> {
    target: RefObject<HTMLElementType>;
}

export function useElement<HTMLElementType extends HTMLElement = any>(): Returned<HTMLElementType> {
    const target = useRef<HTMLElementType>(null);

    return {
        target,
    };
}
