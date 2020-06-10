import React from 'react-native'
import {View,StyleSheet} from 'react-native'
import params from '../params'

export default props => {
    const styleField = [styles.field]
    //outros estilos aqui!
    if(styleField.length === 1) styleField.push(styles.regular)

    return (
        <View style={styleField}>

        </View>
    )
}

const styles = StyleSheet.create({
    field:{
        height:params.blocksize,
        width:params.blocksize,   
        borderWidth:params.borderSize,    
    },
    regular:{
        backgroundColor:'#999',
        borderLeftColor:'#CCC',
        borderTopColor:'#CCC',
        borderRightColor:'#333',
        borderBottomColor:'#333',
    }
})
