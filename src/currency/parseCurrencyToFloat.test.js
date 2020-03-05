const parseCurrencyToFloat = require('./parseCurrencyToFloat');

const fakePrice = {
  withCents: {
    unidade: 'R$ 1,01',
    dezena: 'R$ 10,00',
    centena: 'R$ 100,10',
    unidadeMilhar: 'R$ 1.000,01',
    dezenaMilhar: 'R$ 10.000,00',
    centenaMilhar: 'R$ 100.000,10',
    unidadeMilhao: 'R$ 1.000.000,11',
    dezenaMilhao: 'R$ 10.000.000,00',
    centenaMilhao: 'R$ 100.000.000,01',
  },
  withoutCents: {
    unidade: 'R$ 1',
    dezena: 'R$ 10',
    centena: 'R$ 100',
    unidadeMilhar: 'R$ 1.000',
    dezenaMilhar: 'R$ 10.000',
    centenaMilhar: 'R$ 100.000',
    unidadeMilhao: 'R$ 1.000.000',
    dezenaMilhao: 'R$ 10.000.000',
    centenaMilhao: 'R$ 100.000.000',
  },
}

describe('parseCurrencyToFloat', () => {
  const cents = fakePrice.withCents
  const withoutCents = fakePrice.withoutCents

  it('withCents', () => {
    expect(parseCurrencyToFloat(cents.unidade)).toEqual(1.01)
    expect(parseCurrencyToFloat(cents.dezena)).toEqual(10.0)
    expect(parseCurrencyToFloat(cents.centena)).toEqual(100.1)
    expect(parseCurrencyToFloat(cents.unidadeMilhar)).toEqual(1000.01)
    expect(parseCurrencyToFloat(cents.dezenaMilhar)).toEqual(10000.0)
    expect(parseCurrencyToFloat(cents.centenaMilhar)).toEqual(100000.1)
    expect(parseCurrencyToFloat(cents.unidadeMilhao)).toEqual(1000000.11)
    expect(parseCurrencyToFloat(cents.dezenaMilhao)).toEqual(10000000.0)
    expect(parseCurrencyToFloat(cents.centenaMilhao)).toEqual(100000000.01)
  })

  it('withoutCents', () => {
    expect(parseCurrencyToFloat(withoutCents.unidade)).toEqual(1)
    expect(parseCurrencyToFloat(withoutCents.dezena)).toEqual(10)
    expect(parseCurrencyToFloat(withoutCents.centena)).toEqual(100)
    expect(parseCurrencyToFloat(withoutCents.unidadeMilhar)).toEqual(1000)
    expect(parseCurrencyToFloat(withoutCents.dezenaMilhar)).toEqual(10000)
    expect(parseCurrencyToFloat(withoutCents.centenaMilhar)).toEqual(100000)
    expect(parseCurrencyToFloat(withoutCents.unidadeMilhao)).toEqual(1000000)
    expect(parseCurrencyToFloat(withoutCents.dezenaMilhao)).toEqual(10000000)
    expect(parseCurrencyToFloat(withoutCents.centenaMilhao)).toEqual(100000000)
  })
})