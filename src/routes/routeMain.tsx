import React from "react";
import {StartPage} from '../Pages/StartPage/StartPage';
import {Products} from '../Pages/Products/Products';
import {Singleproduct} from '../Pages/Singleproduct/Singleproduct';
import {Cart} from '../Pages/Cart/Cart';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'

export class MainRouting extends React.Component {
    render() {
        return (
            <div>
                <Router>    
                    <Switch>
                        <Route exact path='/' component={StartPage} />
                        <Route exact path='/products' component={Products} />
                        <Route exact path='/singleproduct/:id' component={Singleproduct}/>
                        <Route exact path='/cart' component={Cart}/>
                    </Switch>   
                </Router>
            </div>
        );
    }
}
