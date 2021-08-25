import React from 'react';
import Paragraph from '../paragraph/paragraph.component';
import icone1 from '../../images/Emoticon/icons8-facebook-circled-24.png';
import icone2 from '../../images/Emoticon/icons8-twitter-24.png';
import icone3 from '../../images/Emoticon/icons8-linkedin-24.png';
import icone4 from '../../images/Emoticon/icons8-instagram-logo-24.png';

const TopMenu = () => {
    return (
        <div>
            <div className='flex justify-end'>
                <img className='ml-5' src={icone1} alt="mobile icone" />
                <img className='ml-5' src={icone2} alt="mobile icone" />
                <img className='ml-5' src={icone3} alt="mobile icone" />
                <img className='ml-5' src={icone4} alt="mobile icone" />
                <div className='flex ml-5'>
                    <img className='ml-5' src={icone1} alt="mobile icone" />
                    <Paragraph title='Dictionary' className='text-white font-bold text-sm mt-0.5' />
                </div>
                <div className='flex ml-3'>
                    <img className='ml-5' src={icone2} alt="mobile icone" />
                    <Paragraph title='App' className='text-white text-sm font-bold mt-0.5' />
                </div>
            </div>
        </div>
    );
};

export default TopMenu;