import React from 'react';
import Paragraph from '../paragraph/paragraph.component';
import icone1 from '../../images/Emoticon/B-amooz-Dictionary-min.jpg';
import icone2 from '../../images/Emoticon/B-amooz-application-min.jpg';
import icone3 from '../../images/Emoticon/lang-b-amooz-min.jpg';
const Row4 = () => {
    const imges = [
        { src: icone1, title: 'دیکشنری بیاموز' },
        { src: icone2, title: 'اپلیکیشن زبان بیاموز' },
        { src: icone3, title: 'وبسایت اموزشی بیاموز' },
    ]
    return (
        <div className='container sm:p-4 mx-auto'>
            <div className='h-16'></div>
            <Paragraph textalign='text-center' title='پروژه‌های اصلی بیاموز' className='text-black text-4xl' />
            <Paragraph title='بیاموز به طور همزمان در حال توسعه چند پروژه آموزشی-تحقیقاتی در حوزه زبان است. این پروژه‌ها به زبان‌آموزان کمک می‌کند. در اینجا می‌توانید با اصلی‌ترین این پروژه‌ها آشنا شوید.' textalign='text-center' className='text-title text-lg mt-1' />
            <div className='grid grid-cols-1 mt-10 md:grid-cols-3'>
                {imges.map(item => {
                    return (
                        <div className='relative mt-5 md:mt-0'>
                            <img src={item.src} alt="images" />
                            <div className='absolute top-12 w-full'>
                            <Paragraph textalign='text-center' title={item.title} className='text-white text-xl' />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Row4;