import { HamburgerIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import logo from '../../assets/images/Logo.png'
import UserRegister from '../popups/UserRegister';
import UserLogin from '../popups/UserLogin';


const NavBar = () => {
    return (
        <nav className='flex flex-col items-center justify-around w-[6vw] h-[100vh] bg-SECONDARY fixed top-0 left-0 rounded-r-md shadow-2xl '>
            <div className='flex flex-col items-center gap-8 text-white h-[90vh] py-[2em]'>
                <div><img src={logo} alt="" /></div>
                <div className='w-[5vw] flex justify-center m-2 hover:bg-BUTTON_COLOR rounded transition duration-300 cursor-pointer'>Menu</div>
                <div className='w-[5vw] flex justify-center m-2 hover:bg-BUTTON_COLOR rounded transition duration-300 cursor-pointer'>Contacto</div>
                <div className='w-[5vw] flex justify-center m-2 hover:bg-BUTTON_COLOR rounded transition duration-300 cursor-pointer'>Calendario</div>
            </div>
            <div className="h-[10vh]">
                <Menu>
                    <MenuButton as={Button} >
                        <HamburgerIcon />
                    </MenuButton>
                    <MenuList>
                        <MenuItem><UserRegister /></MenuItem>
                        <MenuItem><UserLogin /></MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </nav>


    )
}

export default NavBar