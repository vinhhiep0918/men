import React, { useState } from 'react'
import ProductModal from './productModal';

const News = (props) => {
    const [indexNew, setIndexNew] = useState(0);
    const Prevv = () => {
        setIndexNew(indexNew - 1)
    }
    const Next = () => {
        setIndexNew(indexNew + 1)
    }
    var a = 4;
    function money (b){
        const value = Number(b);
        const money= value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'VND',
          });
          return money
    }
    return (
        <div id="carouselExampleControls" className="carousel slide" style={{ backgroundColor: ' yellow', marginTop: '20px',marginBottom:'40px',
        borderRadius:'10px' }} data-bs-ride="carousel">
            <h2 style={{ padding: '10px 10px' }}>Sản Phẩm Mới Về</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridGap: '10px', padding: '10px' }}  >
                {[...props.products].reverse().map((product, index) => {
                    if (4 * indexNew <= index & index < (4 * (indexNew + 1))) {
                        return (
                            <div classname="col-sm" style={{ backgroundColor: 'white', textAlign: 'center', borderRadius:'10px' }}>
                                <h5 className="card-title">{product.name}</h5>
                                <img src={product.image} width='200px' height='300px' />
                                <p classname="card-text" style={{color:'red',fontWeight:'bold'}}>{money(product.price)}</p>
                                <div classname="d-flex justify-content-between align-items-center">
                                    <div classname="btn-group">
                                        {/* <button type="button" classname="btn btn-success" 
                                        style={{backgroundColor:'Green', border:'none',height:'40px',marginRight :'3px'}}>Xem Chi Tiết</button> */}
                                        {/* Button trigger modal */}
                                        <button type="button" classname="btn btn-warning"style={{ backgroundColor: 'Yellow', 
                                        border: 'none', height: '40px', width: '110px',margin :'3px', borderRadius:'5px' }}>Xem Chi Tiết</button>
                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"
                                        style={{marginBottom: '3px', height: '40px', width: '110px'}} onClick={()=>props.onProductDESC({...product})}>
                                            Mua Ngay
                                             </button>
                                        {/* Modal */}
                                        {props.productDESC.length!= 0 ?
                                        <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                            <ProductModal {...props} />
                                        </div> :null}
                                    </div>

                                </div>
                            </div>
                        )
                    }
                    return null
                })}

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev"
               style={{height:'200px', marginTop:'140px'}} onClick={() => indexNew === 0 ? setIndexNew(a - 1) : Prevv()}
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"
             style={{height:'200px', marginTop:'140px'}}
                onClick={() => indexNew > (a - 2) ? setIndexNew(0) : Next()}
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
            </button>
        </div>
    )
}

export default News
