export type Trade = {
  createdAt: Date;
  id: string;
  price: number | null;
  scrip: string | null;
  shares: number | null;
  types: string | null;
  updatedAt: Date;
  userId: string | null;
};
