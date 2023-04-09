import { click } from '@testing-library/user-event/dist/click';
import React, {useEffect, useState} from 'react';
import Navbar from './Navbar';

// LINE 53 ERROR
// true = disabled
function Products(){
    const [data,setData] = useState([])
    const [withitem,setwithitem]=useState([])
    const [disable, setDisable] = useState(false)

    // console.log(withitem);
    useEffect(()=>{
        console.log("UseEffect called")
        var aa = fetch("https://fakestoreapi.com/products")
        aa.then((response)=>{
            return response.json();
        }).then((value)=>{
            setData(value)
        }).catch((error)=>{
            console.log(error,"error")
        })
    },[])
    useEffect(()=>{
        const x=data.map((i)=>{
            return {...i,quantity:1}
        })
        setwithitem(x)
    },[data])

    const handleadd=(data)=>{
        let store = [...withitem]
        let quantity = data.quantity++
        let pp = {...data,quantity}
        console.log(pp,'pp')
        setwithitem(store)
    }

    const handlesub=(data)=>{
        console.log("called handlesub")
        let store = [...withitem]
        let quantity = data.quantity--
        let aa = {...data,quantity}
        setwithitem(store)
    }
    
    const cart = (Click) =>{
        let arry = [];
        // let id = hh.id;
        arry = JSON.parse(localStorage.getItem('arr'))?JSON.parse(localStorage.getItem('arr')):[]
        console.log(Click.id,"Click.id")

        if(arry === []){
            arry.push(Click)
        }

        let store_obj = arry.filter((check)=>{
            if(check.id === Click.id){
                return 1;
            }
        })
        console.log(store_obj,"store_obj")
        // var store_quantity = Click.quantity;
        if(store_obj.length > 0 && store_obj[0].id === Click.id){
            console.log(arry,"arry")
            alert("Data already exist in LocalStorage You can only increase the quantity");
            const updated_data = arry.map((product)=>{
                if(product.id === store_obj[0].id){
                    product.quantity = Click.quantity;
                }
                return product;
            })
            console.log(updated_data,"updated_data")
            localStorage.setItem("arr",JSON.stringify(updated_data))

        }else{
            arry=[...arry]
            arry.push(Click)
            localStorage.setItem("arr",JSON.stringify(arry))
        }
        // localStorage.setItem("arr",JSON.stringify(arry))
    }
        
    return(
        <>
            <Navbar />
            <div className='main'>
                {  
                    withitem.map((x,index)=>(
                        <div className="box">
                            <img src={x.image} alt="" draggable="false" />
                            <h2>Category : {x.category} </h2>
                            <h3>Price : {x.price}</h3>
                            <h3>ID : {x.id}</h3>
                            <div className="inner-box">
                                <button onClick={()=>handleadd(x)}>+</button>
                                <div>{x.quantity}</div>
                                <button onClick={()=>x.quantity>1 && handlesub(x)}>-</button>
                            </div>
                            <button onClick={()=>cart(x)}>ADD TO CART</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Products;