import React from "react";
import {StartPage} from '../Pages/StartPage/StartPage';
import {AllProductsList} from "../Pages/AllProductsList/AllProductsList";
import {Products} from '../Pages/Products/Products';
import {Singleproduct} from '../Pages/Singleproduct/Singleproduct';
import {Cart} from '../Pages/Cart/Cart';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import { MenuCollections } from "../components/MenuCollections/MenuCollections";

export class MainRouting extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <MenuCollections />
                    <Switch>
                        <Route exact path='/' component={StartPage} />
                        <Route exact path='/category/' component={AllProductsList} />
                        <Route exact path='/category/:categoryName' component={Products} />
                        <Route exact path='/singleproduct/:id' component={Singleproduct}/>
                        <Route exact path='/cart' component={Cart}/>
                        <Route path="*">
                            404 error
                        </Route>
                    </Switch>   
                </Router>
            </div>
        );
    }
}
