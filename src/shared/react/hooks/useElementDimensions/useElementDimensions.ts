import { RefObject, useCallback, useEffect, useState } from 'react';

interface Options<HTMLElementType extends HTMLElement> {
    /** Target HTML element*/
    target: RefObject<HTMLElementType>;
    /** If width of target element depends on window width*/
    windowWidth?: number;
    /** If width of target element depends on window height*/
    windowHeight?: number;
}

interface Returned {
    /** Element width*/
    width: number;
    /** Element height*/
    height: number;
    /** if need refresh values*/
    refreshValues: () => void;
}

export function useElementDimensions<HTMLElementType extends HTMLElement = any>(
    options: Options<HTMLElementType>,
): Returned {
    const { target, windowWidth, windowHeight } = options;

    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        setWidth(target?.current?.clientWidth || 0);
    }, [target?.current, windowWidth]);

    useEffect(() => {
        setHeight(target?.current?.clientHeight || 0);
    }, [target?.current, windowHeight]);

    const refreshValues = useCallback(() => {
        setTimeout(() => {
            setWidth(target?.current?.clientWidth || 0);
        }, 50);
        setHeight(target?.current?.clientHeight || 0);
    }, [target?.current]);

    return {
        width,
        height,
        refreshValues,
    };
}
