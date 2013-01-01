var test = require("tape")
var setTimeout = require("timers").setTimeout

require("./test")
require("../examples/flush")
require("../examples/simple")

test("wait", function (assert) {
    setTimeout(function () {
        assert.end()
    }, 460)
})
