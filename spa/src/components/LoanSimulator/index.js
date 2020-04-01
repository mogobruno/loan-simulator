import React, { Fragment } from 'react';

import './style.css'

// static assets
import money from '../../static/money.svg'

// Commons
import Card from '../../commmons/Card'
import Button from '../../commmons/Button'

function LoanSimulator() {
    return (
        <Fragment>
            <Card>
                <div className="loan_simulator_header">
                    <img className="loan_simulator_header_img" src={money} alt="money icon" />
                    <h1 className="loan_simulator_header_text">Simulate Your Loan</h1>
                </div>
                <div className="loan_simulator_content">
                    <input className="input" placeholder="Amount" type="number" />
                    <input className="input" placeholder="Duration - months" type="number" />
                    <Button>SIMULATE</Button>
                </div>
            </Card>
            <br />
            <Card>
                <div className="loan_simulator_result">
                    <span className="loan_simulator_result_value">€4434.45</span>
                    <span>Total Amount: <b>€12313.12</b></span>
                    <span>Months: 5</span>
                    <Button>Apply</Button>
                </div>
            </Card>
            <br />
            <Card>
                <div className="loan_simulator_result">
                    <span className="loan_simulator_result_value">€4434.45</span>
                    <span>Total Amount: <b>€12313.12</b></span>
                    <span>Months: 5</span>
                    <Button>Apply</Button>
                </div>
            </Card>
            <br />
            <Card>
                <div className="loan_simulator_result">
                    <span className="loan_simulator_result_value">€4434.45</span>
                    <span>Total Amount: <b>€12313.12</b></span>
                    <span>Months: 5</span>
                    <Button>Apply</Button>
                </div>
            </Card>
        </Fragment>
    );
}

export default LoanSimulator;
