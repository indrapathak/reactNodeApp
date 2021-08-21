/**
 * API endpoints will be defined here
 */
const dashboard = require('../controllers/dashboardController');

module.exports = (app) => {
app.route('/fetchData').post( dashboard.fetchData)
app.route('/fetchDataWithGetMethod').get( dashboard.fetchDataWithGetMethod)
app.route('/saveData').post(dashboard.saveData)

}