import ProductCard from './ProductCard'
import { products } from '@/data/products'
import styles from './Products.module.css'

export default function Products() {
  return (
    <section id="products">
      <div className="container">
        <h2 className="section-title">Products</h2>
        <p className="section-subtitle">
          Practical tools built for modern QA workflows
        </p>
        
        <div className={styles.grid}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}