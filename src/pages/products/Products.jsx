/**
 * A page consisting of all the products of a category
 * @author:Shravya P
 */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './products.scss';
import ProductCard from '../../components/productCard/ProductCard';
import getAllProducts from '../../services/ProductService';
import { setProducts } from '../../actions/productActions';

export default function Products() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    getAllProducts(id).then((res) => {
      dispatch(setProducts(res));
    }).catch(() => {
    });
  }, []);
  const category = useSelector((state) => state.allCategories.category);
  const products = useSelector((state) => state.allProducts.products);
  return (
    <div id="container">
      <div className="header-container">
        <Header />
      </div>
      <Paper variant="outlined" elevation={1} sx={{ padding: '8px', margin: '8px' }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <div className="product-container">
              <div className="product-header-container">
                <div className="product-header">
                  <div>
                    <div className="category-name">
                      <a className="home" href="/">Home</a>
                      <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="arrow-main"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="arrow" /></svg>
                    </div>
                    <div className="category-name">
                      <a className="home" href="/categories">{category.category}</a>
                      <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="arrow-main"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="arrow" /></svg>
                    </div>
                  </div>
                  <h1 className="category">{category.subCategory}</h1>
                  <span className="category-tag">(Showing 1 – 40 products of 83,632 products)</span>
                  <div className="sort-container">
                    <span className="sort-by">Sort By</span>
                    <div className="sort-item-active">Popularity</div>
                    <div className="sort-item">Price -- Low to High</div>
                    <div className="sort-item">Price -- High to Low</div>
                    <div className="sort-item">Newest First</div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          {products.length !== 0 ? (products.map((item) => (
            <Grid item xs={6} md={3} lg={2}>
              <ProductCard item={item} id={id} />
            </Grid>
          ))) : null}
        </Grid>
      </Paper>
      <Footer />
    </div>

  );
}
