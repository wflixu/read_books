import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import { Link } from 'react-router-dom'
import Home from './components/Home';
import ControlPanel from './pages/ControlPanel';
import Todo from './pages/TodoApp';
import NoMatch from './components/NoMatch';




const App = ({ history }) => {
    return (
        <ConnectedRouter history={history}>
            {(
                <div>
                    <div>
                        <div><Link to="/">Home</Link> <Link to="/todo">Todo</Link> <Link to="/counter">Counter</Link></div>
                    </div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/todo" component={Todo} />
                        <Route path="/counter" component={ControlPanel} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            )}
        </ConnectedRouter>
    )
}

App.propTypes = {
    history: PropTypes.object,
}

export default App