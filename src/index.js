import React from 'react'
import ReactDOM from 'react-dom';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './less/index.less';
import itemData from './item-data';


ReactDOM.render(<App itemData={ itemData }/>, document.getElementById('root'));
