import React from 'react';
import Paragraph from '../paragraph/paragraph.component';
import icone1 from '../../images/Emoticon/icons8-facebook-circled-15.png';
import icone2 from '../../images/Emoticon/icons8-twitter-15.png';
import icone3 from '../../images/Emoticon/icons8-linkedin-15.png';
import icone4 from '../../images/Emoticon/icons8-instagram-logo-15.png';
import icone5 from '../../images/Emoticon/icons8-telegram-app-15.png';
const Footer = () => {
    return (
        <div className='container mx-auto p-4'>
            <div className='flex justify-center'>
                <button className='flex items-center  justify-center hover:bg-facbock rounded-full h-10 w-10'>
                    <img width='18px' src={icone1} alt="mobile icone" />
                </button>
                <button className='flex items-center  justify-center hover:bg-twiter rounded-full h-10 w-10'>
                    <img width='18px' src={icone2} alt="mobile icone" />
                </button>
                <button className='flex items-center  justify-center hover:bg-linkdin rounded-full h-10 w-10'>
                    <img width='18px' src={icone3} alt="mobile icone" />
                </button>
                <button className='flex items-center instagram justify-center rounded-full h-10 w-10'>
                    <img width='18px' src={icone4} alt="mobile icone" />
                </button>
                <button className='flex items-center hover:bg-telegram justify-center rounded-full h-10 w-10'>
                    <img width='18px' src={icone5} alt="mobile icone" />
                </button>
            </div>
            <Paragraph textalign='text-center' title='تمام مطالب این وبسایت به وسیله نویسندگان وبسایت ترجمه، تالیف یا آماده سازی شده و هرگونه کپی برداری یا استفاده تجاری از آن ممنوع است.' className='text-titlefooter text-lg' />
        </div>
    );
};

export default Footer;