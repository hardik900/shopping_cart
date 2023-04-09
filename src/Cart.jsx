import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
// import Products from './Products';

function Cart(){
    let store_data = JSON.parse(localStorage.getItem("arr"))
    const [data, setdata] = useState(store_data)

    const removeItem = (x) =>{
            console.log(x,"x")
            const updatedData = store_data?.filter(e => e.id !== x.id);
            setdata(updatedData)
            localStorage.setItem("arr",JSON.stringify(updatedData))
            console.log(updatedData,"updatedData")
        }
    return(
        <>
            <Navbar />
            {store_data == ""?<h2 style={{textAlign:"center", marginTop:"12px",marginRight:"40px", color:"blue"}}>👆<br/>Cart is Empty add some product from there</h2>:<h1 style={{textAlign:"center"}}>Cart Page</h1>}
            <div className='main'>            
            {  
                data?.map((x,index)=>(
                    <div className="box">                                                                                                                                                                                   
                        <img src={x.image} alt="" draggable="false" />
                        {/* <h2>Category : {x.category} </h2> */}
                        <h3>Quantity : {x.quantity}</h3>
                        <h3>Price : {x.price}</h3>
                        {/* <h3>ID : {x.id}</h3> */}
                        <div className="inner-box">
                            <div>{x.item}</div>
                        </div>
                            <button onClick={()=>removeItem(x)}>Remove</button>
                    </div>
                ))
            }
            </div>
        </>
    )
}

export default Cart;