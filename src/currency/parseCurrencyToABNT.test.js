const parseCurrencyToABNT = require('./parseCurrencyToABNT')

describe('parseCurrencyToABNT', () => {
  it('should convert currency to ABNT format (R$ 20,00)', () => {
    expect(parseCurrencyToABNT('R$ 20')).toEqual('R$ 20,00')
    expect(parseCurrencyToABNT('R$ 20,0')).toEqual('R$ 20,00')
    expect(parseCurrencyToABNT('R$ 20,00')).toEqual('R$ 20,00')

    expect(parseCurrencyToABNT('20')).toEqual('R$ 20,00')
    expect(parseCurrencyToABNT('20,0')).toEqual('R$ 20,00')
    expect(parseCurrencyToABNT('20,00')).toEqual('R$ 20,00')

    expect(parseCurrencyToABNT(20)).toEqual('R$ 20,00')
    expect(parseCurrencyToABNT(20.0)).toEqual('R$ 20,00')
  })
})