import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/dashboard';
import Tasks from '../screens/tasks';
import { DASHBOARD, TASKS } from '../utils/routes';
import { Notification, TaskSquare } from 'iconsax-react-native';
import { ThemeColors } from '../theme/color';


const Stack = createNativeStackNavigator();

function App() {
    return (
        <Stack.Navigator
            screenOptions={({ route, navigation }) => ({
                headerBackTitleStyle: {
                    fontSize: 22
                },
                headerShadowVisible: false,
                headerRight: () => {
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Pressable>
                            <Notification size="32" color={ThemeColors.black} />
                        </Pressable>
                        <Pressable style={{ marginLeft: 17 }}>
                            <TaskSquare size="30" color={ThemeColors.black} />
                        </Pressable>
                    </View>
                }
            })}
        >
            <Stack.Screen name={DASHBOARD} component={Dashboard} />
            <Stack.Screen name={TASKS} component={Tasks} />
        </Stack.Navigator>
    )
}

export default App;

