import axios from "axios";

const response = await axios.get(
  "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
);

export type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
  votes: number;
  popular: boolean;
  available: boolean;
};

export function getAllProducts(): Product[] {
  const products: Product[] = response.data;
  return products;
}

export function getAvailableProducts(): Product[] {
  const products: Product[] = response.data;
  return products.filter((product) => product.available);
}
