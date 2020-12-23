import React,{Component} from 'react';

import whatsappIcon from '../../../assets/icons/whatsapp.svg'
import facebookIcon from '../../../assets/icons/facebook.svg'
import emailBlackIcon from '../../../assets/icons/email_black.svg'

class Footer extends Component{
    render(){
        console.log('Footer')
        return(
            <section className='footer' id="contactSection">
                <div className='contact_div'>
                    <div className='text_30_600_greydark_semibold mg_top_10'>Contact Us</div>
                    <div className='text_14_600_blackdark_semibold mg_8'>We take suggestions and ideas too!</div>
                    <div className='flex_column mg_top_20'>
                        {/* <span className='text_14_600_black_semibold mg_10 flex_row item_center content_center'><img src={facebookIcon} width={20} height={20}  className='mg_rt_8'/>hikemasala</span> */}
                        <span className='text_14_600_black_semibold mg_10 flex_row item_center content_center'><img src={facebookIcon} width={20} height={20} className='mg_rt_8'/>knrhikemasala</span>
                        <span className='text_14_600_black_semibold mg_10 flex_row item_center content_center'><img src={whatsappIcon} width={20} height={20}  className='mg_rt_8'/>+91 6374 366416</span>
                        <span className='text_14_600_black_semibold flex_row item_center content_center'><img src={emailBlackIcon} width={20} height={20}  className='mg_rt_8'/>knrhikefoodproducts@gmail.com</span>
                    </div>
                </div>
                <div className='credit_div'>
                    <div className='text_12_600_white_semibold mg_10'>
                        Copyright © 2020 KNR HIKE MASALA FOOD PRODUCTS - Powered By Karthick Raman, Madhavan Chandran, Yogendra Chaudhary
                    </div>
                    <div className='text_12_600_white_semibold mg_10'>
                        Photo Credits : Joy Deb, Ratul Ghosh, Pixabay
                    </div>
                </div>
            </section>
        )
    }

}

export default Footer;