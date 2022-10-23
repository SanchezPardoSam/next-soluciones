import React from 'react'; 
import ItemProductPage from '../components/itemProduct';

export interface IProductsPageProps {}; 

const ProductsPage: React.FunctionComponent<IProductsPageProps> = props => {
    return <div className='container__products row row-cols-2 row-cols-lg-5 '>
        <ItemProductPage></ItemProductPage>
        <ItemProductPage></ItemProductPage>
        <ItemProductPage></ItemProductPage>
        <ItemProductPage></ItemProductPage>
        <ItemProductPage></ItemProductPage>
        <ItemProductPage></ItemProductPage>
        <ItemProductPage></ItemProductPage>
        <ItemProductPage></ItemProductPage>
        <ItemProductPage></ItemProductPage>
        <ItemProductPage></ItemProductPage>
        <ItemProductPage></ItemProductPage>
        <ItemProductPage></ItemProductPage>
        <ItemProductPage></ItemProductPage>
        
    </div>;
}; 

export default ProductsPage