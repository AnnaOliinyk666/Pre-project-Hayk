import React from 'react'
import { useSelector } from 'react-redux'

export default function BasketCulculation() {
    const {basket,products} = useSelector((state) => state);
        const data = basket.map (item => {
        const product = products.find(({id}) => id === item.id);
        return {...item, ...product};
    })
    const totalPrice = data.reduce((acc,{count,price}) => acc + price*count,0)
    const totalCount = data.reduce((acc,{count}) => acc + count,0)
    
  return (
    <div>
        <p><b>Total Count:</b>  {totalCount}</p>
        <p><b>Total Price:</b>  {totalPrice} $</p>
        
        
    </div>
  )
}
