import React from 'react';
import Paragraph from '../paragraph/paragraph.component';

const Row6 = () => {
    return (
        <div className='grid container mx-auto grid-cols-1 sm:p-4 md:grid-cols-2'>
            <div className='mt-32'>
                <Paragraph textalign='text-center' title='اپلیکیشن زبان بیاموز' className='text-black text-5xl mt-12' />
                <Paragraph textalign='text-center' title='زبان بیاموز در همه روند یادگیری در کنار شما خواهد بود' className='text-title text-lg mt-6 mb-5' />
                <hr />
                <Paragraph textalign='text-center' title='به بیش از 200هزار کاربر فعال این اپلیکیشن بپیوندید' className='text-title text-2xl mt-6 mb-5' />
                <button className='w-6/12 flex m-auto'><img src="images/big-button.png" alt="button" /></button>
                <button className='w-2/6 mt-12 flex m-auto'><img src="images/badge-new-min.png" alt="button" /></button>
            </div>
            <div className='mt-6'>
                <img className='m-auto' src="images/First-Page-550.png" alt="phone" />
            </div>
        </div>
    );
};

export default Row6;