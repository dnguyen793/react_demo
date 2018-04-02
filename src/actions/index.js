import types from './types';

export function tick() {
    const now = new Date().toLocaleTimeString();

    return {
        type: types.TICK,
        payload: now
    }
}