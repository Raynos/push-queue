var assert = require("assert")
var setTimeout = require("timers").setTimeout

var Queue = require("../index")

var started = false

var enqueue = Queue(function (item, callback) {
    assert.equal(started, false)
    started = true

    // console.log("doing", item)

    setTimeout(function () {
        // console.log("finished", item)
        assert.equal(started, true)
        started = false
        callback()
    }, 100)
})

enqueue("one")
enqueue("two")
enqueue("three")
