import React from 'react';
import BlogHeader from '../components/blog-header';
import BlogFeature from '../components/feature';
import ProductCardsSection from '../components/product-cards-section';

const BlogPage = () => {

  return (
    <div>
      <BlogHeader/>
      <BlogFeature/>
      <ProductCardsSection/>
    </div>
  );
};

export default BlogPage;
