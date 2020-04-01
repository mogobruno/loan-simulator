import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';

describe('Header', () => {
    test('should render with default header class', () => {
        const header = shallow(<Header />)
        expect(header.hasClass('header')).toEqual(true);
    });

    test('should render with valid logo and name', () => {
        const header = shallow(<Header
            logo='fake-img.png'
            name='Loan Simulator'
        />)
        expect(header.find('.header_logo_img').prop('src')).toEqual('fake-img.png');
        expect(header.find('.header_logo_name').text()).toEqual('Loan Simulator');
    });

    test('should render with user content', () => {
        const userContent = <div>User</div>
        const header = shallow(<Header
            user={userContent}
        />)
        expect(header.contains(userContent)).toEqual(true);
    });
});
