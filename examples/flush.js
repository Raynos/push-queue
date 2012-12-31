var assert = require("assert")
var setTimeout = require("timers").setTimeout

var Queue = require("../index")
var count = 0

var enqueue = Queue(function (item, callback) {
    console.log("doing", item)
    setTimeout(function () {
        console.log("finished", item)
        callback()
    }, 100)
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
    console.log("count", count)
    assert.equal(count, 3)
}, 500)
