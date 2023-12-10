import { StyleSheet, View } from "react-native";
import React, {useEffect, useState} from "react";
import NotebookList from "../components/notebook/NotebookList";
import {getAccountId} from "../helpers";
import {getAllNotebookFromAccount} from "../service/NotebookService";
import {useDispatch, useSelector} from "react-redux";
import {setNotebooks} from "../context/actions/NotebookAction";


function NotebookScreen() {
  const dispatch = useDispatch();

  const notebooks = useSelector(state => state.notebook.notebooks);
  useEffect(() => {
    const fetchData = async () => {
      const accountId = await getAccountId();
      const result = await getAllNotebookFromAccount(accountId);
      dispatch(setNotebooks(result));
    };
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <NotebookList notebookList={notebooks}/>
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
