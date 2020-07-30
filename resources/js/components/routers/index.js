import React from 'react'
// import Layout
import LayoutAdmin from '../pages/layouts/LayoutAdmin';
import LayoutMain from '../pages/layouts/LayoutMain';
//import Admin
import Dashboard from '../pages/views/Admin/Dashboard';
import Product from '../pages/views/Admin/Product';
//import Views
import Home from '../pages/views/Main/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddProduct from '../pages/views/Admin/Product/AddProduct';
import EditProduct from '../pages/views/Admin/Product/EditProduct';
import Category from '../pages/views/Admin/Category';
import AddCategory from '../pages/views/Admin/Category/AddCategory'
import EditCategory from '../pages/views/Admin/Category/EditCategory'

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route exact path='/admin/category'>
                                <Category />
                            </Route>
                            <Route path='/admin/category/add'>
                                <AddCategory />
                            </Route>
                            <Route path='/admin/category/edit/:id'>
                                <EditCategory />
                            </Route>

                            <Route path='/admin/products'>
                                <Product />
                            </Route>
                            <Route path='/admin/product/add'>
                                <AddProduct />
                            </Route>
                            <Route path='/admin/product/edit/:id'>
                                <EditProduct />
                            </Route>

                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>

    )
}

export default Routers
