import {Pressable} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {useState} from "react";

function Heart({fav, callback}) {

    const [favorite, setFavourite] = useState({fav});
    function favor() {
        setFavourite(!favorite);
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