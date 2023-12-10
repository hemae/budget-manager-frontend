import React, { useCallback, useEffect } from 'react';

interface Options {
    keyName?: React.KeyboardEvent['key'] | React.KeyboardEvent['key'][];
    keyCode?: React.KeyboardEvent['code'] | React.KeyboardEvent['code'][];
    isShiftKey?: boolean;
    isCtrlKey?: boolean;
    onDown: () => void;
}

export function useKeyDown(options: Options): void {
    const { onDown, keyName, keyCode, isShiftKey = false, isCtrlKey = false } = options;

    const keyHandler = useCallback(
        async (event: KeyboardEvent): Promise<void> => {
            event?.stopPropagation();
            if (Array.isArray(keyName)) {
                if (
                    keyName.every((kn) => event.key === kn || event.code === keyCode) &&
                    (isShiftKey ? event.shiftKey : true) &&
                    (isCtrlKey ? event.ctrlKey : true)
                )
                    await onDown();
            } else {
                if (
                    (event.key === keyName || event.code === keyCode) &&
                    (isShiftKey ? event.shiftKey : true) &&
                    (isCtrlKey ? event.ctrlKey : true)
                )
                    await onDown();
            }
        },
        [onDown, keyName, keyCode, isShiftKey, isCtrlKey],
    );

    useEffect(() => {
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    }, [keyHandler]);
}
