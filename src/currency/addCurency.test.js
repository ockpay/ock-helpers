const addCurrency = require('./addCurrency')

describe('addCurrency', () => {
  it('should convert without R$ prefix', () => {
    
    expect(addCurrency('20.0')).toEqual('R$ 20.0')
    expect(addCurrency('20.00')).toEqual('R$ 20.00')
    expect(addCurrency('20.2')).toEqual('R$ 20.2')
    expect(addCurrency('20.22')).toEqual('R$ 20.22')
  })

  it('should convert with R$ prefix', () => {
    
    expect(addCurrency('R$ 20.0')).toEqual('R$ 20.0')
    expect(addCurrency('R$ 20.00')).toEqual('R$ 20.00')
    expect(addCurrency('R$ 20.2')).toEqual('R$ 20.2')
    expect(addCurrency('R$ 20.22')).toEqual('R$ 20.22')
  })
})