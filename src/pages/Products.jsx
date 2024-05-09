import { ProductList } from "../ProductList/ProductList";
import { getProducts } from "../FakeApi";

export default function Products() {
  const products = getProducts();

  return (
    <main>
      <ProductList products={products} />
    </main>
  );
}
