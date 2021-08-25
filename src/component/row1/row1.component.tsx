import React from 'react';
import Paragraph from '../paragraph/paragraph.component';
const Row1 = () => {
    return (
        <div className='container mt-32 mx-auto sm:p-4 grid grid-cols-1 md:grid-cols-2 mt-10'>
       <div className='md:mt-44'>
       <Paragraph title='بیاموز' className='text-5xl' />
       <Paragraph title='وبسایت آموزش آنلاین زبان‌های خارجی' className='text-title text-xl mt-1' />
       <Paragraph title='بیاموز تولید کننده مجموعه ابزارهای خودآموز و کمک‌آموزشی است که به شما در یادگیری ساده‌تر و سریع‌تر زبان‌های خارجی کمک می‌کند.' className='text-title text-lg mt-5' />
       </div>
       <div className='relative -bottom-5'>
        <img width='500px' height='500px' src="images/Emoticon/B-amooz-min.png" alt="Map" />
       </div>     
        </div>
    );
};

export default Row1;