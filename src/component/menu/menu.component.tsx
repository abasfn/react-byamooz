import React from 'react';
import Paragraph from '../paragraph/paragraph.component';
import icone1 from '../../images/Emoticon/icons8-search-24.png';
import icone2 from '../../images/Emoticon/logo-favicon-white.png';
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
            <div className='flex m-auto mt-4 md:mt-0 justify-end md:col-span-2 md:m-0'>
                <img className='ml-8' src={icone1} alt="SearchIcone" />
                <div className='bg-black'>
                    <img width='100' height='34' src={icone2} alt="LOGO" />
                </div>
            </div>
        </div>
    );
};

export default Menu;