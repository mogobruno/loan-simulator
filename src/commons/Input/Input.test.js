import React from 'react';
import { shallow } from 'enzyme';

import Input from './index';

describe('Input', () => {
    test('should render html with provided props', () => {
        const input = shallow(<Input onChange={() => {}} type="number" value={10} />)
        expect(input.html().toString()).toEqual('<input type="number" class="ls_input" value="10"/>');
    });

    test('should render with valid class', () => {
        const input = shallow(<Input />)
        expect(input.hasClass('ls_input')).toEqual(true);
    });

    test('should render with custom classes', () => {
        const input = shallow(<Input className="custom_class" />)
        expect(input.hasClass('ls_input')).toEqual(true);
        expect(input.hasClass('custom_class')).toEqual(true);
    });

    test('should propagate onChange event from real input html element', () => {
        const onChange = jest.fn()
        const input = shallow(<Input onChange={onChange} type="number" value={10} />)
        input.simulate('change')
        expect(onChange.mock.calls.length).toBe(1)
    });
});
