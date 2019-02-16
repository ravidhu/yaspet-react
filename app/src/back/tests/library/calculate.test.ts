import { myCustomSum } from '../../library/calculate';

test('basic', () => {
    expect(myCustomSum()).toBe(0);
});

test('basic again', () => {
    expect(myCustomSum(1, 2)).toBe(3);
});