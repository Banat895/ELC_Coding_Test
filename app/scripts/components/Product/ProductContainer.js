import React from 'react';
import { ProductItem } from './ProductItem';

export const ProductContainer = ({data}) => {
    return(
        <div className="productContainerStyle">
            {data.map(item => {
                return <ProductItem data={item} />
            })}
        </div>
    )
}