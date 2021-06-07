import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import AdminLayout from './Layouts/admin'
import WebsiteLayout from './Layouts/website'
import AdminProductPages from './pages/admin/product'
import AddProductPages from './pages/admin/product/add'
import EditProductPages from './pages/admin/product/edit'
import Login from './pages/admin/product/Login'
import Banner from './pages/website/Banner'
import Card from './pages/website/Card'
import News from './pages/website/News'
import Bestselling from './pages/website/Bestselling'

const Routers = (props) => {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login {...props} />
                </Route>
                <Route path="/admin" render={() => {
                    return localStorage.getItem('name') ?
                        < AdminLayout>
                            <Switch>
                                <Route exact path="/admin/product">
                                    <AdminProductPages {...props} />
                                </Route>
                                <Route exact path="/admin/product/add">
                                    <AddProductPages {...props} />
                                </Route>
                                <Route exact path="/admin/product/:id">
                                    <EditProductPages {...props} />
                                </Route>
                            </Switch>
                        </AdminLayout> : <Redirect to='/login' />
                }}>
                </Route>
                <Route path="/men">
                    <WebsiteLayout>
                        <Switch>
                            <Route exact path="/men/new">
                                <News {...props} />
                            </Route>
                            <Route exact path="/men/card">
                                <Card {...props} />
                            </Route>
                            <Route path="*">
                                <Banner {...props} />
                                <News {...props} />
                                <Bestselling {...props} />
                            </Route>
                        </Switch>
                    </WebsiteLayout>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routers
