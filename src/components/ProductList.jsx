import React from 'react'

const ProductList = ({items}) => {
  return (
    <>
    {
        items.map((product)=>(
           <div key={product.id} className='border p-4 my-1 mx-3'>
                {product.productName}-
                {product.price}
           </div>
            
            
        ))  
    }
    </>
  )
}

export default ProductList