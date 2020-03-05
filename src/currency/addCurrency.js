/**
 * Add a R$ BRL currency if necessary
 * 
 * @param {string} price ex. 24,2
 * 
 * @return {string} Formatted string, ex: R$ 24,2
 */
module.exports = price => (price.includes('R$') ? price : `R$ ${price}`)