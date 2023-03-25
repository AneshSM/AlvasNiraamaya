import { clr10, clr30, clr60 } from "../Colour/color"
export const SigninScreen_Style = {
    head: {
        height: 350,
        width: 510,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: clr30,
    },
    logo: {
        marginLeft: 10,
        height:180,
        width: 180,
        borderRadius:100,
        backgroundColor:clr60,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        height:130,
        marginTop:-20,
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: 300,
        marginRight: 10,
        height: 199,
    },
    text: {
        fontSize: 60,
        color: clr10,
        fontWeight: 'bold',
        textShadowColor: clr60,
        textShadowColor: 'rgba(255, 255, 255, 0.75)',
        textShadowOffset: { width: 3, height: 6 },
        textShadowRadius: 10,
    },
    titleText1: {
        width: 160,
    },
    titleText2: {
        width: 291,
    }
}
