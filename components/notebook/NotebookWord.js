import {StyleSheet, View, Text, Pressable} from 'react-native';
import Title from "../ui/Title";
import Heart from "../ui/Heart";
import {Notebook} from "../../models/Notebook";
import {getAccountId} from "../../helpers";
import {setWordDetail, setWords} from "../../context/actions/SearchAction";
import {navigate} from "../../RootNavigation";
function NotebookWord(itemData, dispatch) {

    function setWordDetails(text) {
        console.log(text);
        dispatch(setWordDetail(text));
        dispatch(setWords(text));
        navigate("Definition");
    }

    return (
        <Pressable onPress={() => setWordDetails(itemData.item.lexicon.word)}>
            <View style={styles.container}>
                <View style={styles.wordCard}>
                    <Title oStyle={{fontSize: 25}}>{itemData.item.lexicon.word.replaceAll('_', ' ')}</Title>
                    <Text>{itemData.item.lexicon.definition}</Text>
                </View>
                <Heart fav={true} notebook={new Notebook(getAccountId(), itemData.item.lexicon)} dispatch={dispatch}/>
            </View>
        </Pressable>
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