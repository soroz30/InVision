import React from 'react';
import styles from './styles';

import Umbrella from '@material-ui/icons/Umbrella';
import EyeOutline from '@material-ui/icons/EyeOutline';
import ScaleBalance from '@material-ui/icons/ScaleBalance';

const CurrencyComponent = ({currency}) => {
	return (
		<div className={styles.container}>
			<div className={styles.category}>
				<span>{currency.category}</span>
			</div>
			<div className={styles.description}>
				<p className={styles.title}>{currency.title}</p>
				<div className={styles.details}>
					<div className={styles.umbrella}>
						<Umbrella />
					</div>
					{currency.details && currency.details[0]}
				</div>
				<div className={styles.details}>
					<span className={styles['yellow-circle']}></span> {currency.details && currency.details[1]}
				</div>
			</div>
			<div className={styles.data}>
				<ul>
					<li>
						<div className={styles['data-container']}>
							<span className={styles['data-value']}>
								<mark className={styles['currency-value']}>{currency.data.value}</mark>&nbsp;
								<span className={styles.currency}>{currency.data.currency}</span>
							</span>
							<span className={styles['data-description']}>Wartość</span>
						</div>
					</li>
					<li>
						<span className={styles['data-value']}>{currency.data.oneDay}</span>
						<span className={styles['data-description']}>1D</span>
					</li>
					<li>
						<div className={styles['data-container']}>
							<span className={styles['data-value']}>{currency.data.oneMonth}</span>
							<span className={styles['data-description']}>1M</span>
						</div>
					</li>
					<li>
						<span className={styles['data-value']}>{currency.data.threeMonths}</span>
						<span className={styles['data-description']}>3M</span>
					</li>
					<li>
						<span className={styles['data-value']}>{currency.data.twelveMonths}</span>
						<span className={styles['data-description']}>12M</span>
					</li>
					<li>
						<span className={styles['data-value']}>{currency.data.thirtyMonths}</span>
						<span className={styles['data-description']}>30M</span>
					</li>
					<li>
						<span className={styles['data-value']}>{currency.data.ytd}</span>
						<span className={styles['data-description']}>YTD</span>
					</li>
				</ul>
			</div>
			<div className={styles.options}>
				<button>Inwestuj</button>
				<div className={styles['eye-outline']}>
					<EyeOutline />
				</div>
				<div className={styles['scale-balance']}>
					<ScaleBalance />
				</div>
			</div>
		</div>
	)
}

export default CurrencyComponent;
