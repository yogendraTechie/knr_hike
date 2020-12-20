// import {
//     FETCH_PRODUCTS_FAILURE,
//     FETCH_PRODUCTS_REQUEST,
//     FETCH_PRODUCTS_SUCCESS,
// } from '../types';

const initialState = {
    productsList : [
        {   
            ID : 1,
            productName : 'Chettinadu Chicken 65 Masala',
            image:'',
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"30,48,200",
        },
        {   
            ID : 2,
            productName : ' Chettinadu Sambhar Powder',
            image:'',
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"25,46,180",
        },
        {   
            ID : 3,
            productName : 'Chettinadu Chicken Masala',
            image:'',
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"28,50,200",
        },
        {   
            ID : 4,
            productName : 'Turmeric Powder',
            image:'',
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"12,24,110",
        },
        {   
            ID : 5,
            productName : 'Chettinadu Fish Curry Masala',
            image:'',
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"28,46,190",
        },
        {   
            ID : 6,
            productName : ' Chettinadu Kulambu Chilli Masala',
            image:'',
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"15,30,120",
        },
        {   
            ID : 7,
            productName : 'Chettinadu Rasam Powder',
            image:'',
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"30,48,180",
        },
        {   
            ID : 8,
            productName : 'Red Chilli Powder',
            image:'',
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"20,38,150",
        },
        {   
            ID : 9,
            productName : 'Chettinadu Vathakulambu Masala',
            image:'',
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"25,50,180",
        },
        {   
            ID : 10,
            productName : 'Chettinadu Mutton Masala',
            image:'',
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"28,54,210",
        },
        {   
            ID : 11,
            productName : 'Pepper Powder',
            image:'',
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"45,80,180",
        },
        {   
            ID : 12,
            productName : 'Coriander Powder',
            image:'',
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"15,25,75",
        },
        {   
            ID : 13,
            productName : 'Chettinadu Fish Fry Masala',
            image:'',
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"28,48,180",
        },
        {   
            ID : 14,
            productName : 'Chettinadu Briyani Masala',
            image:'',
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"33,65,280",
        },
        {   
            ID : 15,
            productName : ' Chettinadu Garam Masala',
            image:'',
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"35,73,300",
        },
        {   
            ID : 16,
            productName : 'Cumin Powder',
            image:'',
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"20,40,180",
        },
        {   
            ID : 17,
            productName : 'Chettinadu Idli Podi',
            image:'',
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"20,40,170",
        },
        {   
            ID : 18,
            productName : ' Chettinadu Nattu Kozhi Masala',
            image:'',
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"32,60,250",
        },
        {   
            ID : 19,
            productName : 'Chettinadu Egg Gravy Masala',
            image:'',
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"30,57,180",
        },
        {   
            ID : 20,
            productName : 'Chettinadu Chilli Chicken Masala',
            image:'',
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"28,55,150",
        },
        {   
            ID : 21,
            productName : 'Kashmiri Chilli Powder',
            image:'',
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"30,60,300",
        },
        {   
            ID :22,
            productName : 'Curry Masala',
            image:'',
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"29,58,280",
        },
        {   
            ID : 23,
            productName : 'Asafoetida',
            image:'',
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"30,55,150",
        },
        {   
            ID : 24,
            productName : 'Rice Flour',
            image:'',
            costPices:'',
            variantsAvailable : "4",
            sellingPrices:"35",
        },
        {   
            ID : 25,
            productName : 'Wheat Flour',
            image:'',
            costPices:'',
            variantsAvailable : "4",
            sellingPrices:"30",
        },
        {   
            ID : 26,
            productName : 'Jaggery Powder',
            image:'',
            costPices:'',
            variantsAvailable : "4",
            sellingPrices:"60",
        },
        {   
            ID : 27,
            productName : 'Cornflour Powder',
            image:'',
            costPices:'',
            variantsAvailable : "4",
            sellingPrices:"35",
        },
        {   
            ID : 28,
            productName : 'Gram Flour',
            image:'',
            costPices:'',
            variantsAvailable : "4",
            sellingPrices:"55",
        },
        {   
            ID : 29,
            productName : 'Double Roasted Rava',
            image:'',
            costPices:'',
            variantsAvailable : "4",
            sellingPrices:"36",
        },
        {   
            ID : 30,
            productName : 'Bajji Bonda Mix 200gm',
            image:'',
            costPices:'',
            variantsAvailable : "3",
            sellingPrices:"35",
        }
    ],
    variants : [
        {
            variantID : 1,
            name:'50g',
            value:50,
            unit:'gram',          
        },
        {
            variantID : 2,
            name:'100g',
            value:100,
            unit:'gram',
        },
        {
            variantID : 3,
            name:'200g',
            value:200,
            unit:'gram',
        },
        {
            variantID : 4,
            name:'500g',
            value:500,
            unit:'gram',
        },
    ],
    isProductsListFetched : false
}

export default (state = initialState, { type, payload }) => {
    // switch (type){
    //     case FETCH_PRODUCTS_REQUEST:
    //     state.productsList = [];
    //     state.isProductsListFetched= false
    //     return {
    //         ...state
    //     }
    //     case FETCH_PRODUCTS_SUCCESS:
    //     state.productsList = payload.data;
    //     state.isProductsListFetched= true
    //     return {
    //         ...state
    //     }
    //     case FETCH_PRODUCTS_FAILURE:
    //     state.productsList = [];
    //     state.isProductsListFetched= false
    //     return {
    //         ...state
    //     }
        
    //     default:
    //     return state;
    // }
    return state;
}