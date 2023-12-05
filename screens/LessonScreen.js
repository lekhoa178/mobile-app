import {FlatList, StyleSheet, Text, View} from "react-native";
import Title from "../components/ui/Title";
import StageCard from "../components/lesson/StageCard";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getStageModels} from "../service/LessonService";

function LessonScreen() {
    const [stages, setStages] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const result = await getStageModels(19);
            setStages(result);
        };

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList data={stages}
                      keyExtractor={(item, index) => item.stageId}
                      renderItem={itemData => StageCard(itemData, dispatch)}/>
        </View>);
}

export default LessonScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20
    },
})