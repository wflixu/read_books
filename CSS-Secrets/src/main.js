import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import Ch01Se1 from './chap01/se-1';
import Ch02Se6 from './chap02/sec-6';

class Home extends React.Component{
    render(){
        return (
            <div>
             
                <Ch02Se6/>
            </div>
        ) ;
    }
}



const App = ({ history }) => {
    return (
        <ConnectedRouter history={history}>
            {(
                <div className="main">
                    <section>
                        <Switch>
                            <Route exact path="/" component={Home} />
                        </Switch>
                    </section>
                </div>
            )}
        </ConnectedRouter>
    )
}

export default App