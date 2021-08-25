import React from 'react';
import Paragraph from '../paragraph/paragraph.component';
import icone1 from '../../images/Emoticon/big-button.png';
import icone2 from '../../images/Emoticon/badge-new-min.png';
import icone3 from '../../images/Emoticon/First-Page-550.png';

const Row6 = () => {
    return (
        <div className='grid container mx-auto grid-cols-1 sm:p-4 md:grid-cols-2'>
            <div className='mt-32'>
                <Paragraph textalign='text-center' title='اپلیکیشن زبان بیاموز' className='text-black text-5xl mt-12' />
                <Paragraph textalign='text-center' title='زبان بیاموز در همه روند یادگیری در کنار شما خواهد بود' className='text-title text-lg mt-6 mb-5' />
                <hr />
                <Paragraph textalign='text-center' title='به بیش از 200هزار کاربر فعال این اپلیکیشن بپیوندید' className='text-title text-2xl mt-6 mb-5' />
                <button className='w-6/12 flex m-auto'><img src={icone1} alt="button" /></button>
                <button className='w-2/6 mt-12 flex m-auto'><img src={icone2} alt="button" /></button>
            </div>
            <div className='mt-6 md:mt-0 md:mt-6 2xl:mt-14 '>
                <img className='m-auto' src={icone3} alt="phone" />
            </div>
        </div>
    );
};

export default Row6;