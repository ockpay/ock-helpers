const parseCurrencyToABNT = require('./parseCurrencyToABNT')

describe('parseCurrencyToABNT', () => {
  it('should convert currency to ABNT format (R$ 20,00)', () => {
    expect(parseCurrencyToABNT('R$ 20')).toEqual('R$ 20,00')
    expect(parseCurrencyToABNT('R$ 20,0')).toEqual('R$ 20,00')
    expect(parseCurrencyToABNT('R$ 20,00')).toEqual('R$ 20,00')
    expect(parseCurrencyToABNT('R$ 59,9')).toEqual('R$ 59,90')
    expect(parseCurrencyToABNT('R$ 59,99')).toEqual('R$ 59,99')
    expect(parseCurrencyToABNT('R$ 59,90')).toEqual('R$ 59,90')

    expect(parseCurrencyToABNT('20')).toEqual('R$ 20,00')
    expect(parseCurrencyToABNT('20,0')).toEqual('R$ 20,00')
    expect(parseCurrencyToABNT('20,00')).toEqual('R$ 20,00')

    expect(parseCurrencyToABNT(20)).toEqual('R$ 20,00')
    expect(parseCurrencyToABNT(20.0)).toEqual('R$ 20,00')
    expect(parseCurrencyToABNT(20.8)).toEqual('R$ 20,80')
    expect(parseCurrencyToABNT(20.9)).toEqual('R$ 20,90')
    expect(parseCurrencyToABNT(20.5)).toEqual('R$ 20,50')
    expect(parseCurrencyToABNT(55.9)).toEqual('R$ 55,90')
    expect(parseCurrencyToABNT(55.90)).toEqual('R$ 55,90')
    expect(parseCurrencyToABNT(55.95)).toEqual('R$ 55,95')
  })
})