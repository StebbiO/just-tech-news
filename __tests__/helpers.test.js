const {format_date, format_plural} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020');
});

test('format_plural() return correct singular/plural nouns', () => {
    const singular = ("lion");
    const plural = ("tiger");

    expect(format_plural(singular, 1)).toBe("lion");
    expect(format_plural(plural, 2)).toBe("tigers");
});