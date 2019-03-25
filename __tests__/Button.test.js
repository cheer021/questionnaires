import React from 'react';
import SimpleButton from '../src/components/Button';
import { mount, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
test('snapshot :: button', () => {
	const component = mount(<SimpleButton disabled/>);
	expect(toJson(component)).toMatchSnapshot();
});


test('onClick: button', ()=> {
	const mockOnClick = jest.fn();
	const component = mount(<SimpleButton onClick ={mockOnClick}/>);
	component.simulate('click');
	expect(mockOnClick.mock.calls.length).toBe(1);
})

