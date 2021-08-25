import React from 'react';
import Paragraph from '../paragraph/paragraph.component';
const TopMenu = () => {
    return (
        <div>
            <div className='flex justify-end'>
                <img className='ml-5' src="images/icons8-facebook-circled-24.png" alt="mobile icone" />
                <img className='ml-5' src="images/icons8-twitter-24.png" alt="mobile icone" />
                <img className='ml-5' src="images/icons8-linkedin-24.png" alt="mobile icone" />
                <img className='ml-5' src="images/icons8-instagram-logo-24.png" alt="mobile icone" />
                <div className='flex ml-5'>
                    <img src="images/icons8-book-12.png" alt="mobile icone" />
                    <Paragraph title='Dictionary' className='text-white font-bold text-sm mt-0.5' />
                </div>
                <div className='flex ml-3'>
                    <img src="images/icons8-phone-case-12.png" alt="mobile icone" />
                    <Paragraph title='App' className='text-white text-sm font-bold mt-0.5' />
                </div>
            </div>
        </div>
    );
};

export default TopMenu;