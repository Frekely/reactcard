import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import { Tiles } from './Tiles'
import 'tachyons'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className=''>
      <Card ImgUrl={Tiles[0].ImgUrl} id={Tiles[0].id} name={Tiles[0].name} position={Tiles[0].position} school={Tiles[0].school} media={Tiles[0].media} />
      <Card ImgUrl={Tiles[1].ImgUrl} id={Tiles[1].id} name={Tiles[1].name} position={Tiles[1].position} school={Tiles[1].school} media={Tiles[1].media} />
      <Card ImgUrl={Tiles[2].ImgUrl} id={Tiles[2].id} name={Tiles[2].name} position={Tiles[2].position} school={Tiles[2].school} media={Tiles[2].media} />
      <Card ImgUrl={Tiles[3].ImgUrl} id={Tiles[3].id} name={Tiles[3].name} position={Tiles[3].position} school={Tiles[3].school} media={Tiles[3].media} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
