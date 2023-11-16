import {Pressable} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {useState} from "react";

function Heart() {

    const [favorite, setFavourite] = useState(false);
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