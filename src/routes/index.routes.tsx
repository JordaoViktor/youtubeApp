import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity, Text, View} from 'react-native';
const {Screen, Navigator} = createNativeStackNavigator();
import {useNavigation} from '@react-navigation/native';
function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={{width: 300, height: 100, backgroundColor: 'purple'}}
        onPress={() => {
          navigation.navigate('DetailsScreen');
        }}>
        <Text>Navigation</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailsScreen() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
      }}>
      <Text>Details Screen</Text>
      <TouchableOpacity
        style={{width: 300, height: 100, background: 'purple'}}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text>Navigation</Text>
      </TouchableOpacity>
    </View>
  );
}
const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="DetailsScreen" component={DetailsScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export {Routes};
