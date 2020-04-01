import React from 'react';
import { shallow } from 'enzyme';

import Loader from './index';

describe('Loader', () => {
    test('should render with valid class', () => {
        const loader = shallow(<Loader />)
        expect(loader.hasClass('ls_circle')).toEqual(true);
    });

    test('should render with custom classes', () => {
        const loader = shallow(<Loader className="custom_class" />)
        expect(loader.hasClass('ls_circle')).toEqual(true);
        expect(loader.hasClass('custom_class')).toEqual(true);
    });
});
