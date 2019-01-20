import { ResidenceFeatures } from "./residence-features.interface";
import { ResidenceSpecifications } from "./residence-specifications.interface";

export interface Residence{
    id: number;
    title: string;
    zone: string;
    images: string[];
    price: number;
    location: number;
    details: string;
    features: ResidenceFeatures;
    specifications: ResidenceSpecifications;
}