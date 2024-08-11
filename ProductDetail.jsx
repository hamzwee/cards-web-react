// src/components/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Data';
import { Card, CardContent, CardMedia, Typography, Container, Grid } from '@mui/material';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            height="500"
            image={product.image}
            alt={product.title}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" component="h2">
                {product.title}
              </Typography>
              <Typography variant="h5" color="text.secondary" sx={{ mt: 2 }}>
                ${product.price}
              </Typography>
              <Typography variant="body1" sx={{ mt: 4 }}>
                {product.description}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
                Category: {product.category}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
