import React,{Component} from 'react';

class NavMenu extends Component{
    render(){
        return<div className='NavMenuList'>
            <a className='text_15_600_white_semibold' href='#homeSection' >Home</a>
            <a className='text_15_600_white_semibold' href='#productsCatalogueSection'>Products</a>
            <a className='text_15_600_white_semibold' href='#contactSection'>Contact</a>
        </div>
    }
}

export default NavMenu;