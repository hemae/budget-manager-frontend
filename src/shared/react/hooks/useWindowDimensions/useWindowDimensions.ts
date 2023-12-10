import { useCallback, useEffect, useState } from 'react';

interface Returned {
    /** Window width*/
    width: number;
    /** Window height*/
    height: number;
}

export function useWindowDimensions(): Returned {
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    const resizeHandler = useCallback(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, [setWidth, setHeight]);

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, [resizeHandler]);

    return {
        width,
        height,
    };
}
