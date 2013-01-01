var assert = require("assert")
var setTimeout = require("timers").setTimeout
var now = Date.now()

var Queue = require("../index")
var count = 0

var enqueue = Queue(function (item, callback) {
    console.log("doing", item)
    process.nextTick(function () {
        console.log("finished", item, Date.now() - now)
        callback()
    })
})

enqueue("one", log("flushed one"))
enqueue("two", log("flushed two"))
enqueue("three", log("flushed three"))

function log(msg) {
    return function () {
        count++
        console.log(msg)
    }
}

setTimeout(function () {
    console.log("count", count, Date.now() - now)
    assert.equal(count, 3)
}, 400)
