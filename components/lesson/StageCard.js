
import {FlatList, StyleSheet, Text, View} from "react-native";
import Title from "../ui/Title";
import LevelCard from "./LevelCard";

const stageColors = [
    "#58cc02",
    "#ce82ff",
    "#00cd9c",
    "#1cb0f6",
    "#ff86d0",
    "#ff9600",
    "#cc348d"
];

function StageCard(stageId, dispatch) {
    return (
        <View style={styles.stageContainer}>
            <View style={[styles.stageCard, {backgroundColor: stageColors[stageId.index % stageColors.length]}]}>
                <Title oStyle={{fontSize: 20}}>{stageId.item.title}</Title>
                <Text>{stageId.item.depiction}</Text>
            </View>
            <FlatList style={styles.levelContainer}
                      data={stageId.item.levels}
                      renderItem={itemData => LevelCard(itemData, stageId.item.stageId, dispatch)}
                      keyExtractor={e => e.levelId}/>
        </View>);
}

export default StageCard;

const styles = StyleSheet.create({
    stageContainer: {
        flex: 1,
        padding: 20,
    },

    stageCard: {
        flex: 1,
        marginBottom: 10,
        height: 'auto',
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#7599FF'
    },

    levelContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        marginHorizontal: 20,
        justifyContent: 'space-around'
    }
})