export interface OrderModel {
    id: number;
    title: string;
    image: string;
    nutricion: {
        nutrients: [{
            amount: number,
            name: string, 
            unit: string
        }]
    }
}
