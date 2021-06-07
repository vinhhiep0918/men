import React from 'react'
import { useHistory, Link, useParams } from 'react-router-dom'

const AdminNav = () => {
    let history = useHistory();
    function logOut (){
        console.log(1)
        localStorage.removeItem('name')
        history.push('/login')
    }
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        <span data-feather="home" />
               Quản Lí Sản Phẩm
              </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file" />
                Quản Lí Kho
              </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="shopping-cart" />
                Quản Lí Nhân Viên
              </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="users" />
                Quản Lí Đối Tác
              </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="bar-chart-2" />
                Quản Lí Hóa Đơn
              </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="layers" />
                Quản Lí Thu Chi
              </a>
                                </li>
                            </ul>
                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Thông Kê</span>
                                <a className="link-secondary" href="#" aria-label="Add a new report">
                                    <span data-feather="plus-circle" />
                                </a>
                            </h6>
                            <ul className="nav flex-column mb-2">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text" />
                Doanh Số
              </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text" />
                Báo Cáo
              </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text" />
                Tổng Hợp
              </a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="btn btn-primary" href="#" role="button" onClick = {()=>logOut}>
                                        <span data-feather="file-text" />
                                        
                                        Đăng Xuất
                                    </a>
                                </li> */}
                                <button className="btn btn-primary" onClick = {logOut} >Đăng Xuất</button>
                            </ul>
                        </div>
                    </nav>
    )
}

export default AdminNav
