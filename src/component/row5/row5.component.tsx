import React from 'react';
import Paragraph from '../paragraph/paragraph.component';

const Row5 = () => {
    return (
        <div className='grid sm:p-4 container mx-auto grid-cols-1 md:grid-cols-6'>
            <div className='md:col-span-2'>
                <img src="images/Emoticons/Langeek-logo-margined-248x300.png" alt="logo" />
            </div>
            <div className='md:col-span-4'>
                <Paragraph title='پروژه LanGeek' className='text-black text-3xl mt-12' />
                <Paragraph title='تیم بیاموز در حال همکاری بر روی یک پروژه بین المللی با عنوان لنگیک (LanGeek) است. هدف این پروژه ایجاد یک پلتفورم یادگیری آنلاین زبان به صورت بین‌المللی است که به زبان‌آموزان در سراسر دنیا کمک می‌کند ساده‌تر، سریع‌تر و هوشمندانه‌تر یک زبان جدید را فرابگیرند. برای آشنایی بیشتر با این پروژه می‌توانید به وبسایت langeek.co مراجعه کنید.' className='text-title text-lg mt-5' />
            </div>
        </div>
    );
};

export default Row5;