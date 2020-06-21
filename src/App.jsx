import './sass/main';
import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './layout/Home/Home';

class App extends React.Component {
    render() {
        return (
            <Home />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
