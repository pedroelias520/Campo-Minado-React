import {Dimensions} from 'react-native'

const params = {
    blocksize:30,
    borderSize:5,
    fontSize:15,
    headerRatio:0.15,  //Proporção  do painel superior na tela 
    difficultLevel: 0.1,
    getColumnsAmount(){
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blocksize)
    },
    getRowAmount(){
        const totalHeight = Dimensions.get('window').height
        const boardHeight = totalHeight * (1-this.headerRatio)
        return Math.floor(boardHeight/this.blocksize)
    }
}

export default params  