import { Button, Text, View } from "react-native";

export function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>HomeScreen</Text>
            <Button
                title="Ir para detalhes"
                onPress={() => navigation.navigate("Details")}
            ></Button>

        </View>
    );
}