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
c.strategy = 'custom'
c.period = '3m'

// Optional stop-order triggers:

// sell if price drops below this % of bought price (0 to disable)
c.sell_stop_pct = 20
// buy if price surgs above this % of sold price (0 to disable)
c.buy_stop_pct = 0
// enable trailing sell stop when reaching this % profit (0 to disable)
c.profit_stop_enable_pct = 1.5 // 10
// maintain a trailing stop this % below the high-water mark of profit
c.profit_stop_pct = 0.5 // 4

// Order execution rules:

// avoid trading at a slippage above this pct
c.max_slippage_pct = 5
// become a market taker (high fees) or a market maker (low fees)
c.order_type = 'maker'

