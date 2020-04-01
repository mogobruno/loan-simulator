import React from 'react';
import { shallow } from 'enzyme';

import Card from './index';

describe('Card', () => {
    test('should render with valid provided children', () => {
        const children = <div>Card content</div>
        const card = shallow(<Card>{children}</Card>)
        expect(card.contains(children)).toEqual(true);
    });

    test('should render with valid class', () => {
        const card = shallow(<Card>Test</Card>)
        expect(card.hasClass('ls_card')).toEqual(true);
    });

    test('should render with custom classes', () => {
        const card = shallow(<Card className="custom_class">Test</Card>)
        expect(card.hasClass('ls_card')).toEqual(true);
        expect(card.hasClass('custom_class')).toEqual(true);
    });
});
