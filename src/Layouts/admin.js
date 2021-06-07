import React from 'react'
import AdminHeader from '../components/admin/header'
import AdminNav from '../components/admin/nav'
import './../css/Admin.css'

const AdminLayout = ({ children }) => {
    return (
        <div style ={{backgroundColor:'white'}}>
           <AdminHeader></AdminHeader>
            <div className="container-fluid">
                <div className="row">
                    <AdminNav />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4" >
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}

export default AdminLayout
