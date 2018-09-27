import React, { Component } from 'react';
import './Home.css';
import tu1 from './images/1_03.jpg';
class Home extends Component {
  render() {
    return (
      
      <div className="home">
        <div className="up">
         <p>xxx金融后台管理系统</p> 
        </div>
        <div className="dum">
          <div className="left">
            <ul>
              <li>首页</li>
              <li>用户列表</li>
              <li>信息列表</li>
              <li>信息管理</li>
              <li>资金管理</li>
              <li>投资管理</li>
              <li>资金数据</li>
              <li>金融文章</li>
              </ul>
          </div>
          <div className="right"><img src={tu1} alt=""/></div>
        </div>
      </div>
    );
  }
}

export default Home;
