import { Model } from '@vuex-orm/core'
import Stock from './Stock'

export default class Newsupate extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'newsupdates'

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields () {
    return {
      id: this.attr(null),
      dateline: this.attr(null),
      headline: this.attr(null),
      image: this.attr(null),
      related: this.attr(null),
      source: this.attr(null),
      sumary: this.attr(null),
      url: this.attr(null),
      stock_id: this.belongsTo(Stock, 'stock_name'),
    }
  }
}

