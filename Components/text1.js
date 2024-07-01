import { StyleSheet, Text, View } from 'react-native';

const TextCustom = () => {
    return (
        <View style = {{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'flex-start',
            alignItems: 'center',
        }}>
            <Text style = {{
                fontSize: 30,
                fontWeight: 'bold',
                marginTop: 50,
            }}>
                KopiLatimojong</Text>
        </View>
    )
}
export default TextCustom