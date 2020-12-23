import React ,{Component} from 'react';

import defaultImage from '../../../assets/images/defaultImage.png'
//import Chettinadu_Chicken_65_Masala from '../../../assets/images/Chettinadu_Chicken_65_Masala.png'

import ItemSelect from "../../custom_components/Select.jsx";

import { connect } from 'react-redux';

class ProductsCatalogue extends Component{
    constructor(props){
        super(props);
        this.state={
            productsList : [],
            variants:[]
        }
    }

    componentDidMount(){
        var {variants,productsList} = this.props;
        var productsListCopy = JSON.parse(JSON.stringify(productsList))
        productsListCopy.map(m=>{
            var sellingPriceArray = (m.sellingPrices).split(',');
            var variantIDsArray = (m.variantsAvailable).split(',');
            var filteredVariants = variants.filter(o2 => variantIDsArray.some(o1 => o1== o2.variantID));
            var productVariantsCopy = JSON.parse(JSON.stringify(filteredVariants))
            productVariantsCopy.map((n,i)=>{
                n['label'] = n.name;
                n['sellingPrice'] = sellingPriceArray[i];
                return n;
            })
            m['productVariants'] = productVariantsCopy.length>0 ? productVariantsCopy : [];
            m['selectedVariant'] = productVariantsCopy.length>0 ? productVariantsCopy[0] : {};
        })
        this.setState({
            productsList:productsListCopy,
            variants
        })
    }

    selectVariant=(variant,productData)=>{
        console.log(variant,'variant');
        var updatedProductData = {...productData,'selectedVariant' : variant}
        this.setState(prevState=>({
            productsList : [...prevState.productsList.map(m=>m.ID == updatedProductData.ID ? m = updatedProductData : m)]
        }))
    }

    render(){
        var {productsList} = this.state;
        console.log(this.state,'state_productsCatalogue',this.props)
        return<section className='products_section' id='productsCatalogueSection' >
                <div className='text_20_600_black_semibold'>Our Products</div>
                <div className='products_list'>
                    {
                        productsList.map(m=>{
                            var productVariantsOptions = m.productVariants;
                            var selectedVariant = m.selectedVariant 
                            var variantSellingPrice = selectedVariant && (m.selectedVariant).sellingPrice;
                            return(
                                <div className='product_card' key={m.ID}>
                                    <img src={m.image ? m.image : defaultImage} className='width_100' height={236}/>
                                    <div className='product_details'>
                                        <span className='text_16_600_black_semibold mg_5'>{m.productName}</span>
                                        {
                                            variantSellingPrice  ?
                                            <span className='text_24_600_black_semibold mg_20'>&#x20B9; {variantSellingPrice}</span> 
                                            :
                                            <span className='text_24_600_black_semibold mg_20'>Price not available.</span>
                                        }
                                        <div className='flex_row item_center content_between'>
                                        <ItemSelect
                                            options={productVariantsOptions}
                                            placeholder="Select Variant"
                                            onChange={(variant)=>this.selectVariant(variant,m)}
                                            value={selectedVariant}
                                            classes='text_15_normal_greylight_regular item_select'
                                        /> 
                                            <button className='text_16_600_white_semibold grey_white_btn'>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
    }
}

 
function mapStateToProps(state){
    return {
        productsList: state.productData.productsList,
        variants: state.productData.variants,
    }
}


export default connect(mapStateToProps,{})(ProductsCatalogue);