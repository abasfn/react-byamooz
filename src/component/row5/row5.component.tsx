import React from 'react';
import Paragraph from '../paragraph/paragraph.component';

const Row5 = () => {
    return (
        <div className='container mx-auto flex flex-col md:flex-row gap-16'>
                <img width='248' height='300' src="images/Emoticon/Langeek-logo-margined-248x300.png" alt="logo" />
            <div className='flex items-center justify-center'>
                <div>
                <Paragraph title='پروژه LanGeek' className='text-black text-3xl' />
                <Paragraph title='تیم بیاموز در حال همکاری بر روی یک پروژه بین المللی با عنوان لنگیک (LanGeek) است. هدف این پروژه ایجاد یک پلتفورم یادگیری آنلاین زبان به صورت بین‌المللی است که به زبان‌آموزان در سراسر دنیا کمک می‌کند ساده‌تر، سریع‌تر و هوشمندانه‌تر یک زبان جدید را فرابگیرند. برای آشنایی بیشتر با این پروژه می‌توانید به وبسایت langeek.co مراجعه کنید.' className='text-title text-lg mt-5' />
                </div>
            </div>
        </div>
    );
};

export default Row5;