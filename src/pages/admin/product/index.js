import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Paginationn from './Pagination'
import SearchAdmin from './searchAdmin'

const AdminProductPages = (props) => {
    const[check, setCheck] = useState(0)
    let history = useHistory();
    const [a, setA] = useState();
    useEffect(() => {
        const getUser = async () => {
            if (localStorage.length > 0) {
                var name = localStorage.getItem('name');
                const respone = await fetch(`http://localhost:3001/user?username=${name}`);
                const data = await respone.json();
                // setUser(data)
                setA(data)
            }
        }
        getUser();
    }, []);
    const [indexNew, setIndexNew] = useState(1)
    function addPaginationn(paginationn) {
        setIndexNew(paginationn)
    }
    const data = indexNew * 10 < props.products.length ? indexNew * 10 : props.products.length
        function sapXepGia(e){
            const values = e.target.value
            if(values == 0){
                setCheck(0)
            }
            if(values == 1){
                setCheck(1)
            }
            if(values == 2){
                setCheck(2)
            }
        }
    function checkDuLieu(items,data){
        if(check == 0) {
              return data;
        }
        if(check==1){
            const result =(items.sort(function (a, b) {
                return parseFloat(parseFloat(b.price)-a.price) ;
              }))
              return result
        }
        if(check==2){
            const result =(items.sort(function (a, b) {
                return parseFloat(parseFloat(a.price-b.price)) ;
              }))
              return result
        }
    }
    return (
        <div style={{ backgroundColor: 'white' }}>
            <SearchAdmin {...props} />
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 style={{ color: '#37d67a' }}>Qu???n L?? S???n Ph???m</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    {/* <Link to="/admin/product/add" className="btn btn-info" style={{margin : '2px'}}> Th??m S???n Ph???m</Link> */}
                    <button className="btn btn-primary" style={{ margin: '2px' }} onClick={() => a[0].role == "Nh??n Vi??n B??n H??ng" ?
                        window.confirm("B???n Kh??ng C?? Quy???n Th??m S???n Ph???m") : history.push("/admin/product/add")} >Th??m S???n Ph???m</button>
                    <button className="btn btn-primary" style={{ margin: '2px' }}>Improt</button>
                    <button className="btn btn-primary" style={{ margin: '2px' }}>Export</button>
                    {/* <Link className="btn btn-primary" style={{margin : '2px'}}> Improt</Link>
                    <Link className="btn btn-primary" style={{margin : '2px'}}> Export</Link> */}
                </div>
            </div>
            <h2>B???ng S???n Ph???m</h2>
            <div>
                <div style={{display:'grid' , gridTemplateColumns : '300px 1fr',marginBottom :'20px'}}>
                    <div>
                        <select className="form-select" aria-label="Default select example" style={{ width: '200px' }} onChange={sapXepGia}  >
                            <option selected value='0'>S???p X???p</option>
                            <option value='1'> Gi?? Cao ?????n Th???p</option>
                            <option value='2'> Gi?? Th???p ?????n Cao</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="table-responsive" style={{ height: '500px' }}>
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>T??n S???n Ph???m</th>
                            <th>???nh</th>
                            <th>Gi?? B??n</th>
                            <th>Tr???ng Th??i</th>
                            <th>S??? L?????ng</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                       checkDuLieu(props.products,JSON.parse(localStorage.getItem('productNew'))).map((product, index) => {
                            if ((((indexNew - 1) * 10) - 1) < index & index <= data - 1) {
                                return (
                                    <tr key={product.id}>
                                        <td >{index + 1}</td>
                                        <td>{product.name}</td>
                                        <td><img src={product.image} width="50px" height='50px' /></td>
                                        <td>{product.price}</td>
                                        <td>{product.status ? <span style={{ color: "red" }}>X??? H??ng</span> : 'Kh??ng X??? H??ng'}</td>
                                        <td>{product.quantity}</td>

                                        <th>
                                            {/* <Link   to={`/admin/product/${product.id}`} className="btn btn-primary" role="button">Edit</Link> */}
                                            <button className="btn btn-primary" onClick={() => a[0].role == "Nh??n Vi??n B??n H??ng" ?
                                                window.confirm("B???n Kh??ng C?? Quy???n S???a S???n Ph???m") : history.push(`/admin/product/${product.id}`)} >Edit</button>
                                            <button className="btn btn-danger" onClick={() => a[0].role == "Nh??n Vi??n B??n H??ng" ?
                                                window.confirm("B???n Kh??ng C?? Quy???n X??a S???n Ph???m") : props.onRemove(product.id)} >Xoa</button>
                                        </th>
                                    </tr>
                                )
                            }
                            return null
                        })}
                    </tbody>
                </table>
            </div>
            <Paginationn {...props} addPaginationn={addPaginationn} />
        </div>
    )
}

export default AdminProductPages
