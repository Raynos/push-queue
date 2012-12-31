var test = require("tape")
var setTimeout = require("timers").setTimeout

var Queue = require("../index")

test("queue is a function", function (assert) {
    assert.equal(typeof Queue, "function")
    assert.end()
})

test("queue returns a function", function (assert) {
    var queue = Queue()

    assert.equal(typeof queue, "function")
    assert.end()
})

test("queue calls the action when pushed", function (assert) {
    var enqueue = Queue(function (value, callback) {
        assert.equal(value, "one")
        assert.equal(typeof callback, "function")
        assert.end()
    })

    enqueue("one")
})

test("queue gets called one at a time", function (assert) {
    var list = []
    var isRunning = false

    var enqueue = Queue(function (value, callback) {
        assert.equal(isRunning, false)
        isRunning = true
        if (value === "EOF") {
            assert.deepEqual(list, ["one", "two", "three"])
            assert.end()
        } else {
            list.push(value)
        }

        setTimeout(function () {
            assert.equal(isRunning, true)
            isRunning = false
            callback()
        }, 100)
    })

    enqueue("one")
    enqueue("two")
    enqueue("three")
    enqueue("EOF")
})
