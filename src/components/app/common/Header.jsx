import React,{Component} from 'react';

import cart_white from '../../../assets/icons/cart_white.svg'
import menuIcon_white from '../../../assets/icons/menuIcon_white.svg'
import knr_logo from '../../../assets/icons/knr_logo_old.png'

class Header extends Component{

    render(){
        console.log('Header')
        var {showBurgerMenu,showCart} = this.props
        return(
            <div className='header width-100 flex_row item_center content_between'>
                {
                    showBurgerMenu && 
                    <img src={menuIcon_white} width={20} height={17} />
                }
                <img src={knr_logo}  width={50} height={32}/>
                {
                    showCart && 
                    <img src={cart_white} width={17} height={17} />
                }
            </div>
        )
    }

}

export default Header;