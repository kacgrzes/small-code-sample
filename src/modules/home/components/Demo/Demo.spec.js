/* eslint-env mocha */
import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import Demo from './Demo';

describe('<Demo />', () => {
  it('renders className', () => {
    const wrapper = shallow(
      <Demo
        className="test-class-name"
      />
    );

    assert.ok(wrapper.is('.test-class-name'), 'should contain the className');
  });

  it('renders inset', () => {
    const wrapper = shallow(
      <Demo
        inset={true}
      />
    );
    const cheerioDivider = wrapper.render().children();

    assert.strictEqual(cheerioDivider.css('margin-left'), '72px');
  });

  it('overwrite styles', () => {
    const style = {
      backgroundColor: 'red',
    };
    const wrapper = shallow(
      <Demo
        style={style}
      />
    );

    assert.strictEqual(wrapper.prop('style').backgroundColor, 'red', 'should have red backgroundColor');
  });
});
