import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';

export default function App() {
	const stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<TailwindProvider>
				<stack.Navigator></stack.Navigator>
			</TailwindProvider>
		</NavigationContainer>
	);
}
