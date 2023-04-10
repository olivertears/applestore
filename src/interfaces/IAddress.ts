export interface IAddress {
  id: number;
  userId: string;
  country: string;
  state: string;
  city: string;
  street: string;
  house: string;
  apartment?: string;
  status: boolean;
}
