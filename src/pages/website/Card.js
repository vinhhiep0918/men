import React, { useState, useEffect } from 'react'
import './../../css/card.css'
import { useHistory } from 'react-router-dom'

const Card = (props) => {
    let history = useHistory();
    var sum = 0;
    function money(b) {
        const value = Number(b);
        const money = value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'VND',
        });
        return money
    }
    function thanhToan() {
        props.products.map(product => {
            if (localStorage.getItem(product.id)) {
                const a = localStorage.getItem(product.id)
                const b = JSON.parse(a);
                const data = {
                    id: product.id,
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    quantity: Number(product.quantity) - Number(b.number),
                    status: false
                }
                const onEditProduct = async (item) => {
                    await fetch(`http://localhost:3001/products/${item.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(item)
                    });
                }
                onEditProduct(data);
                localStorage.removeItem(product.id)
            }
        })
        history.push('/men')
    }
    function huyThanhToan() {
        props.products.map(product => {
            if (localStorage.getItem(product.id)) {
                localStorage.removeItem(product.id)
            }
        })
        history.push('/men')
    }
    return (
        <div className="content2" id="contentp2" style={{backgroundColor: 'white'}}>
            <div className="table-products">
                <table className="table table-striped table-sm" >
                    <thead>
                        <tr>
                            <th >Tên Sản Phẩm</th>
                            <th >Màu Sắc</th>
                            <th >Size</th>
                            <th >Giá Bán</th>
                            <th >Số Lượng</th>
                            <th >Thành Tiền</th>
                        </tr>
                    </thead>
                    <tbody id="thongtinsanpham">
                        {props.products.map(product => {
                            if (localStorage.getItem(product.id)) {
                                const a = localStorage.getItem(product.id)
                                const b = JSON.parse(a);
                                sum = sum + b.number * b.price
                                return (
                                    <tr>
                                        <td>{b.name}</td>
                                        <td>{b.color}</td>
                                        <td>{b.size}</td>
                                        <td>{money(b.price)}</td>
                                        <td>{b.number}</td>
                                        <td>{money(b.number * b.price)}</td>
                                    </tr>
                                )
                            }
                        })

                        }
                    </tbody>
                </table>
            </div>
            <div className="desc">
                <div className="check-box">
                    <input type="checkbox" id="check" /><label htmlFor>Sử dụng mã giảm giá</label>
                </div>
                <div className="tien">
                    <span style={{ fontWeight: 'bold' }}> Tạm Tính: <span style={{ color: 'red' }}>{money(sum)} </span> </span>
                    <p id="khuyenmai" />
                    <span style={{ fontWeight: 'bold' }}>Tổng: <span style={{ color: 'red' }}>{money(sum)} </span> </span>
                </div>
            </div>
            <form >
                <div className="khachhang">
                    <h3>Thông tin khách hàng</h3>
                    <div className="khachhang-desc">
                        <div className="heading-khachhang">
                            <h3>Họ và tên: *</h3>
                            <h3>Số điện thoại: *</h3>
                            <h3>Địa chỉ: *</h3>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Nhập Họ Và Tên" id="ten" />
                            <input type="text" placeholder="Nhập Số Điện Thoại" id="sdt" />
                            <input type="text" placeholder="Nhập Địa Chỉ" id="diachi" />
                        </div>
                    </div>
                    <div className="thanhtoan">
                        <button id="huy" onClick={huyThanhToan}>HỦY ĐƠN HÀNG</button>
                        <button id="thanhtoan" onClick={thanhToan}>THANH TOÁN</button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default Card
