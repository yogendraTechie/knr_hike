// import {
//     FETCH_PRODUCTS_FAILURE,
//     FETCH_PRODUCTS_REQUEST,
//     FETCH_PRODUCTS_SUCCESS,
// } from '../types';
import asafoetida from '../../assets/images/asafoetida.png'
import bajji_bonda_mix from '../../assets/images/bajji_bonda_mix.png'
import black_pepper_powder from '../../assets/images/black_pepper_powder.png'
import chettinadu_briyani_masala from '../../assets/images/chettinadu_briyani_masala.png'
import chettinadu_chicken_masala from '../../assets/images/chettinadu_chicken_masala.png'
import chettinadu_chicken65_masala from '../../assets/images/chettinadu_chicken65_masala.png'
import chettinadu_chilli_chicken_masala from '../../assets/images/chettinadu_chilli_chicken.png'
import chettinadu_egg_gravy_masala from '../../assets/images/chettinadu_egg_gravy.png'
import chettinadu_fish_curry_masala from '../../assets/images/chettinadu_fish_curry_masala.png'
import chettinadu_fish_fry_masala from '../../assets/images/chettinadu_fish_fry_masala.png'
import chettinadu_garam_masala from '../../assets/images/garam_masala.png'
import chettinadu_idli_podi from '../../assets/images/chettinadu_idli_podi.png'
import chettinadu_kulambu_chilli_masala from '../../assets/images/chettinadu_kulambu_chilli_masala.png'
import chettinadu_mutton_masala from '../../assets/images/chettinadu_mutton_masala.png'
import chettinadu_nattu_kozhi_masala from '../../assets/images/chettinadu_nattu_kozhi_masala.png'
import chettinadu_rasam_powder from '../../assets/images/rasam_powder.png'
import chettinadu_sambhar_powder from '../../assets/images/chettinadu_sambhar_powder.png'
import chettinadu_vathakulambu_masala from '../../assets/images/chettinadu_vathakulambu_masala.png'
import coriander_powder from '../../assets/images/coriander_powder.png'
import cornflour_powder from '../../assets/images/cornflour_powder.png'
import cumin_powder from '../../assets/images/cumin_powder.png'
import curry_masala from '../../assets/images/curry_masala.png'
import double_roasted_rava from '../../assets/images/double_roasted_rava.png'
import gram_flour from '../../assets/images/gram_flour.png'
import jaggery_powder from '../../assets/images/jaggery_powder.png'
import kashmiri_chilli_powder from '../../assets/images/kashmiri_chilli_powder.png'
import red_chilli_powder from '../../assets/images/red_chilli_powder.png'
import rice_flour from '../../assets/images/rice_flour.png'
import turmeric_powder from '../../assets/images/turmeric_powder.png'
import wheat_flour from '../../assets/images/wheat_flour.png'

const initialState = {
    productsList : [
        {   
            ID : 1,
            productName : 'Chettinadu Chicken 65 Masala',
            image:chettinadu_chicken65_masala,
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"30,48,200",
        },
        {   
            ID : 2,
            productName : ' Chettinadu Sambhar Powder',
            image:chettinadu_sambhar_powder,
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"25,46,180",
        },
        {   
            ID : 3,
            productName : 'Chettinadu Chicken Masala',
            image:chettinadu_chicken_masala,
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"28,50,200",
        },
        {   
            ID : 4,
            productName : 'Turmeric Powder',
            image:turmeric_powder,
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"12,24,110",
        },
        {   
            ID : 5,
            productName : 'Chettinadu Fish Curry Masala',
            image:chettinadu_fish_curry_masala,
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"28,46,190",
        },
        {   
            ID : 6,
            productName : ' Chettinadu Kulambu Chilli Masala',
            image:chettinadu_kulambu_chilli_masala,
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"15,30,120",
        },
        {   
            ID : 7,
            productName : 'Chettinadu Rasam Powder',
            image:chettinadu_rasam_powder,
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"30,48,180",
        },
        {   
            ID : 8,
            productName : 'Red Chilli Powder',
            image:red_chilli_powder,
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"20,38,150",
        },
        {   
            ID : 9,
            productName : 'Chettinadu Vathakulambu Masala',
            image:chettinadu_vathakulambu_masala,
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"25,50,180",
        },
        {   
            ID : 10,
            productName : 'Chettinadu Mutton Masala',
            image:chettinadu_mutton_masala,
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"28,54,210",
        },
        {   
            ID : 11,
            productName : 'Black Pepper Powder',
            image:black_pepper_powder,
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"45,80,180",
        },
        {   
            ID : 12,
            productName : 'Coriander Powder',
            image:coriander_powder,
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"15,25,75",
        },
        {   
            ID : 13,
            productName : 'Chettinadu Fish Fry Masala',
            image:chettinadu_fish_fry_masala,
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"28,48,180",
        },
        {   
            ID : 14,
            productName : 'Chettinadu Briyani Masala',
            image:chettinadu_briyani_masala,
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"33,65,280",
        },
        {   
            ID : 15,
            productName : ' Chettinadu Garam Masala',
            image:chettinadu_garam_masala,
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"35,73,300",
        },
        {   
            ID : 16,
            productName : 'Cumin Powder',
            image:cumin_powder,
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"20,40,180",
        },
        {   
            ID : 17,
            productName : 'Chettinadu Idli Podi',
            image:chettinadu_idli_podi,
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"20,40,170",
        },
        {   
            ID : 18,
            productName : ' Chettinadu Nattu Kozhi Masala',
            image:chettinadu_nattu_kozhi_masala,
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"32,60,250",
        },
        {   
            ID : 19,
            productName : 'Chettinadu Egg Gravy Masala',
            image:chettinadu_egg_gravy_masala,
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"30,57,180",
        },
        {   
            ID : 20,
            productName : 'Chettinadu Chilli Chicken Masala',
            image:chettinadu_chilli_chicken_masala,
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"28,55,150",
        },
        {   
            ID : 21,
            productName : 'Kashmiri Chilli Powder',
            image:kashmiri_chilli_powder,
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"30,60,300",
        },
        {   
            ID :22,
            productName : 'Curry Masala',
            image:curry_masala,
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"29,58,280",
        },
        {   
            ID : 23,
            productName : 'Asafoetida',
            image:asafoetida,
            costPices:'',
            variantsAvailable : "1,2,4",
            sellingPrices:"30,55,150",
        },
        {   
            ID : 24,
            productName : 'Rice Flour',
            image:rice_flour,
            costPices:'',
            variantsAvailable : "4",
            sellingPrices:"35",
        },
        {   
            ID : 25,
            productName : 'Wheat Flour',
            image:wheat_flour,
            costPices:'',
            variantsAvailable : "4",
            sellingPrices:"30",
        },
        {   
            ID : 26,
            productName : 'Jaggery Powder',
            image:jaggery_powder,
            costPices:'',
            variantsAvailable : "4",
            sellingPrices:"60",
        },
        {   
            ID : 27,
            productName : 'Cornflour Powder',
            image:cornflour_powder,
            costPices:'',
            variantsAvailable : "4",
            sellingPrices:"35",
        },
        {   
            ID : 28,
            productName : 'Gram Flour',
            image:gram_flour,
            costPices:'',
            variantsAvailable : "4",
            sellingPrices:"55",
        },
        {   
            ID : 29,
            productName : 'Double Roasted Rava',
            image:double_roasted_rava,
            costPices:'',
            variantsAvailable : "4",
            sellingPrices:"36",
        },
        {   
            ID : 30,
            productName : 'Bajji Bonda Mix 200gm',
            image:bajji_bonda_mix,
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