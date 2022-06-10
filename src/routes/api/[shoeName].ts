
import { shoes } from ".";

export async function get({params}) {
        
    const findShoe = shoes.find((shoe) => {
        return shoe.shoeName === params.shoeName;
    })

    if(findShoe == undefined) {
        return {
            status: 404
        }
    }
    const shoe = findShoe;


    return {
        body: shoe
    }

}