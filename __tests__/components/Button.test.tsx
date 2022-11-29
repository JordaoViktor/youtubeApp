import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Button } from '@components/Button';

describe('<Button/>', () => {
  jest.useRealTimers();
  test('render all props', async () => {
    const component = (
      <Button
        onPress={jest.fn()}
        active={false}
        text="hello-world"
        pressableTestID="CustomizedButtonTestID"
      />
    );

    render(component);

    const button = await screen.findByTestId('CustomizedButtonTestID');
    const text = await screen.findByText('hello-world');

    expect(button).toHaveAccessibilityState({ disabled: true });
    expect(text).toBeVisible();
  });
});
