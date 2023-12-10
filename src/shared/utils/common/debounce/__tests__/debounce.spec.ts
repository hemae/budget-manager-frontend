import { debounce } from '../debounce';

const debounceCallback = jest.fn();
const debounceTime = 5;

describe('debounce function', () => {
    it('debounce not called', () => {
        debounce(debounceCallback, debounceTime);
        expect(debounceCallback).not.toBeCalled();
    });

    it('debounce called', () => {
        debounce(debounceCallback, debounceTime);
        setTimeout(() => {
            expect(debounceCallback).toBeCalled();
        }, 5);
    });
});
