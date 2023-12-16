import {FlatList, StyleSheet, Text, View} from "react-native";
import Title from "../components/ui/Title";
import StageCard from "../components/lesson/StageCard";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getStageModels} from "../service/LessonService";
import {getAccountId} from "../helpers";

function LessonScreen() {
    const [stages, setStages] = useState([]);
    const dispatch = useDispatch();
    const refresh = useSelector(state => state.lesson.refresh);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getStageModels(await getAccountId());
            setStages(result);
        };

        fetchData();
    }, [refresh]);

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