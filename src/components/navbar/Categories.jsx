import React from 'react';
import "./categories.scss";
const Categories = () => {
    return (
        <div class="main-container">
            <div class="category-container">
                <a class="cat">Men's Top Wear</a>
                <a class="cat">Men's Bottom Wear</a>
                <a class="cat">Women Ethnic</a>
                <a class="cat">Women Western</a>
                <a class="cat">Men Footwear</a>
                <a class="cat">Women Footwear</a>
                <a class="cat">Watches and Accessories</a>
                <a class="cat">Bags, Suitcases &amp; Luggage</a>
                <a class="cat">Kids</a>
                <a class="cat">Essentials</a>
                <a class="cat">Winter</a>
            </div>
            <div class="subCategory-container">
                <span class="sub-span">more in Men's Top Wear</span>
                <a class="sub-cat">All</a>
                <a class="sub-cat" >Men's T-Shirts</a>
                <a class="sub-cat" >Men's Casual Shirts</a>
                <a class="sub-cat" >Men's Formal Shirts</a>
                <a class="sub-cat" >Men's Kurtas</a>
                <a class="sub-cat" >Men's Ethnic Sets</a>
                <a class="sub-cat" >Men's Blazers</a>
                <a class="sub-cat" >Men's Raincoat</a>
                <a class="sub-cat" >Men's Windcheaters</a>
                <a class="sub-cat" >Men's Suit</a>
                <a class="sub-cat">Men's Fabrics</a>
            </div>
        </div>
    )
}
export default Categories
