
import { shoes } from ".";

export async function get({params}) {
        
    const findShoe = shoes.find((shoe) => {
        return shoe.shoeName === params.shoeName;
    })


    const shoe = findShoe;


    return {
        body: shoe
    }

}