import React from 'react';
import Paragraph from '../paragraph/paragraph.component';
import icone1 from '../../images/Emoticon/uk-min.jpg';
import icone2 from '../../images/Emoticon/germay-min.jpg';
import icone3 from '../../images/Emoticon/France-min.jpg';
import icone4 from '../../images/Emoticon/Turkey-min.jpg';
import icone5 from '../../images/Emoticon/spain-min.jpg';
import icone6 from '../../images/Emoticon/arabia-min.jpg';
const ImagesGroup = () => {
    const imges = [
        { src: icone1, title: 'اموزش زبان انگلیسی' },
        { src: icone2, title: 'اموزش زبان المانی' },
        { src: icone3, title: 'اموزش زبان فرانسه' },
        { src: icone4, title: 'اموزش زبان ترکی استانبولی' },
        { src: icone5, title: 'اموزش زبان اسپانیایی' },
        { src: icone6, title: 'اموزش زبان عربی' },
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