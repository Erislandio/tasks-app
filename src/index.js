import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from "react-apollo";
import apolloClient from './services/apollo'


function Index(){
    return (
        <ApolloProvider client={apolloClient}>
            <App />
        </ApolloProvider>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.unregister();
