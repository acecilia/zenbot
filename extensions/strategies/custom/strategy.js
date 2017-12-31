module.exports = function container (get, set, clear) {
  return {
    name: 'custom',
    description: 'TODO',

    getOptions: function () {
      this.option('period', 'period length, same as --periodLength', String, '30m')
      this.option('periodLength', 'period length, same as --period', String, '30m')
    },

    calculate: function (s) {
      if (s.lookback[0]) {
        //console.log(('lookback[0]: ' + s.lookback[0].open).red)

      }
      //console.log(('CALCULATE: ' + s.period.open).red)
    },

    onPeriod: function (s, cb) {
      if (s.lookback.length < 5) {
        return cb()
      }

      var actual_price = s.period.close
      let lowest_price = Math.min.apply(
        Math,
        s.lookback.slice(0, 5).map(function(x) {
          return x.low;
        })
      );

      let prc = (lowest_price - actual_price) / lowest_price
      if (-prc >= 0.01) {
        s.signal = 'buy'
        console.log(('lowest_price: ' + lowest_price).red)
        console.log(('actual_price: ' + actual_price).red)
      }


      /*


      if (s.action === 'bought') {

      } else if (s.action === 'sold') {

      } else {

      }

      if (s.period.open > 627) {
        s.signal = 'sell'
        s.already_ordered = true
      }
      else {   
        s.signal = 'buy'
        s.already_ordered = true
      }

      console.log(('ONPERIOD: ' + s.action).red)
      if (s.buy_order) { console.log(('s.buy_order: ' + s.buy_order).red) }
      if (s.sell_order) { console.log(('s.sell_order: ' + s.sell_order).red) }
      if (s.action) { console.log(('s.action: ' + s.action).red) }

      

      if (s.my_trades.length) {
        var last_trade = s.my_trades[s.my_trades.length - 1]
        console.log(('Last trade: ' + last_trade.price).red)
      }

      */
      console.log(('ONPERIOD: ' + s.action).red)
      cb()
    },

    onReport: function (s) {
      var cols = []
      return cols
    }
  }
}
