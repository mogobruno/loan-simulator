import React from 'react';
import './style.css';

// Static assets
import pineapple from '../../static/pineapple.svg'
import avatar1 from '../../static/avatar4.svg'

// Components
import Header from '../../components/Header'
import LoanSimulator from '../../components/LoanSimulator'

function HomeView() {
  return (
    <div className="home">
        <Header 
            logo={pineapple}
            name='Loan Simulator'
            user={
                <img width="40" src={avatar1} alt="user_img"/>
            }
        />
        <div className="home_content">
            <LoanSimulator />
        </div>
    </div>
  );
}

export default HomeView;