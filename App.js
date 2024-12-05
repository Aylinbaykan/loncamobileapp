import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './src/screens/ProductList/ProductListScreen';
import ProductDetails from './src/screens/ProductDetail/ProductDetailScreen';
import Header from './src/components/Header/Header';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ProductList">
        <Stack.Screen name="ProductList" component={ProductList} options={({ navigation }) => ({
          header: () => (
            <Header
            

            />
          ),
        })} />
        <Stack.Screen name="ProductDetail" component={ProductDetails} options={({ navigation }) => ({
          header: () => (
            <Header
              onBackPress={()=> {navigation.goBack();}}

            />
          ),
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 
