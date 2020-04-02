import Loan from './index';

describe('Loan.simulation', () => {
    const validRequest = { amount: 100000, duration: 5 }
    const invalidRequestAmount = { amount: 100001, duration: 5 }
    const invalidRequestDuration = { amount: 100000, duration: 6 }
    const invalidRequestNegativeDuration = { amount: 100000, duration: -5 }
    const invalidRequestNegativeAmount = { amount: -100000, duration: 5 }

    jest.useFakeTimers();

    test('should return valid simulation', (done) => {
        Loan
            .simulate(validRequest)
            .then((response) => {
                expect(response).toEqual({ ...validRequest, monthlyInstallment: 1716.6666666666667 })
                done()
            })
        jest.runAllTimers();
    });

    test('should return duration error message', (done) => {
        Loan
            .simulate(invalidRequestDuration)
            .catch((error) => {
                expect(error.message).toEqual('Loan can not be created for more then 5 years.')
                done()
            })
        jest.runAllTimers();
    });

    test('should return amount error message', (done) => {
        Loan
            .simulate(invalidRequestAmount)
            .catch((error) => {
                expect(error.message).toEqual('We are not doing loans of more then € 100.000 at this moment.')
                done()
            })
        jest.runAllTimers();
    });


    test('should return negative not valid input message for duration', (done) => {
        Loan
            .simulate(invalidRequestNegativeDuration)
            .catch((error) => {
                expect(error.message).toEqual('We can not run any simulation under negative values')
                done()
            })
        jest.runAllTimers();
    });

    test('should return negative not valid input message for amount', (done) => {
        Loan
            .simulate(invalidRequestNegativeAmount)
            .catch((error) => {
                expect(error.message).toEqual('We can not run any simulation under negative values')
                done()
            })
        jest.runAllTimers();
    });
});
