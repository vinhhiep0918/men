import React from 'react'
import NavBar from './NavBar'
import './hearder.css'


const Header = () => {
    return (
        <header style = {
            {width:'1600px'} } >
            <div className="header">
                <div className="header-logo">
                    <a className="nav-link" href="/men"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Men.com_logo.png"
                        style={{ height: '62px',width:'200px' }} /></a>
                </div>
                <div className="header-detail">
                    <div className="header-top">
                        <ul>
                            <li><a href>My Account</a>|</li>
                            <li><a href>Wishlist </a>|</li>
                            <li><a href>My Cart </a>|</li>
                            <li><a href>Checkout</a>|</li>
                            <li><a href>Login</a></li>
                        </ul>
                    </div>
                    <div className="search">
                        <div className="search-here">
                            <input type="text" placeholder="Search here..." />
                            <button>Search</button>
                        </div>
                        <div className="total-img">
                            <a className="nav-link" href="/men/card"><img src="https://www.pngkit.com/png/detail/116-1169537_cart-png-clipart-icon-gi-hng-png.png"
                                style={{ width: '60px', height: '40px',paddingBottom:'10px' }} /></a>
                        </div>
                        <div className="total">
                            <div className="total_thongtin">
                            <p>Lịch Sử Mua Hàng</p>
                            </div>
                            <div className="total_thongtin">
                            <p>Tin Tức Hót</p>
                            </div>
                            <div className="total_thongtin">
                                <p> Chương Trình Khuyến Mại</p>
                            </div>
                            <div className="total_thongtin">
                                <p>Hỏi Đáp</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='menu' style={{ backgroundColor: 'yellow', lineHeight: '30px' }}>
                <NavBar />
            </div>
        </header>
    )
}

export default Header
