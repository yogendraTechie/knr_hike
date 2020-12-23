import React,{Component} from 'react';

import NavMenu from './NavMenu.jsx'
import cart_white from '../../../assets/icons/cart_white.svg'
import menuIcon_white from '../../../assets/icons/menuIcon_white.svg'
import knr_logo from '../../../assets/icons/knr_logo_old.png'

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            showNavMenu : false,
        }
        this.wrapperRef = React.createRef();
    }

    componentDidMount(){
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    toggleNavMenu=()=>{
        this.setState(prevState=>({
            showNavMenu : !prevState.showNavMenu
        }))
    }

    handleClickOutside=(event)=> {
        if (this.wrapperRef.current && !this.wrapperRef.current.contains(event.target) && this.state.showNavMenu==true) {
            this.toggleNavMenu()
        }
    }

    render(){
        console.log('Header')
        var {showNavMenu} = this.state;
        var {showBurgerMenu,showCart} = this.props
        return(
            <div className='header'>
                {
                   showNavMenu && 
                    <NavMenu />
                }
                {
                    showBurgerMenu && 
                    <img src={menuIcon_white} width={20} height={17} onClick={this.toggleNavMenu} ref={this.wrapperRef} />
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