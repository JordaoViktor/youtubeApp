import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { Card } from '@components/Card';

import JordaoVictor from '@assets/images/JordaoVictor.jpg';

describe('<Card/>', () => {
  jest.useRealTimers();

  test('render all props', async () => {
    const onPress = jest.fn();
    const onChannelImagePress = jest.fn();
    const component = (
      <Card
        channelName="Jordao Channel"
        visualizationCount="120"
        timeAgo="10 minutes later"
        videoTitle="How to rock with React Native"
        active={false}
        onPress={onPress}
        onChannelImagePress={onChannelImagePress}
        thumbnail={JordaoVictor}
        channelImage={JordaoVictor}
      />
    );

    render(component);
    const card = screen.getByTestId('CardTestID');

    expect(card).toBeVisible();
    const title = screen.getByTestId('Card-Text-Title');

    fireEvent.press(card);
    expect(title).toHaveTextContent('How to rock with React Native');
  });
});
