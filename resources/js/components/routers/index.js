import React from 'react'
// import Layout
import LayoutAdmin from '../pages/layouts/LayoutAdmin';
import LayoutMain from '../pages/layouts/LayoutMain';
//import Admin
import Dashboard from '../pages/views/Admin/Dashboard';
import Product from '../pages/views/Admin/Product';
//import Views
import Home from '../pages/views/Main/Home';
import Product_Main from '../pages/views/Main/Product_Main';
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
import Product_Detail from '../pages/views/Main/Product_Detail';
import Contact from '../pages/views/Main/Contact';
import Blog from '../pages/views/Main/Blog';
import Cart from '../pages/views/Main/Cart';
import CategoryBlog from '../pages/views/Admin/CategoryBlog';
import BlogAdmin from '../pages/views/Admin/Blog';
import AddCategoryBlog from '../pages/views/Admin/CategoryBlog/AddCategoryBlog';
import EditCategoryBlog from '../pages/views/Admin/CategoryBlog/EditCategoryBlog';
import AddBlog from '../pages/views/Admin/Blog/AddBlog';
import EditBlog from '../pages/views/Admin/Blog/EditBlog';
import ProductByCategory from '../pages/views/Main/ProductByCategory';
import BlogDetail from '../pages/views/Main/BlogDetail';
import ContactUser from '../pages/views/Admin/Contact';
import BlogByCategory from '../pages/views/Main/BlogByCategory';

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
                            <Route exact path='/admin/cate_blog'>
                                <CategoryBlog />
                            </Route>
                            <Route path='/admin/cate_blog/add'>
                                <AddCategoryBlog />
                            </Route>
                            <Route path='/admin/cate_blog/edit/:id'>
                                <EditCategoryBlog />
                            </Route>
                            <Route exact path='/admin/blogs'>
                                <BlogAdmin />
                            </Route>
                            <Route path='/admin/blog/add'>
                                <AddBlog />
                            </Route>
                            <Route path='/admin/blog/edit/:id'>
                                <EditBlog />
                            </Route>
                            <Route path='/admin/contact'>
                                <ContactUser />
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
                            <Route path="/product" exact>
                                <Product_Main />
                            </Route>
                            <Route path="/productDetail/:id" exact>
                                <Product_Detail />
                            </Route>
                            <Route path="/productByCategory/:id" exact>
                                <ProductByCategory />
                            </Route>
                            <Route path="/contact" exact>
                                <Contact />
                            </Route>
                            <Route path="/blog" exact>
                                <Blog />
                            </Route>
                            <Route path="/blogDetail/:id" exact>
                                <BlogDetail />
                            </Route>
                            <Route path="/blogByCategory/:id" exact>
                                <BlogByCategory />
                            </Route>
                            <Route path="/cart" exact>
                                <Cart />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>

    )
}

export default Routers
