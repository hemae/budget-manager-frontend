import { useKeyDown } from '../useKeyDown';
import { renderHook, fireEvent } from '@testing-library/react';

describe('useKeyDown hook', () => {
    it('useKeyDown should handle key down event', () => {
        const callback = jest.fn();
        const event = new KeyboardEvent('keydown', {
            key: 'Escape',
        });
        const view = renderHook(() =>
            useKeyDown({
                keyName: 'Escape',
                onDown: callback,
            }),
        );
        expect(callback).toHaveBeenCalledTimes(0);
        fireEvent(document, event);
        expect(callback).toHaveBeenCalledTimes(1);
        jest.spyOn(document, 'removeEventListener');
        view.unmount();
        expect(document.removeEventListener).toHaveBeenCalledTimes(1);
        fireEvent(document, event);
        expect(callback).toHaveBeenCalledTimes(1);
    });

    it('useKeyDown shouldn`t handle unnecessary keydown event', () => {
        const callback = jest.fn();
        const event = new KeyboardEvent('keydown', {
            key: 'Enter',
        });

        renderHook(() =>
            useKeyDown({
                keyName: 'Escape',
                onDown: callback,
            }),
        );

        expect(callback).toHaveBeenCalledTimes(0);
        fireEvent(document, event);
        expect(callback).toHaveBeenCalledTimes(0);
    });
});
