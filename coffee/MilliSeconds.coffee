MilliSeconds =
  SECOND: 1000
  MINUTE: 60000
  HOUR: 3600000
  DAY: 86400000
  WEEK: 604800000
  seconds: (n) -> n * MilliSeconds.SECOND
  minutes: (n) -> n * MilliSeconds.MINUTE
  hours: (n) -> n * MilliSeconds.HOUR
  days: (n) -> n * MilliSeconds.DAY
  weeks: (n) -> n * MilliSeconds.WEEK

module.exports = MilliSeconds
