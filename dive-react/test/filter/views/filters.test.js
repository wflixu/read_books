import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Filters from '../../../src/filter/views/filters.js';
import Link from '../../../src/filter/views/link.js';
import {FilterTypes} from '../../../src/constants.js';

configure({ adapter: new Adapter() });

describe('filters', () => {
  it('should render three link', () => {
    const wrapper = shallow(<Filters />);

    expect(wrapper.contains(<Link filter={FilterTypes.ALL}> {FilterTypes.ALL} </Link>)).toBe(true);
    expect(wrapper.contains(<Link filter={FilterTypes.COMPLETED}> {FilterTypes.COMPLETED} </Link>)).toBe(true);
    expect(wrapper.contains(<Link filter={FilterTypes.UNCOMPLETED}> {FilterTypes.UNCOMPLETED} </Link>)).toBe(true);
  });
});
