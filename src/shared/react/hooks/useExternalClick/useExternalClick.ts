import { MouseEventHandler, useCallback, useEffect, useState } from 'react';

type Options = {
    isElement?: boolean;
    setElementNonactive: () => void;
};

type Returned = {
    elementOver: MouseEventHandler;
    elementLeave: MouseEventHandler;
};

export function useExternalClick(options: Options): Returned {
    const { isElement = false, setElementNonactive } = options;

    const [isOnElement, setIsOnElement] = useState<boolean>(false);

    const elementOver: MouseEventHandler = useCallback(() => {
        if (!isOnElement) setIsOnElement(true);
    }, [isOnElement]);

    const elementLeave: MouseEventHandler = () => setIsOnElement(false);

    const clickHandler = useCallback((): void => {
        if (!isOnElement) setElementNonactive();
    }, [isOnElement, setElementNonactive]);

    useEffect(() => {
        if (isElement) window.addEventListener('click', clickHandler);
        else document.addEventListener('click', clickHandler);
        return () => {
            window.removeEventListener('click', clickHandler);
            document.removeEventListener('click', clickHandler);
        };
    }, [clickHandler, isElement]);

    return {
        elementOver,
        elementLeave,
    };
}
