import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CopyRight } from './copy-right';

describe('CopyRight', () => {
  it('should render component', () => {
    const { getByTestId } = render(<CopyRight />);

    expect(getByTestId('instruction')).toHaveTextContent('Double-click to edit a todo');
  });
});
