import { StyleSheet, View, Text } from 'react-native';
import Title from "../ui/Title";
import Heart from "../ui/Heart";
function NotebookWord(itemData) {
    return (
        <View style={styles.wordCard}>
            <Title oStyle={{fontSize: 25}}>{itemData.item.word}</Title>
            <View style={styles.textCard}>
                <Text>{itemData.item.def}</Text>
                <Heart />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    wordCard: {
        flexDirection:"column",
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#BBB',
        paddingBottom: 20,
    },
    textCard: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    hearIcon : {
        fontSize:17,
    }
})
export default NotebookWord;