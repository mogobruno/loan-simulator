const FAKE_DELLAY = 1500
const MONTHLY_INTEREST = 1.03;

const simulateLoan = (duration, amount) => {
    const monthlyInstallment = (amount / duration) * MONTHLY_INTEREST
    return {
        amount,
        duration,
        monthlyInstallment
    }
}

const simulate = ({ duration, amount }) => {
    return new Promise((resolve, reject) => {
        if (duration > 36) {
            reject({ message: 'Loan can not be created for more then 36 months (3 years).' })
        }

        if (amount > 1000000) {
            reject({ message: 'We are not doing loans of more then € 1.000.000 at this moment.' })
        }

        setTimeout(() => resolve(simulateLoan(duration, amount)), FAKE_DELLAY)
    });
}

export default {
    simulate
}