# Ock Helpers

A collection of helpers to boost the development speed and code share

## Installation

Use npm or yarn

```bash
yarn add bla
```

```bash
npm install bla
```

## Usage

```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```

## Features

### Currency

To parse/format money using the pt-br/BRL currency

#### addCurrency

Add a R$ BRL currency if necessary

- Adds R$ prefix

```js
const withPrefix = addCurrency('20.0')
// return will be: R$ 20.0
```

#### parseCurrencyToABNT

Format a number (float) to a BRL currency according to ABNT

- Convert dots to commas
- Adds R$ prefix
- Adds 0 at end if necessary

```js
const abntFormat = parseCurrencyToABNT('20.0')
// return will be: R$ 20,00
```

#### parseCurrencyToFloat

Converts a string on BRL currency format to float

- Convert commas to dots
- Removes R$ prefix
- Removes the 0 at end if exists

```js
const floatCurrency = parseCurrencyToFloat('R$ 20,00')
// return will be: 20.0
```

## License
[MIT](https://choosealicense.com/licenses/mit/)