var c = module.exports = {}

/*
trend_ema (default)
  description:
    Buy when (EMA - last(EMA) > 0) and sell when (EMA - last(EMA) < 0). Optional buy on low RSI.
  options:
    --period=<value>  period length, same as --periodLength (default: 2m)
    --periodLength=<value>  period length, same as --period (default: 2m)
    --min_periods=<value>  min. number of history periods (default: 52)
    --trend_ema=<value>  number of periods for trend EMA (default: 26)
    --neutral_rate=<value>  avoid trades if abs(trend_ema) under this float (0 to disable, "auto" for a variable filter) (default: auto)
    --oversold_rsi_periods=<value>  number of periods for oversold RSI (default: 14)
    --oversold_rsi=<value>  buy when RSI reaches this value (default: 10)
*/

// default selector. only used if omitting [selector] argument from a command.
//c.selector = 'gdax.ETH-EUR'
// name of default trade strategy
c.strategy = 'trend_ema'
c.trend_ema = 35 // 37.89 36.121 35.118 34.117
c.period = '3m'
c.oversold_rsi_periods = 70
c.oversold_rsi = 35
// oversold_rsi_periods has to be double than oversold_rsi
// c.period = '2m'
// 10-20 = 35
// 20-40 = 52
// 30-50 = 76
// 20-60 = 28
// 30-60 = 87
// 40-60 = 0
// 30-70 = 80
// 35-70 = 62
// 40-80 = 15

// c.period = '2m'
// 25-50 = 67
// 30-60 = 95
// 35-70 = 126
// 40-80 = 53

// If c.period goes up, c.trend_ema should go down
// c.oversold_rsi_periods = 2 * c.oversold_rsi
// If c.period goes up, c.oversold_rsi_periods and c.oversold_rsi should go up


// Optional stop-order triggers:

// sell if price drops below this % of bought price (0 to disable)
c.sell_stop_pct = 0
// buy if price surgs above this % of sold price (0 to disable)
c.buy_stop_pct = 0
// enable trailing sell stop when reaching this % profit (0 to disable)
c.profit_stop_enable_pct = 0 // 10
// maintain a trailing stop this % below the high-water mark of profit
c.profit_stop_pct = 4 // 4

// Order execution rules:

// avoid trading at a slippage above this pct
c.max_slippage_pct = 5
// become a market taker (high fees) or a market maker (low fees)
c.order_type = 'taker'

