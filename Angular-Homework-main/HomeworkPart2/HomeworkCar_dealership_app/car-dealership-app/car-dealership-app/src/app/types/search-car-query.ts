import { CarType } from './car-types.enum';
import { FuelType } from './fuel-types.enum';
import { TransmissionType } from "./transmission-types.enum";

export interface SearchCarQuery {
  brand?: string;      
  model?: string;       
  priceMin?: number;   
  priceMax?: number;    
  yearMin?: number;     
  yearMax?: number;     
  type?: CarType;        
  fuelType?: FuelType;   
  locationCity?: string; 
  locationCountry?: string; 
  transmission?: TransmissionType;
}
