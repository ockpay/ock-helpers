const addCurrency = require('./addCurrency')
const parseCurrencyToFloat = require('./parseCurrencyToFloat')

/**
 * Format a number (float) to a BRL currency according to ABNT
 * 
 * @param {number} price A float number, ex: 24.2 
 * 
 * @return {string} Formatted string, ex: R$ 24,20
 */
module.exports = price => {
  let strPrice = (price || 0).toLocaleString('pt-BR')
  strPrice = strPrice.replace('.', ',')
  strPrice = addCurrency(strPrice)
  const decimals = strPrice.split(',')[1]
  const hasComma = decimals !== undefined

  if (hasComma && decimals.length === 2) return strPrice
  if (hasComma && decimals.length === 1) return `${strPrice}0`
  if (!hasComma) return `${strPrice},00`
}