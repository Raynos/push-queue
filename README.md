# push-queue

[![build status](https://secure.travis-ci.org/Raynos/push-queue.png)](http://travis-ci.org/Raynos/push-queue)

[![browser support](http://ci.testling.com/Raynos/push-queue.png)](http://ci.testling.com/Raynos/push-queue)

A simple async queue to do an action one at a time

## Example

```js
var assert = require("assert")
var setTimeout = require("timers").setTimeout

var Queue = require("push-queue")

var started = false

var enqueue = Queue(function (item, callback) {
    assert.equal(started, false)
    started = true

    console.log("doing", item)

    setTimeout(function () {
        console.log("finished", item)
        assert.equal(started, true)
        started = false
        callback()
    }, 100)
})

enqueue("one")
enqueue("two")
enqueue("three")
```

## Installation

`npm install push-queue`

## Contributors

 - Raynos

## MIT Licenced
