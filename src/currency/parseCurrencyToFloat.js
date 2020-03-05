/**
 * Converts a string on BRL currency format to float
 * 
 * @param {string} price ex. R$ 24,20
 * 
 * @return {float} Formatted price, ex: 24.2
 */
module.exports = parseCurrencyToFloat = price => {
  if (typeof price === 'string') {
    const strPrice = price
      .split('R$ ')[1]
      .replace(/\./g, '')
      .replace(',', '.')

    return parseFloat(strPrice)
  } else {
    return price
  }
}