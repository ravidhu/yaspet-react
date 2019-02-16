import * as React from 'react';
import App from '../../components/App/App';
import * as renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {

    const component = renderer.create(<App />)

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();

});
