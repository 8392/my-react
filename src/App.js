import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import routes from './router/index.js';

@withRouter
class App extends Component {
    constructor() {
        super()
        this.state = {
            name: 'aa'
        }
    }

    componentDidMount() {
        // console.log(this.props.routes)
    }
    render() {
        return (
            <div>
                <Switch>
                    {
                        routes.map((route) => {
                            return (<Route 
                                path={route.path}
                                component={route.component}
                                key={route.path}
                             />)
                        })
                    }
                    <Redirect to='/home' />
                </Switch>
            </div>
        )
    }
}

export default App;