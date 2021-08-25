import React from 'react';
import Paragraph from '../paragraph/paragraph.component';

const ImagesGroup = () => {
    const imges = [
        { src: 'images/Emoticon/uk-min.jpg', title: 'اموزش زبان انگلیسی' },
        { src: 'images/Emoticon/germay-min.jpg', title: 'اموزش زبان المانی' },
        { src: 'images/Emoticon/France-min.jpg', title: 'اموزش زبان فرانسه' },
        { src: 'images/Emoticon/Turkey-min.jpg', title: 'اموزش زبان ترکی استانبولی' },
        { src: 'images/Emoticon/spain-min.jpg', title: 'اموزش زبان اسپانیایی' },
        { src: 'images/Emoticon/arabia-min.jpg', title: 'اموزش زبان عربی' },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-6'>
            {imges.map(item => {
                return (
                    <div className='relative mt-5 md:mt-0'>
                        <img src={item.src} alt="images" />
                        <Paragraph title={item.title} className='text-white text-xl absolute bottom-10 right-3' />
                    </div>
                )
            })}
        </div>
    );
};

export default ImagesGroup;