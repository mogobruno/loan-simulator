import React from 'react';
import { shallow } from 'enzyme';

import Button from './index';

describe('Button', () => {
    test('should render with valid provided children', () => {
        const children = <span>My Test Button</span>
        const button = shallow(<Button>{children}</Button>)
        expect(button.contains(children)).toEqual(true);
    });

    test('should render with valid class', () => {
        const button = shallow(<Button>Test</Button>)
        expect(button.hasClass('ls_button')).toEqual(true);
    });

    test('should render with custom classes', () => {
        const button = shallow(<Button className="custom_class">Test</Button>)
        expect(button.hasClass('ls_button')).toEqual(true);
        expect(button.hasClass('custom_class')).toEqual(true);
    });

    test('should propagate onClick event from real button html element', () => {
        const onClick = jest.fn()
        const button = shallow(<Button onClick={onClick}>Test</Button>)
        button.simulate('click')
        expect(onClick.mock.calls.length).toBe(1)
    });
});
