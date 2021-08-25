import React from 'react';
import Paragraph from '../paragraph/paragraph.component';
const Footer = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center p-3'>
                <button className='flex items-center  justify-center hover:bg-facbock rounded-full h-10 w-10'>
                    <img width='18px' src="images/Emoticons/icons8-facebook-circled-15.png" alt="mobile icone" />
                </button>
                <button className='flex items-center  justify-center hover:bg-twiter rounded-full h-10 w-10'>
                    <img width='18px' src="images/Emoticons/icons8-twitter-15.png" alt="mobile icone" />
                </button>
                <button className='flex items-center  justify-center hover:bg-linkdin rounded-full h-10 w-10'>
                    <img width='18px' src="images/Emoticons/icons8-linkedin-15.png" alt="mobile icone" />
                </button>
                <button className='flex items-center instagram justify-center rounded-full h-10 w-10'>
                    <img width='18px' src="images/Emoticons/icons8-instagram-logo-15.png" alt="mobile icone" />
                </button>
                <button className='flex items-center hover:bg-telegram justify-center rounded-full h-10 w-10'>
                    <img width='18px' src="images/Emoticons/icons8-telegram-app-15.png" alt="mobile icone" />
                </button>
            </div>
            <Paragraph textalign='text-center' title='تمام مطالب این وبسایت به وسیله نویسندگان وبسایت ترجمه، تالیف یا آماده سازی شده و هرگونه کپی برداری یا استفاده تجاری از آن ممنوع است.' className='text-titlefooter text-lg mb-3' />
        </div>
    );
};

export default Footer;