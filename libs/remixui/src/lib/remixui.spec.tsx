import { render } from '@testing-library/react';

import Remixui from './remixui';

describe('Remixui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Remixui />);
    expect(baseElement).toBeTruthy();
  });
});
