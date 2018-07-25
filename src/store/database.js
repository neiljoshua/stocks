import VuexORM from '@vuex-orm/core'
import Stock from 'Models/Stock'
import Chart from 'Models/Chart'
import Newsupdate from 'Models/Newsupdate'
import stocks from './modules/stocks'
import charts from './modules/charts'
import newsupdates from './modules/newsupdates'

// Create new instance of Database.
const database = new VuexORM.Database()

// Register Model and Module. The first argument is the Model, and second
// is the Module.
database.register(Stock, stocks)
database.register(Chart, charts)
database.register(Newsupdate, newsupdates)

export default database

