import { Model } from '@vuex-orm/core'
import Stock from './Stock'

export default class Chart extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'charts'

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields () {
    return {
      id: this.attr(null),
      change: this.attr(null),
      changeOverTime: this.attr(''),
      changePercent: this.attr(null),
      close: this.attr(null),
      date: this.attr(null),
      high: this.attr(null),
      label: this.attr(null),
      low: this.attr(null),
      open: this.attr(null),
      unadjustedVolume: this.attr(null),
      volume: this.attr(null),
      vwap: this.attr(null),
      stock_id: this.belongsTo(Stock, 'stock_name'),
    }
  }
}
