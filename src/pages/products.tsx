import React, { useEffect } from 'react'; 
import ItemProductPage from '../components/itemProduct';
import { Product } from '../models/product.models';
import { ServiceProduct } from '../services/product.service';

export interface IProductsPageProps {}; 

const ProductsPage: React.FunctionComponent<IProductsPageProps> = props => {
    const [product, setProduct] = React.useState<Product[]>()

    const obtenerProduct = async () =>{
        const consult = await  ServiceProduct()   
        setProduct(consult)  
    }
    useEffect(() => {
        obtenerProduct()
    },[]);

    return <div className='container__products row row-cols-2 row-cols-lg-5 '>
        {product?.map((pro) =>{
            return <ItemProductPage {...pro}></ItemProductPage>
        } )}


        
    </div>;
}; 

export default ProductsPage