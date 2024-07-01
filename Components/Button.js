import { StyleSheet, Text, View, Button } from 'react-native';

const ButtonCustom = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "white",
            justifyContent: 'center',
            alignItems: 'flex-end',
            flexDirection: 'row',
            marginBottom: 100,
          }}>
            <View style={{
              backgroundColor: 'blue',
              width: 150,
              height: 80,
              borderRadius: 10,
              marginRight: 10,
            }}>
              <Text style={{
                color: 'white',
                textAlign: 'center',
                lineHeight: 80,
                fontSize: 30,
                fontWeight: 'bold',
              }}>
                Login
              </Text>
            </View>
            <View style={{
              backgroundColor: 'grey',
              width: 150,
              height: 80,
              borderRadius: 10,
              marginRight: 10,
            }}>
              <Text style={{
                color: 'white',
                textAlign: 'center',
                lineHeight: 80,
                fontSize: 30,
                fontWeight: 'bold',
              }}>
                Register
              </Text>
            </View>
          </View>
    )
}
export default ButtonCustom