import React, { useState } from 'react'

const Paginationn = (props) => {
    let items = [];
    const [pagination, setpagination] = useState(1);
    for (let number = 1; number <= Math.ceil(props.products.length / 10); number++) {
        items.push(number)
    }
    function ClickPaginationn(index) {
        setpagination(index)
        props.addPaginationn(index)
    }
    function ClickPrev() {
        props.addPaginationn(pagination-1)
        setpagination(pagination - 1)
    }
    function ClickNext() {
        props.addPaginationn(pagination + 1)
        setpagination(pagination + 1)
    }
    return (
        <div>
            <button disabled={pagination <= 1} onClick={() => ClickPrev()}> prev</button>
            {
                items.map(index => <button className={pagination==index ? "btn btn-primary": null } onClick={() => ClickPaginationn(index)}>{index}</button>
                )
            }
            <button disabled={pagination >= items.length} onClick={() =>  ClickNext()}> Next</button>
        </div>
    )
}

export default Paginationn
