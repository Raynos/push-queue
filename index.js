module.exports = Queue

function Queue(action) {
    var buffer = []

    return push

    function push(data, callback) {
        buffer.push([data, callback])
        if (buffer.length === 1) {
            action(data, next)
        }
    }

    function next() {
        var tuple = buffer.shift()
        var callback = tuple[1]

        callback && callback()

        if (buffer.length > 0) {
            action(buffer[0][0], next)
        }
    }
}
