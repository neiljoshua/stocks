import { Model } from '@vuex-orm/core'
import Stock from './Stock'

export default class Quote extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'quotes'

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields () {
    return {
      id: this.attr(null),
      avgTotalVolume: this.attr(null),
      calculationPrice: this.attr(null),
      change: this.attr(null),
      changePercent: this.attr(null),
      closeTime: this.attr(null),
      companyName: this.attr(null),
      delayedPrice: this.attr(null),
      delayedPriceTime: this.attr(null),
      extendedChange: this.attr(null),
      extendedChangePercent: this.attr(null),
      extendedPrice: this.attr(null),
      extendedPriceTime: this.attr(null),
      high: this.attr(null),
      latestPrice: this.attr(null),
      latestSource:: this.attr(null),
      latestTime: this.attr(null),
      latestUpdate: this.attr(null),
      latestVolume: this.attr(null),
      low: this.attr(null),
      marketCap: this.attr(''),
      open: this.attr(null),
      openTime: this.attr(null),
      peRatio: this.attr(null),
      previousClose: this.attr(null),
      primaryExchange: this.attr(null),
      sector: this.attr(null),
      symbol: this.attr(null),
      week52High: this.attr(null),
      week52Low: this.attr(null),
      ytdChange: this.attr(null),
      stock_id: this.belongsTo(Stock, 'stock_name'),
    }
  }
}
