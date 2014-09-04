# boco-time

Time utilities and classes.

    BocoTime = require 'boco-time'
    assert = require 'assert'


# MilliSeconds module

    MS = BocoTime.MilliSeconds

Constants representing the number of milliseconds per unit of time.

    assert.equal 1000, MS.SECOND
    assert.equal 60 * 1000, MS.MINUTE
    assert.equal 60 * 60 * 1000, MS.HOUR
    assert.equal 24 * 60 * 60 * 1000, MS.DAY
    assert.equal 7 * 24 * 60 * 60 * 1000, MS.WEEK

Convert units to milliseconds

    assert.equal 5 * MS.SECOND, MS.seconds(5)
    assert.equal 15 * MS.MINUTE, MS.minutes(15)
    assert.equal 22 * MS.HOUR, MS.hours(22)
    assert.equal 7.3 * MS.DAY, MS.days(7.3)
    assert.equal 9 * MS.WEEK, MS.weeks(9)
