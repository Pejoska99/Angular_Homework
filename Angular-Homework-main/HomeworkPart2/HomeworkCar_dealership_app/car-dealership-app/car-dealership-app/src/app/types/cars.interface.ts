import { CarType } from "./car-types.enum";
import { FuelType } from "./fuel-types.enum";
import { TransmissionType } from "./transmission-types.enum";


export interface Car {
  id: string;
  description: string;
  price: number;
  images: string[];
  type?: CarType;
  year?: number;
  color?: string;
  fuelType?: FuelType;
  distance?: number;
  isNew?: boolean;
  location?: {
    city: string;
    country: string;
  };
  brand: string;
  model: string;
  enginePower?: number;
  doors?: number;
  seats?: number;
  transmission?: TransmissionType;
}
