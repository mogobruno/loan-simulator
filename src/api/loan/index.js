const FAKE_DELLAY = 1500
const MONTHLY_INTEREST = 1.03;

const simulateLoan = (duration, amount) => {
    const monthlyInstallment = (amount / (duration * 12)) * MONTHLY_INTEREST
    return {
        amount,
        duration,
        monthlyInstallment
    }
}

const simulate = ({ duration, amount }) => {
    return new Promise((resolve, reject) => {
        if (duration <= 0 || amount <= 0) {
            reject({ message: 'We can not run any simulation under negative values' })
        }

        if (duration > 5) {
            reject({ message: 'Loan can not be created for more then 5 years.' })
        }

        if (amount > 100000) {
            reject({ message: 'We are not doing loans of more then € 100.000 at this moment.' })
        }

        setTimeout(() => resolve(simulateLoan(duration, amount)), FAKE_DELLAY)
    });
}

export default {
    simulate
}