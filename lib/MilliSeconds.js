// Generated by CoffeeScript 1.6.3
(function() {
  var MilliSeconds;

  MilliSeconds = {
    SECOND: 1000,
    MINUTE: 60000,
    HOUR: 3600000,
    DAY: 86400000,
    WEEK: 604800000,
    seconds: function(n) {
      return n * MilliSeconds.SECOND;
    },
    minutes: function(n) {
      return n * MilliSeconds.MINUTE;
    },
    hours: function(n) {
      return n * MilliSeconds.HOUR;
    },
    days: function(n) {
      return n * MilliSeconds.DAY;
    },
    weeks: function(n) {
      return n * MilliSeconds.WEEK;
    }
  };

  module.exports = MilliSeconds;

}).call(this);

/*
//@ sourceMappingURL=MilliSeconds.map
*/