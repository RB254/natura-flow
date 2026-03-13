import { useParams, Link } from "react-router-dom";
import { products, farmProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, ArrowLeft, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = [...products, ...farmProducts].find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="font-display text-2xl font-bold">Product not found</h1>
        <Link to="/products"><Button className="mt-4">Back to Products</Button></Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to={product.isFarm ? "/farm-inputs" : "/products"} className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
        <ArrowLeft className="mr-1 h-4 w-4" /> Back to {product.isFarm ? "Farm Inputs" : "Products"}
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl border">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>

        <div>
          <Badge className="mb-2 bg-secondary text-secondary-foreground">{product.category}</Badge>
          <h1 className="font-display text-3xl font-bold text-foreground">{product.name}</h1>
          <p className="mt-3 text-muted-foreground leading-relaxed">{product.description}</p>

          <div className="mt-6">
            <span className="text-3xl font-bold text-primary">KSh {product.price.toLocaleString()}</span>
            <span className="ml-2 text-sm text-muted-foreground">
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </span>
          </div>

          <div className="mt-6 flex gap-3">
            <Button size="lg" className="bg-primary text-primary-foreground" onClick={() => addItem(product)} disabled={product.stock === 0}>
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => addItem(product)} disabled={product.stock === 0}>
              Buy Now
            </Button>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="mb-2 font-display font-semibold text-foreground">Benefits</h3>
              <ul className="space-y-1">
                {product.benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> {b}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-display font-semibold text-foreground">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing, i) => (
                  <Badge key={i} variant="outline">{ing}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-display font-semibold text-foreground">Usage Instructions</h3>
              <p className="text-sm text-muted-foreground">{product.usage}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
