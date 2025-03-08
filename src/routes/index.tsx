import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";

//CAIXA DE CONTEXTO
export function Routes() {
    return (

        /* NAVEGAÇÃO COM STACK */
         <NavigationContainer>
            <StackRoutes />
         </NavigationContainer>
    )

}