import React from 'react';
import UploadProduct from './Components/UploadProduct';
import NotFound from './Components/NotFound';
import ProductHomePage from './Pages/ProductHomePage';
import CartContainers from './Containers/CartContainers';
const routes = [
    {
        path : '/',
        exact : true,
        main : () => <ProductHomePage />
    },
    {
        path : '/cart',
        exact : false,
        main : () => <CartContainers />
    },
    {
        path : '/upload-product',
        exact : false,
        main : ({history}) => <UploadProduct history={history} />
    },
    {
        path : '',
        exact : false,
        main : () => <NotFound />
    },
];
export default routes;