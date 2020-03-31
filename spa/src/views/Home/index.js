import React from 'react';
import './style.css';

// static assets
import pineapple from '../../static/pineapple.svg'

// Components
import Header from '../../components/Header'
import LoanSimulator from '../../components/LoanSimulator'

function HomeView() {
  return (
    <div className="home">
        <Header 
            logo={pineapple}
            name='Loan Simulator'
        />
        <div className="home_content">
            <LoanSimulator />
        </div>
    </div>
  );
}

export default HomeView;
