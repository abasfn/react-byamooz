import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './component/top-menu/top.menu.component';
import Menu from './component/menu/menu.component';
import Row1 from './component/row1/row1.component';
import ImagesGroup from './component/images-group/images.group.component';
import Row3 from './component/row3/row3.component';
import Row4 from './component/row4/row4.component';
import Row5 from './component/row5/row5.component';
import Row6 from './component/row6/row6.component';
import Footer from './component/footer/footer.component';

function App() {
  return (
    <div className="App">
      <div className='bg-topmenu p-2'>
        <TopMenu />
      </div>
      <div className='bg-white p-2'>
        <Menu />
      </div>
      <div className='bg-white p-2'>
        <Row1 />
      </div>
      <div className='bg-white'>
        <ImagesGroup />
      </div>
      <div className='bg-white p-2'>
        <Row3 />
      </div>
      <div className='bg-mainbg w-main mt-6 p-2'>
        <Row4 />
        <div className='h-16'></div>
        <Row5/>
        <div className='h-8'></div>
      </div>
      <div className='bg-white mt-6 p-2'>
       <Row6/>
      </div>
      <div className='bg-footer w-main p-2'>
       <Footer/>
      </div>
    </div>
  );
}

export default App;
