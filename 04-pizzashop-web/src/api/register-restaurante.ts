import { api } from '../lib/axios';

export interface RegisterRestauranteBody {
    restaurantName: string;
    managerName: string;
    email: string;
    phone: string;
}

export async function registerRestaurante({restaurantName, managerName, email, phone}: RegisterRestauranteBody){

    await api.post('/restaurants',
        {
            restaurantName,
            managerName,
            email,
            phone
        }
    );
}