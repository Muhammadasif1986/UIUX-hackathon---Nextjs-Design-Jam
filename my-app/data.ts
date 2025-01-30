interface Product {
      name: string;
      price: string;
      oldPrice?: string;
      img: string;
      isSale?: boolean;
      description?: string;
    }

   export const products: Product[] = [
      {description:"very very Tasty", name: "Fresh Lime", price: "$38.00", oldPrice: "$45.00", img: "/unsplash4.png" },
      {description:"very very Tasty", name: "Chocolate Muffin", price: "$28.00", img: "/unsplash5.png", isSale: true },
      {description:"very very Tasty", name: "Burger", price: "$21.00", oldPrice: "$45.00", img: "/burger.png" },
      {description:"very very Tasty", name: "Country Burger", price: "$46.00", img: "/unsplash6.png" },
      {description:"very very Tasty", name: "Drink", price: "$23.00", oldPrice: "$45.00", img: "/unsplash7.png" },
      {description:"very very Tasty", name: "Pizza", price: "$43.00", img: "/pizza.png" },
      {description:"very very Tasty", name: "Cheese Butter", price: "$10.00", img: "/unsplash8.png" },
      {description:"very very Tasty", name: "Sandwiches", price: "$25.00", img: "/unsplash9.png" },
      {description:"very very Tasty", name: "Chicken Chup", price: "$12.00", img: "/unsplash10.png", isSale: true },
      {description:"very very Tasty", name: "Country Burger", price: "$46.00", img: "/unsplash6.png" },
      {description:"very very Tasty", name: "Drink", price: "$23.00", oldPrice: "$45.00", img: "/unsplash7.png" },
      {description:"very very Tasty", name: "Pizza", price: "$43.00", img: "/pizza.png" },
      {description:"very very Tasty", name: "Cheese Butter", price: "$10.00", img: "/unsplash8.png" },
      {description:"very very Tasty", name: "Sandwiches", price: "$25.00", img: "/unsplash9.png" },
      {description:"very very Tasty", name: "Chicken Chup", price: "$12.00", img: "/unsplash10.png", isSale: true },
    ];