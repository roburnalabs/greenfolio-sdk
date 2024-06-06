import JSBI from 'jsbi'

import { ChainId, SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * The only instance of the base class `Currency`.
   */
  public static readonly ETHER: Currency = new Currency(18, 'ETH', 'Ether')
  public static readonly BNB: Currency = new Currency(18, 'BNB', 'BNB')
  public static readonly RBA: Currency = new Currency(18, 'RBA', 'RBA')

  public static readonly NATIVE = {
    [ChainId.ETHEREUM]: Currency.ETHER,
    [ChainId.BSC]: Currency.BNB,
    [ChainId.BSC_TESTNET]: Currency.BNB,
    [ChainId.ROBURNA]: Currency.RBA,
    [ChainId.ROBURNA_TESTNET]: Currency.RBA
  }

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }

  /**
   * Retrieves the native currency for the specified chain ID.
   *
   * @param {ChainId} [chainId] - The chain ID to retrieve the native currency for. If not provided, an error will be thrown.
   * @return {Currency} The native currency for the specified chain ID.
   * @throws {Error} If the chain ID is not provided or if no native currency is defined for the chain ID.
   */
  public static getNativeCurrency(chainId?: ChainId) {
    if (!chainId) {
      throw Error(`No chainId ${chainId}`)
    }

    if (!(chainId in Currency.NATIVE)) {
      throw Error(`No native currency defined for chainId ${chainId}`)
    }
    return Currency.NATIVE[chainId]
  }

  /**
   * Retrieves the symbol of the native currency for the specified chain ID.
   *
   * @param {ChainId} [chainId] - The chain ID to retrieve the native currency symbol for. If not provided, an error will be thrown.
   * @return {string} The symbol of the native currency for the specified chain ID.
   * @throws {Error} If the chain ID is not provided or if no native currency is defined for the chain ID.
   */
  public static getNativeCurrencySymbol(chainId?: ChainId) {
    const nativeCurrency = this.getNativeCurrency(chainId)
    return nativeCurrency.symbol
  }

  public static getNativeCurrencyName(chainId?: ChainId) {
    const nativeCurrency = this.getNativeCurrency(chainId)
    return nativeCurrency.name
  }

  public getSymbol(chainId?: ChainId) {
    if (!chainId) {
      return this?.symbol
    }

    if (this?.symbol === 'ETH') {
      return Currency.getNativeCurrencySymbol(chainId)
    }

    return this?.symbol
  }

  public getName(chainId?: ChainId) {
    if (!chainId) {
      return this?.name
    }

    if (this?.name === 'Ether') {
      return Currency.getNativeCurrencyName(chainId)
    }

    return this?.name
  }
}

const ETHER = Currency.ETHER
export { ETHER }
