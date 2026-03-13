import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();

  return (
    <div className="group overflow-hidden rounded-xl border bg-card shadow-card transition-all hover:shadow-elevated">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-muted flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4">
        <span className="text-xs font-medium text-secondary">{product.category}</span>
        <Link to={`/product/${product.id}`}>
          <h3 className="mt-1 font-display text-lg font-semibold text-card-foreground hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            KSh {product.price.toLocaleString()}
          </span>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground"
            onClick={() => addItem(product)}
          >
            <ShoppingCart className="mr-1 h-4 w-4" />
            Add
          </Button>
        </div>
        {product.stock < 20 && (
          <p className="mt-1 text-xs text-accent">Only {product.stock} left!</p>
        )}
      </div>
    </div>
  );
};
