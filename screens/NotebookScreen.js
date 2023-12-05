import { StyleSheet, View } from "react-native";
import React, {useEffect, useState} from "react";
import NotebookList from "../components/notebook/NotebookList";
import {getAccountId} from "../helpers";
import {getAllNotebookFromAccount} from "../service/NotebookService";


function NotebookScreen() {
  const [notebookList,setNotebookList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const accountId = await getAccountId();
      const result = await getAllNotebookFromAccount(accountId);
      setNotebookList(result);
      console.log("Result get all notebook: ",result);
    };
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <NotebookList notebookList={notebookList}/>
    </View>
  );
}

export default NotebookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
