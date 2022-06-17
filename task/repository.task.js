const Datastore = require('nedb-promises')
const path = require('path')

const datastore = Datastore.create(path.join(__dirname, '..', 'task.db'))

module.exports = {
    createTasks(data) {
        return datastore.insert(data)
    }
}