import React, { useState } from 'react'
import ProductModal from './productModal';


const Bestselling = (props) => {       
    function money (b){
        const value = Number(b);
        const money= value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'VND',
          });
          return money
    }
    return (
        <div id="carouselExampleControls" className="carousel slide" style={{ backgroundColor: 'white', marginTop: '20px',marginBottom:'40px', borderRadius:'10px' }} data-bs-ride="carousel">
            <h2 style={{ padding: '10px 10px' }}>Sản Phẩm Đang Hot</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gridGap: '10px', padding: '10px' }}  >
                {props.products.reverse().map((product, index) => {
                    if (0 <= index & index < 10) {
                        return (
                            <div classname="col-sm" style={{ backgroundColor: 'white', textAlign: 'center' }}>
                                <h5 className="card-title" style={{fontSize:'15px'}}>{product.name}</h5>
                                <img src={product.image} width='180px' height='300px' />
                                <p classname="card-text" style={{color:'red',fontWeight:'bold'}}>{money(product.price)}</p>

                                <div classname="d-flex justify-content-between align-items-center">
                                    <div classname="btn-group">
                                
                                        {/* <button type="button" classname="btn btn-success" 
                                        style={{backgroundColor:'Green', border:'none',height:'40px',marginRight :'3px'}}>Xem Chi Tiết</button> */}
                                        {/* Button trigger modal */}
                                        <button type="button" classname="btn btn-warning"style={{ backgroundColor: 'Yellow', 
                                        border: 'none', height: '40px', width: '110px',margin :'3px', borderRadius:'5px' }}>Xem Chi Tiết</button>
                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"
                                        style={{marginBottom: '3px', height: '40px', width: '110px'}} onClick={()=>props.onProductDESC(product)}>
                                            Mua Ngay
                                             </button>
                                        {/* Modal */}
                                        {props.productDESC.length!= 0 ?
                                        <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                            <ProductModal {...props} />
                                        </div> : null
                                    }
                                    
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    return null
                })}

            </div>
        </div>
    )
}

export default Bestselling
