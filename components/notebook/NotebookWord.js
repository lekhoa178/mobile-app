import { StyleSheet, View, Text } from 'react-native';
import Title from "../ui/Title";
import Heart from "../ui/Heart";
function NotebookWord(itemData, dispatch) {
    return (
        <View style={styles.container}>
            <View style={styles.wordCard}>
                <Title oStyle={{fontSize: 25}}>{itemData.item.lexicon.word}</Title>
                <Text>{itemData.item.lexicon.definition}</Text>
            </View>
            <Heart fav={true} word={itemData.item.lexicon.word} dispatch={dispatch}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#BBB',
        paddingBottom: 20,
        justifyContent: 'center',
        paddingRight: 20
    },

    wordCard: {
        flexDirection:"column",
        flex: 1,
    },

    hearIcon : {
        fontSize:17,
    }
})
export default NotebookWord;