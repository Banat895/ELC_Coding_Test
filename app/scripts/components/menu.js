/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 * 
 */
import React, { useRef, useState } from 'react';
import { API_URL } from '../Utils/Constants';
import { ProductContainer } from './Product/ProductContainer';
import axios from 'axios';

export const Menu = () => {
    const [showingSearch, setShowingSearch] = useState(false);
    const [productList, setProductList] = useState([]);
    const searchTimeout = useRef(null);

    const showSearchContainer = (e) => {
        e.preventDefault();
        setShowingSearch(!showingSearch);
    }

    const onSearch = (e) => {
        if(searchTimeout.current) {
            clearTimeout(searchTimeout.current);
        }

        searchTimeout.current = setTimeout(async () => {
            const data = await axios.get(`${API_URL}${e.target.value}`);
            setProductList(data.data);
            searchTimeout.current = null;
        }, 2000)
    }
    return (
        <header className="menu">
            <div className="menu-container">
                <div className="menu-holder">
                    <h1>ELC</h1>
                    <nav>
                        <a href="#" className="nav-item">HOLIDAY</a>
                        <a href="#" className="nav-item">WHAT'S NEW</a>
                        <a href="#" className="nav-item">PRODUCTS</a>
                        <a href="#" className="nav-item">BESTSELLERS</a>
                        <a href="#" className="nav-item">GOODBYES</a>
                        <a href="#" className="nav-item">STORES</a>
                        <a href="#" className="nav-item">INSPIRATION</a>

                        <a href="#" onClick={(e) => showSearchContainer(e)}>
                            <i className="material-icons search">search</i>
                        </a>
                    </nav>
                </div>
            </div>
            <div className={(showingSearch ? "showing " : "") + "search-container"}>
                <input type="text" onChange={(e) => onSearch(e)} />
                <a href="#" onClick={(e) => showSearchContainer(e)}>
                    <i className="material-icons close">close</i>
                </a>

                <div>
                    {productList.length > 0 ? <ProductContainer data={productList} /> : ''}
                </div>
            </div>
        </header>
    );
}