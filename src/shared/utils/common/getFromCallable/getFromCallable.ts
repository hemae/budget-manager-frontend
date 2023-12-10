import { PropertyCallback } from './interfaces';

export function getFromCallable<Property = any>(property: PropertyCallback<Property>, ...args: any): Property {
    return typeof property === 'function' ? (property as Function)(...args) : property;
}
