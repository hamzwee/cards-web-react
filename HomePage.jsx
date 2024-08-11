// src/pages/HomePage.jsx
import React from 'react';
import { Grid, Container } from '@mui/material';
import ProductCard from './ProductCard';
import { products } from '../data';

const HomePage = () => {
  return (
    <Container>
      <Grid container spacing={4}> {/* Increased spacing for better layout */}
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            {/* Adjust grid item to control the number of columns per row */}
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
