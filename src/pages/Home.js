import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";

export const Home = () => {
  useTitle("Home");

  const products = [
    {"id": 1, "name": "MacBook Pro", "price": 249900, "image": "/assets/images/macpro.jpeg"},
    {"id": 2, "name": "Microsoft Surface Pro 8 13 Inches (33 cm)", "price": 148994, "image": "/assets/images/surface.jpg"},
    {"id": 3, "name": "Alienware m18 R2 Gaming Laptop", "price": 296490, "image": "/assets/images/alienware-m1.jpg"},
    {"id": 4, "name": "ROG Zephyrus duo 16 (2023) GX650", "price": 299990, "image": "/assets/images/asusg.png"},
    {"id": 5, "name": "ROG Flow X13 (2023) GV302", "price": 139990, "image": "/assets/images/asusf.png"},
    {"id": 6, "name": "HP OMEN Transcend Gaming Laptop 35.6 cm 14-fb0007TX - Black", "price": 174999, "image": "/assets/images/hp.png"},
    {"id": 7, "name": "Lenovo Legion 9i 14th gen(16, Intel)", "price": 382005, "image": "/assets/images/lenovo.png"}
  ]

  return (
    <main>
      <section className="products">
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
