const Product = (props) => {
    return (
      <div className={styles.product}>
        <h2 className={styles.product__title}>{props.product.name}</h2>
        <p className={styles.product__description}>{props.product.description}</p>
        <div className={styles.product__image}>
          <img src={props.product.image} alt={props.product.image.src} />
        </div>
        <div className="product__price-button-container">
          <div className={styles.product__price}>${props.product.price.toFixed(2)}</div>
          <button
            className={`snipcart-add-item ${styles.product__button}`}
            data-item-id={props.product.id}
            data-item-name={props.product.name}
            data-item-price={props.product.price}
            data-item-url={props.product.url}
            data-item-image={props.product.image.src}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  };
  