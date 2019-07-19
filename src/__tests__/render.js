import React from 'react';

import {render} from '../'

test('renders div into document', () => {
  const ref = React.createRef()
  const {container} = render(<div ref={ref} />)
  expect(container.firstChild).toBe(ref.current)
})

export * from '@testing-library/react';
export { render };