import React, { Fragment, useState } from 'react';

// Static assets
import money from '../../static/money.svg'

// Commons
import Card from '../../commmons/Card'
import Input from '../../commmons/Input'
import Button from '../../commmons/Button'

// Styles
import './style.css'

const LoanSimulatorResult = () => (
    <Card>
        <div className="loan_simulator_result">
            <div className="loan_simulator_result_value">
                <p>Per month:</p>
                <p>€4434.45</p>
            </div>
            <div className="loan_simulator_result_group">
                <p>Total Amount:</p>
                <p>€12313.12</p>
            </div>
            <div className="loan_simulator_result_group">
                <p>Months:</p>
                <p>5</p>
            </div>
            <Button>Apply</Button>
        </div>
    </Card>
)

function LoanSimulator() {
    return (
        <Fragment>
            <Card>
                <div className="loan_simulator_header">
                    <img className="loan_simulator_header_img" src={money} alt="money icon" />
                    <h1 className="loan_simulator_header_text">Simulate Your Loan</h1>
                </div>
                <form className="loan_simulator_content">
                    <Input className="input_flex" label="Amount" placeholder="Amount" type="number" />
                    <Input className="input_flex" label="Months" placeholder="Duration - months" type="number" />
                    <Button className="button_flex">Simulate</Button>
                </form>
            </Card>
            <br />
            {LoanSimulatorResult()}
        </Fragment>
    );
}

export default LoanSimulator;
