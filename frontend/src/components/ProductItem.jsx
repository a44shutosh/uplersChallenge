import PropTypes from 'prop-types';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <h3>{product.dataCategory}</h3>
      <p>Record Count: {product.recordCount}</p>
      <p>Fields: {product.fields}</p>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    dataCategory: PropTypes.string,
    recordCount: PropTypes.number,
    fields: PropTypes.string,
  }).isRequired,
};

export default ProductItem;
