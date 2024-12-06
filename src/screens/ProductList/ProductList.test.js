/* import React from 'react';
import { render } from '@testing-library/react-native';
import ProductListScreen from './ProductListScreen';

describe('ProductListScreen', () => {
  it('renders loading indicator while fetching products', () => {
    const { getByTestId } = render(<ProductListScreen />);
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('displays empty text when no products are available', () => {
    const { getByText } = render(<ProductListScreen />);
    expect(getByText('No products available.')).toBeTruthy();
  });
});
 */