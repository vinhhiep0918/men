import React from 'react'
import { useForm } from 'react-hook-form'
import {useHistory}  from 'react-router-dom'

const AddProductPages =( {onAdd}) => {
    const { register, handleSubmit, formState : { errors }} = useForm();
    let history = useHistory();
    const onSubmit = (data) =>{
            onAdd(data);
            history.push('/admin/product')
    }
    return (
        <div >
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="product-name" className="form-label" >Nhập Tên Sản Phẩm</label>
                <input type="text" className="form-control" id="product-name"
                {...register('name' , {required : true})} style={{width:'600px', height:'40px',textAlign: 'left'}}  />
                {errors.name && <div className="form-text text-danger">Bạn Không Được Bỏ Trống Tên Sản Phẩm</div>}
                
            </div>
            <div className="mb-3">
                <label htmlFor="product-img" className="form-label">Đường Link ảnh</label>
                <input type="text" className="form-control" id="product-img"
                {...register('image' , {required : true})} style={{width:'600px', height:'40px',textAlign: 'left'}} />
                {errors.image && <div className="form-text text-danger">Bạn Không Được Bỏ Trống</div>}
                
            </div>
            <div className="mb-3">
                <label htmlFor="product-price" className="form-label">Giá</label>
                <input type="number" className="form-control" id="product-price"
                {...register('price' , {required : true})} style={{width:'600px', height:'40px',textAlign: 'left'}} />
                {errors.price && <div className="form-text text-danger">Bạn Không Được Bỏ Trống</div>}
                
            </div>
            <div className="mb-3">
                <label htmlFor="product-quantity" className="form-label">Số Lượng lượng</label>
                <input type="number" className="form-control" id="product-quantity"
                {...register('quantity' , {required : true})} style={{width:'600px', height:'40px',textAlign: 'left'}}  />
                {errors.quantity && <div className="form-text text-danger">Bạn Không Được Bỏ Trống</div>}
                
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="product-status"
                {...register('status')} />
                <label className="form-check-label" htmlFor="exampleCheck1">Trạng Thái</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}

export default AddProductPages
