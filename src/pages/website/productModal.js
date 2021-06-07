import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'


const ProductModal = (props) => {
    const{register , handleSubmit, formState : {errors}} = useForm()
    let history = useHistory();
    const [check , setCheck] = useState(true)
    function money (b){
        const value = Number(b);
        const money= value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'VND',
          });
          return money
    }
    // var i =0
    // for (i; i <= localStorage.length; i++) {
        // console.log(localStorage.key(i) + " : " + localStorage.getItem(localStorage.key(i)));
    //   };
    
    console.log(localStorage.getItem(localStorage.key(0)))
    function onSubmit(data){
        const newData= {
            ...data, ...props.productDESC
        }
        const id = props.productDESC.id
        localStorage.setItem(`${id}`,JSON.stringify(newData))
        setCheck(false)
    }
    return (
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">{props.productDESC.name}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body" style={{ display: 'grid', gridTemplateColumns: '180px 1fr' }}>
                    {/* <img src='https://thoitrangtre.biz/wp-content/uploads/2019/08/LS1146-ao-so-mi-dep.jpg' /> */}
                    <div >
                        <img src={props.productDESC.image} style={{ width: '150px', height: '200px' }} />
                        <p style={{ color: 'red', fontWeight: 'bold' }}>{money(props.productDESC.price)}</p>
                    </div>
                    <form onSubmit = {handleSubmit(onSubmit)}>
                        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr' }}>
                            <div style={{ marginTop: '5px' }}>
                                <h6>Màu Sắc :</h6>
                            </div>
                            <div>
                                <select className="form-select" aria-label="Default select example" {...register('color' , {required : true})} >
                                    <option selected value =''>Chọn Màu Sắc</option>
                                    <option value='Đỏ'>Đỏ</option>
                                    <option value='Xanh'>Xanh</option>
                                    <option value='Vàng'>Vàng</option>
                                </select>
                            </div>
                        </div>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr'}}>
                            <div style={{ marginTop: '5px' }}>
                                <h6>Size :</h6>
                            </div>
                            <div style={{ marginTop: '5px' }}>
                                <div>
                                <select className="form-select" aria-label="Default select example" {...register('size' , {required : true})}>
                                    <option selected  value =''>Chọn Size</option>
                                    <option value='S'>S</option>
                                    <option value='M'>M</option>
                                    <option value='XL'>XL</option>
                                    <option value='L'>L</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr'}}>
                            <div style={{ marginTop: '5px' }}>
                                <h6>Số Lượng :</h6>
                            </div>
                            <div style={{ marginTop: '5px' }}>
                                <div>
                              <input type="number" id="qty" min="1" max={props.productDESC.quantity} defaultvalue="1" disabled ={props.productDESC.quantity<=0
                            } {...register('number' , {required : true})}/>
                                </div>
                            </div>
                        </div>
                        {props.productDESC.status ? <p style={{color:'red', marginTop:'20px'}}>Sản Phẩm Đang Xả Hàng</p> : null
                        }
                        {props.productDESC.quantity<=0 ? <p style={{color:'red', marginTop:'20px'}}>Tạm Thời Hết Hàng</p> : null
                        }
                        <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" 
                    onClick={()=>window.location.reload()}>Hủy</button>
                    <button type="submit" className="btn btn-primary" disabled ={props.productDESC.quantity<=0}
                    data-dismiss={check==false ? "modal" : ""}
                    >Đặt Hàng</button>
                     </div>
                    </form>
                </div>
            </div>
        </div>
    )
    
}

export default ProductModal
