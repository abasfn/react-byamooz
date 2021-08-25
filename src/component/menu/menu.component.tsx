import React from 'react';
import Paragraph from '../paragraph/paragraph.component';
const Menu = () => {
    const menu = [
        { title: 'بیاموز', className: 'text-title text-base md:text-xl' },
        { title: 'اموزش زبان ها', className: 'text-title text-base md:text-xl' },
        { title: 'دانلود اپلیکیشن', className: 'text-title text-base md:text-xl' },
        { title: 'دیکشنری', className: 'text-title text-base md:text-xl' },
        { title: 'وبلاگ', className: 'text-title text-base md:text-xl' },
        { title: 'درباره ما', className: 'text-title text-base md:text-xl' },
        { title: 'تماس با ما', className: 'text-title text-base md:text-xl' },
    ]
    return (
        <div className='container mx-auto grid grid-cols-1 sm:p-4 md:grid-cols-5 mt-10'>
            <div className='flex flex-wrap md:col-span-3 justify-between'>
                {menu.map(item => {
                    return (
                        <Paragraph title={item.title} className={item.className} />
                    )
                })}
            </div>
            <div className='flex m-auto justify-end md:col-span-2 md:m-0'>
                <img className='ml-8' src="images/Emoticon/icons8-search-24.png" alt="SearchIcone" />
                <div className='bg-black'>
                    <img src="images/Emoticon/logo-favicon-white.png" alt="LOGO" />
                </div>
            </div>
        </div>
    );
};

export default Menu;