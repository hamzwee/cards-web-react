// src/components/ProductCard.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card
      sx={{
        width: '100%',           // Ensure the card takes the full width of the grid item
        maxWidth: 345,           // Max width to ensure consistency
        height: '100%',          // Make card take full height for equal sizing
        display: 'flex',         // Flexbox to ensure content aligns well
        flexDirection: 'column', // Column layout
        justifyContent: 'space-between', // Space out the content
        m: 2                     // Margin around the card
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        sx={{ mt: 'auto' }} // Push the button to the bottom
      >
        View Details
      </Button>
    </Card>
  );
};

export default ProductCard;
