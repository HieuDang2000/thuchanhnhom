import Tippy from '@tippyjs/react/headless';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { MdAccountCircle } from 'react-icons/md';
import { CiLogout } from 'react-icons/ci';
import './header.scss';

const MENU_ITEMS = [
    {
        icon: <MdAccountCircle />,
        title: 'Account',
        to: '/infor'
    },
    {
        icon: <CiLogout />,
        title: 'Log out',
        to: '/'
    }
]

const Header = () => {

    const [visible, setVisible] = useState(false);

    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const renderItems = () => {
        return MENU_ITEMS.map((item, i) => (
            <button key={i} className='w-full h-[50px] flex items-center justify-between bg-white text-base font-semibold'>
                <Link to={item.to} className='flex items-center justify-between w-full h-full p-3 mr-4'>
                    <i className='text-xl'>{item.icon}</i>
                    {item.title}
                </Link>
            </button>
        ))
    }

    return (
        <div className='relative'>
            <div className='fixed w-full h-12 bg-neutral-400 top-0 left-0 right-0 flex items-center justify-between px-6 z-1'>
                <Link to='/home'><h1 className='text-xl font-medium text-black'>English Web Quiz</h1></Link>
                <input
                    type="text"
                    placeholder='Search'
                    className='w-[300px] h-10 p-4 rounded-2xl placeholder:font-semibold font-semibold text-black input__search'
                />
                <div className='flex items-center h-full w-[120px] justify-around'>
                    <h3 className='text-black font-semibold'>Hello {localStorage.getItem("user")}</h3>
                    <Tippy
                        onClickOutside={hide}
                        interactive='true'
                        visible={visible}
                        placement='bottom-end'
                        render={attrs => (
                            <div className="h-[100px] w-[140px] menu__items z-1 border-2" tabIndex="-1" {...attrs}>
                                {renderItems()}
                            </div>
                        )}
                    >
                        <div onClick={visible ? hide : show}>
                            <FiMenu className='text-2xl text-black hover:cursor-pointer' />
                        </div>
                    </Tippy>
                </div>
            </div>
        </div>
    )
}

export default Header;
