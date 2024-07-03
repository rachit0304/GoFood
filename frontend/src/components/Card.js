import React, { useEffect, useRef, useState} from 'react'
import { useDispatchCart , useCart } from './ContextReducer';
import { Link, useNavigate } from 'react-router-dom';

export default function Card(props) {
    const priceRef = useRef();
    let dispatch = useDispatchCart();
    let data = useCart();
    let options = props.options;
    let priceOptions = Object.keys(options)
    let [qty , setQty] = useState(1)
    let [size , setSize] = useState("")
    let navigate = useNavigate();

    const handleAddToCart = async ()=>{
        if(!localStorage.getItem("authToken")){
            navigate('/login');
        }
        let food = []
        for(const item of data){
            if(item.id === props.fooditem.id)
          {  food = item;

            break;}
        }
        if(food !== []){
            if(food.size === size){
                await dispatch({type: "UPDATE" , id:props.fooditem._id  , price: finalPrice ,  qty: qty})
                return
            }
            else if(food.size !== size){
                await dispatch({type: "ADD" ,id: props.fooditem._id, name: props.fooditem.name , price: finalPrice ,qty: qty, size: size })
                return

            }
            return
        }
        await dispatch({type:"ADD" ,id: props.fooditem._id, name: props.fooditem.name , price: finalPrice ,qty: qty, size: size })
     
    }

    let finalPrice = (qty*parseInt(options[size]))

    useEffect(()=>{
        setSize(priceRef.current.value)
   
    })


  return ( 

       <div className=''>
        <div className="card mt-3" style={{width: "16rem"}}>
            <img className="card-img-top" src={props.fooditem.img} alt={props.fooditem.name} style={{height: '150px' , objectFit: 'cover'}}/>
            <div className="card-body">
                <h5 className="card-title">{props.fooditem.name}</h5>
              
                <div className="container w-100">
                    <select className='m-2 h-100 bg-success rounded' onChange={(e)=> setQty(e.target.value) }>
                    {
                    
                    }
                         {Array.from(Array(6), (e,i)=>{
                            return(
                                <option key={i+1} value={i+1}>{i+1}</option>
                            )
                         })}
                    </select>

                    <select className='m-2 h-100 w-30 bg-success rounded' ref={priceRef} onChange={(e)=> setSize(e.target.value)}>
                        {
                        priceOptions.map((data)=>{
                            return <option value={data} key={data}> {data} </option>
                        })}

                    </select>

                    <div className="d-inline h-100 fs-5">
                        ₹{finalPrice}/-
                    </div>

                    <hr />

        <button className='btn btn-success' onClick={handleAddToCart}>Add to cart</button>

                </div>
            </div>
        </div>
    </div>
  
  )
}
