import { Guardianship } from './Guardianship';

export class Worker {
    id: number
    name: string;
    address: string;
    gender: string;
    phone: string;
    age: string;
    description: string;
    guardianships: Guardianship[]
}