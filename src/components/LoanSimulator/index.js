import React, { Fragment, useState } from 'react';

// Static assets
import money from '../../static/money.svg'

// Commons
import Card from '../../commons/Card'
import Input from '../../commons/Input'
import Button from '../../commons/Button'
import Loader from '../../commons/Loader'

// Apis
import Loan from '../../api/Loan'

// Styles
import './style.css'

const loanSimulatorResult = ({duration, amount, monthlyInstallment}) => {
    return (<Card>
        <div className="loan_simulator_result">
            <div className="loan_simulator_result_value">
                <p>Per month:</p>
                <p>€{monthlyInstallment.toFixed(2)}</p>
            </div>
            <div className="loan_simulator_result_group">
                <p>Total Amount:</p>
                <p>€{amount.toFixed(2)}</p>
            </div>
            <div className="loan_simulator_result_group">
                <p>Years:</p>
                <p>{duration}</p>
            </div>
            <Button>Apply</Button>
        </div>
    </Card>)
}

const loanSimulatorError = (message) => (
    <Card>
        <div className="loan_simulator_error">
            {message}
        </div>
    </Card>
)

const loanSimulatorLoading = () => (
    <div className="loan_simulator_loading">
        <Loader />
    </div>
)

function LoanSimulator() {
    const [simulation, setSimulation] = useState(null)
    const [errorMessage, setError] = useState(null)
    const [isLoading, setLoading] = useState(false)

    const simulateLoan = (event) => {
        event.preventDefault()
        const amount = parseInt(event.target.amount.value)
        const duration = parseInt(event.target.duration.value)
        
        setLoading(true)
        setSimulation(null)
        setError(null)

        Loan
            .simulate({ amount, duration })
            .then((response) => setSimulation(response))
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false))
    }

    return (
        <Fragment>
            <Card>
                <div className="loan_simulator_header">
                    <img className="loan_simulator_header_img" src={money} alt="money icon" />
                    <h1 className="loan_simulator_header_text">Simulate Your Loan</h1>
                </div>
                <form className="loan_simulator_content" onSubmit={simulateLoan}>
                    <Input
                        required
                        min={10000}
                        name="amount"
                        className="input_flex"
                        placeholder="Amount"
                        type="number"
                    />
                    <Input
                        required
                        min={1}
                        name="duration"
                        className="input_flex"
                        placeholder="Duration - years"
                        type="number"
                    />
                    <Button className="button_flex">Simulate</Button>
                </form>
            </Card>
            <br />
            { simulation && loanSimulatorResult(simulation) }
            { errorMessage && loanSimulatorError(errorMessage) }
            { isLoading && loanSimulatorLoading() }
        </Fragment>
    );
}

export default LoanSimulator;
