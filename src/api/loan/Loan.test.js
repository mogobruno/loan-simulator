import Loan from './index';

describe('Loan.simulation', () => {
    const validRequest = { amount: 100000, duration: 12 }
    const invalidRequestAmount = { amount: 1000001, duration: 12 }
    const invalidRequestDuration = { amount: 100000, duration: 37 }
    const invalidRequestNegativeDuration = { amount: 100000, duration: -37 }
    const invalidRequestNegativeAmount = { amount: -100000, duration: 12 }

    jest.useFakeTimers();

    test('should return valid simulation', (done) => {
        Loan
            .simulate(validRequest)
            .then((response) => {
                expect(response).toEqual({ ...validRequest, monthlyInstallment: 8583.333333333334 })
                done()
            })
        jest.runAllTimers();
    });

    test('should return duration error message', (done) => {
        Loan
            .simulate(invalidRequestDuration)
            .catch((error) => {
                expect(error.message).toEqual('Loan can not be created for more then 36 months (3 years).')
                done()
            })
        jest.runAllTimers();
    });

    test('should return amount error message', (done) => {
        Loan
            .simulate(invalidRequestAmount)
            .catch((error) => {
                expect(error.message).toEqual('We are not doing loans of more then € 1.000.000 at this moment.')
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
