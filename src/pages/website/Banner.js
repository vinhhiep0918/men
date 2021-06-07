import React, { useState, useEffect } from 'react'


const Banner = (props) => {
    const [index, setIndex] = useState(0);
    const Prevv = () => {
        setIndex(index - 1)
    }
    const Next = () => {
        setIndex(index + 1)
    }
    const [banners, setBanner] = useState([]);
    useEffect(() => {
        const getBanner = async () => {
            const respone = await fetch('http://localhost:3001/banner');
            const data = await respone.json();
            setBanner(data)
        }
        getBanner();
    }, []);  
    useEffect(() => {
        var a = index-1
        window.setInterval(() => {
            if(a==3){a =-1}
            a=a+1
           setIndex(a)
         }, 5000) 
        // setInterval(index == 3 ? setIndex(0) : setIndex(index+1),1000)
    }, [])
    if (banners.length > 0) { 
        return (
            <div className='banner' style={{marginTop:'-16px'}}>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel"
                 style ={{ display:'grid' ,gridTemplateColumns : '1fr 400px',gridGap :'20px'}} >
                    <div className="carousel-inner" >
                        <div className="carousel-item active" >
                            {<img src={banners[index].logo} className="d-block w-100" height='400px' name="aaa" />}
                        </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev"
                        onClick={() => index == 0 ? setIndex(banners.length - 1) : Prevv()}
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        {/* <span className="visually-hidden">Previous</span> */}
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"
                        onClick={() => index == (banners.length - 1) ? setIndex(0) : Next()}
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        {/* <span className="visually-hidden">Next</span> */}
                    </button>
                    </div>
                    <div className="carousel-inner" style ={{ display:'grid' ,gridTemplateColumns : '1fr 1fr',gridGap:'10px'}}>
                        <div className="carousel-item active" >
                            <div>{<img src={banners[0].logo} className="d-block w-100" height='195px' name="aaa" />}</div>
                            <div>{<img style={{marginTop:'10px'}} src={banners[1].logo} className="d-block w-100" height='195px' name="aaa" />}</div>
                        </div>
                        <div className="carousel-item active" >
                            <div>{<img src={banners[2].logo} className="d-block w-100" height='195px' name="aaa" />}</div>
                            <div style={{marginTop:'10px'}}>{<img src={banners[3].logo} className="d-block w-100" height='195px' name="aaa" />}</div>
                        </div>
                        {/* {banners.map(banner=>
                            <div className="carousel-item active" >
                            {<img src={banner.logo} className="d-block w-100" height='200px' name="aaa" />}
                        </div>
                        )} */}
                    </div>
                </div>
            </div >
        )
    }
    return null
}

export default Banner
