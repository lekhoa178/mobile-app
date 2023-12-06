import {Pressable} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {useState} from "react";
import {updateNotebook} from "../../service/ApiService";
import {getAccountId} from "../../helpers";

function Heart({fav, word}) {

    const [favorite, setFavourite] = useState(fav);
    async function favor() {
        setFavourite(!favorite);
        await updateNotebook(word, favorite, await getAccountId());
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