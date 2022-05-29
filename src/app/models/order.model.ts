export interface OrderModel {
  id: number;
  title: string;
  image: string;
  imageType: string;
  healthScore: number;
  pricePerServing: number;
  readyInMinutes: number;
  summary: string;
  vegan: boolean;
}
