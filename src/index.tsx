import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './configuration/store-configuration';
import Root from './components/root';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { fetchConfig } from './redux/reducers/app';

store.dispatch(fetchConfig());

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<SnackbarProvider
				maxSnack={3}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				hideIconVariant={false}
			>
				<Root />
			</SnackbarProvider>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
);
