import React from 'react';
export const ProductItem = ({data}) => {
    return(
        <div className="productItemStyle">
            <img src={data.picture} />
            <div>{data.name}</div>
            <br/>
            <div>{data.about}</div>
        </div>
    )
}