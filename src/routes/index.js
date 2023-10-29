import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import Register from '../pages/Register';
import Signin from '../pages/Signin';
import Rgm from '../pages/Rgm';
import Senha from '../pages/Senha';
import Dashboard from '../pages/Dashboard';
import Amigos from '../pages/Amigos';
import MenuAmigos from '../pages/MenuAmigos';
import Mapa from '../pages/Mapa';

const Stack = createNativeStackNavigator(); 

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome"
                component={Welcome}
                options={{headerShown:false}} 
                > 
            </Stack.Screen>

            <Stack.Screen name="Register"
                component={Register}
                options={{headerShown:false}} 
                > 
            </Stack.Screen>

            <Stack.Screen name="Signin"
                component={Signin} 
                options={{headerShown:false}} 
                >
            </Stack.Screen>

            <Stack.Screen name="Rgm"
                component={Rgm}
                options={{headerShown:false}} 
                > 
            </Stack.Screen>

            <Stack.Screen name="Senha"
                component={Senha}
                options={{headerShown:false}} 
                > 
            </Stack.Screen>

            <Stack.Screen name="Dashboard"
                component={Dashboard}
                options={{headerShown:false}} 
                > 
            </Stack.Screen>

            <Stack.Screen name="Amigos"
                component={Amigos}
                options={{headerShown:false}} 
                > 
            </Stack.Screen>

            <Stack.Screen name="Mapa"
                component={Mapa}
                options={{headerShown:false}}
                >
            </Stack.Screen>

            <Stack.Screen name="MenuAmigos"
                component={MenuAmigos}
                options={{headerShown:false}} 
                > 
            </Stack.Screen>

        </Stack.Navigator>
    )
}