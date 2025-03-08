import { createStackNavigator } from '@react-navigation/stack'
const { Screen, Navigator } = createStackNavigator()

import HomeScreen from '../screens/HomeScreen'
import SkillScreen from '../screens/SkillScreen'


export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name='home'
                component={HomeScreen}
                options={{
                    title: 'Main Menu',
                    headerTintColor: 'blue',
                }}
            />

            <Screen
                name='skill'
                component={SkillScreen}
                options={{
                    title: 'Skills Menu',
                    headerTintColor: 'blue',
                }}
            />
        </Navigator>
    )
}