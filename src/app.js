import React from 'react';
import { hot } from 'react-hot-loader';
import CurrencyComponent from './CurrencyComponent';
import data from 'Data/currencyData';
import './reset';
import './styles';

const App = () => {
	return (
		<div className='app'>
			<CurrencyComponent currency={data} />
			<CurrencyComponent currency={data} />
		</div>
	);
};

export default App;
