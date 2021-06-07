import { useState, useEffect } from 'react'
import { useForm, } from 'react-hook-form'
import { useHistory, Link, useParams } from 'react-router-dom'

const EditProductPages = ({ onEdit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();
    let { id } = useParams();
    const onSubmit = (data) => {
        const newsData = {
            id: id,
            ...data
        }
        onEdit(newsData);
        history.push('/admin/product') 
    }
    const [product, setProduct] = useState({});
    useEffect(() => {
        const getProduct = async () => {
            try {
                const respone = await fetch(`http://localhost:3001/products/${id}`)
                const data = await respone.json();
                setProduct(data);
            } catch (error) {
                console.log(error)
            }
        }
        getProduct()
    }, [])
    return (
        <div >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 class="text-info">Sua San Pham</h2>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to="/admin/product" className="btn btn-primary">Quay Lai</Link>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="product-name" className="form-label">Nhập Tên Sản Phẩm</label>
                    <input type="text" className="form-control" id="product-name"
                         defaultValue={product.name} {...register('name', { required: true })} style={{width:'600px', height:'40px',textAlign: 'left'}} />
                    {errors.name && <div className="form-text text-danger">Bạn Không Được Bỏ Trống Tên Sản Phẩm</div>}

                </div>
                <div className="mb-3">
                    <label htmlFor="product-img" className="form-label">Đường Link ảnh</label>
                    <input type="text" className="form-control" id="product-img"
                        defaultValue={product.image}
                        {...register('image', { required: true })} style={{width:'600px', height:'40px',textAlign: 'left'}} />
                    {errors.image && <div className="form-text text-danger">Bạn Không Được Bỏ Trống</div>}

                </div>
                <div className="mb-3">
                    <label htmlFor="product-price" className="form-label">Giá</label>
                    <input type="text" className="form-control" id="product-price"
                        defaultValue={product.price}
                        {...register('price', { required: true })}  style={{width:'600px', height:'40px',textAlign: 'left'}}/>
                    {errors.price && <div className="form-text text-danger">Bạn Không Được Bỏ Trống</div>}

                </div>
                <div className="mb-3">
                    <label htmlFor="product-quantity" className="form-label">Số lượng</label>
                    <input type="text" className="form-control" id="product-quantity"
                        defaultValue={product.quantity}
                        {...register('quantity', { required: true })} style={{width:'600px', height:'40px',textAlign: 'left'}} />
                    {errors.quantity && <div className="form-text text-danger">Bạn Không Được Bỏ Trống</div>}

                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="product-status"
                        {...register('status')}
                        checked ={product.status}
                        />
                    <label className="form-check-label" htmlFor="exampleCheck1">Xả Hàng</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div >
    )
}

export default EditProductPages
