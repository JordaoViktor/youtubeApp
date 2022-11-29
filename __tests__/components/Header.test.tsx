import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Header } from '@components/Header';

import { NavigationContainer } from '@react-navigation/native';

describe('<Header/>', () => {
  jest.useRealTimers();
  test('render all props', async () => {
    jest.mock('@react-navigation/native', () => {
      const originalModule = jest.requireActual('@react-navigation/native');

      return {
        __esModule: true,
        ...originalModule,
        useFocusEffect: jest.fn(),
        useRoute: () => ({
          params: {
          },
        }),
        useIsFocused: jest.fn(),
        createAppContainer: jest.fn(),
        useNavigation: () => ({
          popToTop: jest.fn(),
          navigate: jest.fn(),
          dispatch: jest.fn(),
          addListener: jest.fn(),
          goBack: jest.fn(),
        }),
      };
    });
    const component = (
      <NavigationContainer>
        <Header
          title="My Videos"
          sourceImage="hello.jpg"
        />
      </NavigationContainer>
    );

    render(component);
    const text = await screen.findByText('My Videos');

    expect(text).toBeVisible();
  });
});
