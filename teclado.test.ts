import { expect, test} from '@jest/globals'
import { countTime } from './teclado'

const number = 1297;
const keyboard1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const keyboard2 = [0, 1, 2, 9, 7, 5, 6, 3, 8, 4];

test('Para la cifra 1297 y el caso 1 el resultado debe ser 11', () => {
    expect(countTime(number, keyboard1)).toBe(11);
})


test('Para la cifra 1297 y el caso 2 el resultado debe ser 4', () => {
    expect(countTime(number, keyboard2)).toBe(4);
})