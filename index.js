module.exports = Queue

function Queue(action) {
    var buffer = []

    return push

    function push(data) {
        buffer.push(data)
        if (buffer.length === 1) {
            action(buffer[0], next)
        }
    }

    function next() {
        buffer.shift()
        if (buffer.length > 0) {
            action(buffer[0], next)
        }
    }
}
