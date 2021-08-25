import React from 'react';
import Paragraph from '../paragraph/paragraph.component';
import icone1 from '../../images/Emoticon/03-300.png';
const Row3 = () => {
    return (
        <div className='grid container  gap-4 mx-auto sm:p-4 grid-cols-1 md:grid-cols-6 mt-16'>
            <div className='md:col-span-4'>
                <Paragraph title='کمی در مورد بیاموز' className='text-black text-3xl mt-8' />
                <Paragraph title='بیاموز کار خود را در سال 1395 و با هدف گسترش محتوای آموزشی به زبان فارسی شروع کرد. هدف بیاموز تولید بستر و محتوایی است که به فارسی زبانان در یادگیری زبان‌های خارجی کمک کند. در طول این زبان، بیاموز توانسته برخی از بزرگترین پروژه‌های حوزه آموزش زبان را در ایران مانند دیکشنری آموزشی بیاموز، اپلیکیشن زبان بیاموز یا وبسایت آموزشی بیاموز اجرایی کند.' className='text-title text-lg mt-5' />
                <Paragraph title='تیم بیاموز به طور ثابت در حال گسترش محصولات موجود و توسعه محصولات جدید است و در این راه از کمک بسیاری از کاربران خود استفاده کرده است' className='text-title text-lg mt-5 mb-5' />
            </div>
            <div className='md:col-span-2'>
            <img width='250px' height='250px' className='m-auto md:m-0' src={icone1} alt="logo" />
            </div>
        </div>
    );
};

export default Row3;