import './Coins.css';
import styles from './Coins.module.css';

const CoinItem = ({ coins }) => {
  return (
    <div className='coin-row'>
      <p>{coins.market_cap_rank}</p>
      <div className='img-symbol'>
        <img src={coins.image} alt='/' />
        <p>{coins.symbol.toUpperCase()}</p>
      </div>

      <p>${coins.current_price.toLocaleString()}</p>

      {/* 24h percentage change logic */}
      {coins.price_change_percentage_24h < 0 ? (
        <p className={(styles.coin_percent, styles.red)}>
          {coins.price_change_percentage_24h.toFixed(2)}
        </p>
      ) : (
        <p className={(styles.coin_percent, styles.green)}>
          {coins.price_change_percentage_24h.toFixed(2)}
        </p>
      )}

      <p className='hide-mobile'>${coins.total_volume.toLocaleString()}</p>

      <p className='hide-mobile'>${coins.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default CoinItem;
