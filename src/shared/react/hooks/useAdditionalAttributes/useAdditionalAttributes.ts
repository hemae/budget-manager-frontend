import { RefObject, useEffect, useRef } from 'react';

interface Options extends Record<string, string> {}

interface Returned<T> {
    root: RefObject<T>;
}

export function useAdditionalAttributes<T extends HTMLElement = any>(options: Options): Returned<T> {
    const root = useRef<T>(null);

    useEffect(() => {
        if (root) {
            Object.keys(options).forEach((key) => root.current?.setAttribute(key, options[key].toString()));
        }
    }, [root, options]);

    return { root };
}
