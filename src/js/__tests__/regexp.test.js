// eslint-disable-next-line import/extensions
import Validator from '../regexp.js';

// eslint-disable-next-line no-undef
test('Checking 3 digits or more', () => {
  // eslint-disable-next-line no-undef
  expect(Validator.validateUsername('uuut5559sfhfef')).toBe(
    false,
  );
});

// eslint-disable-next-line no-undef
test('Checking start from a digit', () => {
  // eslint-disable-next-line no-undef
  expect(Validator.validateUsername('9uuu7856azcrt')).toBe(
    false,
  );
});

// eslint-disable-next-line no-undef
test('Checking end with -', () => {
  // eslint-disable-next-line no-undef
  expect(Validator.validateUsername('uuu6856agfh-')).toBe(
    false,
  );
});

// eslint-disable-next-line no-undef
test('Checking all rules', () => {
  // eslint-disable-next-line no-undef
  expect(Validator.validateUsername('uRut55_-59sfhfef')).toBe(
    true,
  );
});
