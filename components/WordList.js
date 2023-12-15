import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import Title from "./ui/Title";
import WordCard from "./WordCard";
import { useSelector, useDispatch } from "react-redux";
import { searchByWord } from "../service/DictionaryService";
import { useEffect, useState } from "react";
import { searchWord } from "../service/ApiService";
import {getAllResearchFromAccount} from "../service/ResearchService";
import {getAccountId} from "../helpers";

function WordList({search}) {
  const dispatch = useDispatch();
  const [resultState, setResultState] = useState([]);
  useEffect(
    () => {
            const fetchData = async () => {

            if (search.length === 0) {
                const result = await getAllResearchFromAccount(await getAccountId());
                setResultState(result);
                return;
            }

            const result = await searchByWord(search);
                console.log(result);
            setResultState(result);
        };

      fetchData();
    }, [search]);
  return (
    <FlatList
      style={styles.container}
      data={resultState}
      keyExtractor={(item, index) => index.toString()}
      renderItem={itemData => WordCard(itemData, dispatch, search)}
    />
  );
}

export default WordList;

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },

  innerCard: {
    flex: 1
  }
});
