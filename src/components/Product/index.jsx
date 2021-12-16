import "./index.css";
const Product = () => {
  return (
    <article>
      <h2>notre nouveauté</h2>
      <div>
        <img src="./assets/img/product/product1.jpg" alt="" />
        <p>
          <strong>thÃ© du hammam</strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex,
          voluptatem, soluta aliquid cum quam numquam suscipit expedita autem
          quas odio eveniet quibusdam similique id laboriosam! Earum est totam
          consequuntur!
        </p>
        <p>A partir de</p>
        <p>
          <strong>8.50Â£</strong>
        </p>
        <a href="./views/product.html">
          <button type="button">voir ce produit</button>
        </a>
      </div>
    </article>
  );
};

export default Product;

