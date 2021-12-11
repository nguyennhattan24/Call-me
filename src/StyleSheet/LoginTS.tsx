import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    Img: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 100,
    },
    Title: {
        marginBottom: 60,
        fontSize: 25,
        fontWeight: 'bold'
    },
    TextIP: {
        borderBottomWidth: 1,
        borderBottomColor: '#00CC33',
        height: 45,
        width: 300,
        marginTop: 10,
        color: 'black',
    },
    Signin: {
        backgroundColor: '#00CC33',
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        borderRadius: 10,
    },
    txtLogin: {
        color: 'white',
        fontSize: 17,
    },
    txtSignUp: {
        color: 'black',
        fontWeight: 'bold',
        marginTop: 10,
    },
})
export default styles
