import {FlatList, StyleSheet, Text, View} from "react-native";
import Title from "../components/ui/Title";
import StageCard from "../components/lesson/StageCard";
import {useEffect, useState} from "react";
import {getStages} from "../service/ApiService";

// const stages = [
//     {
//         id: 1,
//         name: 'Động vật',
//         description: 'Hello',
//         levels: [
//             {id: 1, complete: true},
//             {id: 2, complete: true},
//             {id: 3, complete: false},
//             {id: 4, complete: false},
//             {id: 5, complete: false},
//         ]
//     },
//     {
//         id: 2,
//         name: 'Động vật',
//         description: 'Hello',
//         levels: [
//             {id: 1, complete: true},
//             {id: 2, complete: false},
//             {id: 3, complete: false},
//             {id: 4, complete: false},
//             {id: 5, complete: false},
//         ]
//     },
//     {
//         id: 3,
//         name: 'Động vật',
//         description: 'Hello',
//         levels: [
//             {id: 1, complete: true},
//             {id: 2, complete: false},
//             {id: 3, complete: false},
//             {id: 4, complete: false},
//             {id: 5, complete: false},
//         ]
//     }
// ]

function LessonScreen() {
    const [stages, setStages] = useState([]);

    const fetchData = async () => {
        const result = await getStages(19);
        setStages(result);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList data={stages}
                      keyExtractor={(item, index) => item.stageId}
                      renderItem={itemData => StageCard(itemData)}/>
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