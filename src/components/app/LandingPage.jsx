import React,{Component,Fragment} from 'react';
import Header from './common/Header.jsx'
import ProductsCatalogue from './common/ProductsCatalogue.jsx'
import Footer from './common/Footer.jsx'

import mainSectionImage from '../../assets/images/main_section_image.jpg'
import section1Image from '../../assets/images/section_1_image.jpg'
import section2Image from '../../assets/images/section_2_image.jpg'
class LandingPage extends Component{

    render(){
        console.log('LandingPage')
        return(
            <Fragment>
                <Header showBurgerMenu={true} showCart={true}/>

                <section className='main_section'>
                    <img src={mainSectionImage} className='width_100 height_100' style={{minHeight:'162px'}}/>
                    <div className='main_content'>
                        <div className='flex_column mg_8'>
                           <span className='text_24_normal_white_tamil'>தரமோ உயர்தரம்!</span>
                           <span className='text_24_normal_white_tamil'>சுவையோ பாரம்பரியம்!!</span>
                        </div>
                        <div className='flex_column'>
                            <span className='text_28_600_white_semibold'>
                               Chettinad Masala.
                            </span >
                            <span className='text_28_600_white_semibold'>
                                Homemade Masala.
                            </span>
                            <span className='text_28_600_white_semibold'>
                                No Ajinomoto.
                            </span>
                        </div>
                        <button className='white_dark_btn text_14_600_greydark_semibold mg_25'>Buy Now</button>
                    </div>
                </section>

                <section  className='section_1'>
                    <img src={section1Image} className='width_100 height_100' style={{minHeight:'380px'}}/>
                    <div className='section_1_content'>
                        <div className='text_16_normal_greydark_regular mg_bot_18'>
                            We are committed to deliver safe and hygienic homemade masala powders. Our products have 
                            <span className='text_16_600_reddark_semibold'> NO ARTIFICIAL COLOURING </span>
                             and
                            <span className='text_16_600_reddark_semibold'> NO AJINOMOTO. </span>.
                        </div>
                    </div>
                
                </section>
                <section className='section_2'>
                    <img src={section2Image} className='width_100 height_100' style={{minHeight:'204px'}}/>
                    <div className='section_2_content'>
                        <div className='text_16_normal_greydark_regular mg_10'>
                            South Indian food is known for its taste and smell. Crispy dosa or Vada, Nattu Kozhi Kulambu or Mutton, any dish you try is a joy to eat. All you need is our wide variety of Homemade Masala to enjoy all these.
                        </div>
                        <div className='text_40_600_black_semibold mg_10'>Try Today!</div>
                    </div>
                </section>
                <ProductsCatalogue/>
                <Footer />
            </Fragment>
        )
    }

}

export default LandingPage;