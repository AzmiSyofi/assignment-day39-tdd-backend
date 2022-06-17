const taskRepository = require('./repository.task')

/**
 * Create task route handler
 * @param {e.Request} req
 * @param {e.Response} res
 */
module.exports = async (req, res) => {
    try {
        // validate
        if (!req.body.title) {
            return res.status(400).json({ message: 'Validation Error' })
        }
        if (typeof req.body.isDone !== 'boolean') {
            return res.status(400).json({ message: 'Validation Error' })
        }
        // insert to db
        const data = await taskRepository.createTasks(req.body)
        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}