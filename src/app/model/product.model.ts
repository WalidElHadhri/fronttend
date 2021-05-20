export interface IProduct {
    id?: string;
    name?: string;
    price?: number;
    code?: string;
    description?: string;
    review?: number;
    mainImage?: string;
    categoryId?: string;
    brandId?: string;
    rate?: number;
}

// export class Product implements IProduct {

//     constructor(
//         public id?: string,
//         public name?: string,
//         public price?: number,
//         public code?: string,
//         public description?: string,
//         public review?: string
//     ){
//         this.id = id ? id : null;
//         this.name =  name ? name : null;
//         this.price =  price ? price : null;
//         this.code = code ? code : null;
//         this.description = description ? description : null;
//         this.review =  review ? review : null;
//     }
// }
