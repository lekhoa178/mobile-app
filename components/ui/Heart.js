import {Pressable} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {useState} from "react";
import {updateNotebook} from "../../service/ApiService";
import {getAccountId} from "../../helpers";
import {addNotebook, removeNotebook} from "../../context/actions/NotebookAction";

function Heart({fav, notebook, dispatch}) {

    const [favorite, setFavourite] = useState(fav);
    async function favor() {
        setFavourite(!favorite);
        if (favorite)
            dispatch(removeNotebook(notebook.lexicon.word, await getAccountId()));
        else
            dispatch(addNotebook(notebook, await getAccountId()));
        await updateNotebook(notebook.lexicon.word, favorite, await getAccountId());
    }

    return  <Pressable onPress={favor}>
        {favorite ? (
            <FontAwesome name='heart' size={35} color={'#7599FF'} />
        ) : (
            <FontAwesome name='heart-o' size={35} color={'#7599FF'} />
        )}
    </Pressable>
}
export default Heart;