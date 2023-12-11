import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,DatePickerAndroid,Button,Alert
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import {useState,useEffect} from "react";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { getAccountId } from "../helpers";
import {getAccountByAccountId, updateAccount} from "../service/AccountService";

function ProfileScreen({ navigation, route }) {
    const [user,setUser] = useState({
        accountId:0,
        name:"",
        username:"",
        birthdate: "",
        gender:0,
        email:"",
    });
    const [accountId,setAccountId] = useState("a");
    const [account,setAccount] = useState(null);
    const [edit,setEdit] = useState(false);
    useEffect(()=> {
        const fetchData = async () => {
            const IdAccount = await getAccountId();
            setAccountId(IdAccount);
            const accountCurrent = await getAccountByAccountId(IdAccount);
            console.log("Account current: ", accountCurrent);
            setAccount(accountCurrent);
            setUser(prevState => ({
                ...prevState,
                accountId:IdAccount,
                name:accountCurrent.name,
                username: accountCurrent.username,
                email:accountCurrent.email,
                birthdate: accountCurrent.birthdate,
                gender: accountCurrent.gender

            }))
        };
        fetchData();
    }, [])
    const handleGenderChange = (value) => {
    setUser(prevState => ({
                ...prevState,
                gender: value
            }));

    };
    async function submitChange(){
        try {
            console.log("User: ",user);
            await updateAccount(user);
             Alert.alert(
          "Thông báo",
          "Cập nhật thông tin tài khoản thành công",
          [{ text: "OK", onPress: () => console.log("") }],
          { cancelable: false }
        );
        }
        catch(e){
             Alert.alert(
          "Thông báo",
          "Cập nhật thất bại",
          [{ text: "OK", onPress: () => console.log("") }],
          { cancelable: false }
        );
        }
    }

    if(!account){return (<></>)}
    if (edit) {return(
        <View style={styles.general} behavior="padding" enabled>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.logout}>
                        <FontAwesome5 name="door-open" size={20} color="#7599ff" onPress={()=> { route.params.setLoggedIn(false)}}/>
                    </View>
                    <View style={styles.edit}>
                        <FontAwesome name="edit" size={25} color="#7599ff" onPress={()=> setEdit(!edit)} />
                    </View>
                    <View style ={styles.headerProfile}>
                        <Text style={styles.textHeader}>{account.name[0].toUpperCase()}</Text>
                    </View>
                    <View style={styles.LineHeader}>
                        <TextInput value={user.name} onChangeText={text => setUser(prevState => ({
                            ...prevState,
                            name: text
                        }))}/>
                    </View>
                    <View style={styles.Line}>
                        <Entypo name="mail" size={24} color="#7599ff" />
                        <TextInput style={styles.textInfoLine} value={user.email} onChangeText={text => setUser(prevState => ({
                            ...prevState,
                            email: text
                        }))}/>
                    </View>
                    <View style={styles.Line}>
                        <FontAwesome name="birthday-cake" size={24} color="#7599ff" />
                        <Text style={styles.textInfoLine}> {account.birthdate !== null ? account.birthdate.slice(0,account.birthdate.indexOf('T')) : "Chưa nhập ngày sinh"}</Text>
                    </View>
                    <View style={styles.Line}>
                        <Ionicons name="transgender-sharp" size={24} color="#7599ff" />
                        {/* <Text style={styles.textInfoLine}>{account.gender == 1 ? "Trai" : "Gái"}</Text> */}
                        <View style={styles.selectGender}>
                            <Button
                                title="Female"
                                onPress={() => handleGenderChange(false)}
                                color={user.gender === false ? '#7599ff' : 'gray'}
                            />
                            <Button
                                title="male"
                                onPress={() => handleGenderChange(true)}
                                color={user.gender === true ? '#7599ff' : 'gray'}
                            />

                        </View>
                    </View>
                    <View style={styles.Line}>
                        <FontAwesome name="user" size={24} color="#7599ff" />
                        <Text style={styles.textInfoLine}>{account.username}</Text>
                    </View>
                    <View style={styles.Line}>
                        <FontAwesome5 name="shield-alt" size={24} color="#7599ff" />
                        <Text style={styles.textInfoLine}>{account.authorities[0].authority}</Text>
                    </View>
                    <View style={styles.LineSave}>
                        <Text style={styles.textLine}> Xác nhận đổi</Text>
                        <Ionicons name="save" size={24} color="#7599ff" onPress={submitChange}/>
                    </View>
                </View>
            </ScrollView>

        </View>
    )}
    return (
        <View style={styles.general}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.logout}>
                        <FontAwesome5 name="door-open" size={20} color="#7599ff" onPress={()=> { route.params.setLoggedIn(false)}}/>
                    </View>
                    <View style={styles.edit}>
                        <FontAwesome name="edit" size={25} color="#7599ff" onPress={()=> setEdit(!edit)} />
                    </View>
                    <View style ={styles.headerProfile}>
                        <Text style={styles.textHeader}>{account.name[0].toUpperCase()}</Text>
                    </View>
                    <View style={styles.LineHeader}>
                        <Text style={styles.textNameHeader}>{account.name}</Text>
                    </View>
                    <View style={styles.Line}>
                        <Entypo name="mail" size={24} color="#7599ff" />
                        <Text style={styles.textInfoLine}> {account.email}</Text>
                    </View>
                    <View style={styles.Line}>
                        <FontAwesome name="birthday-cake" size={24} color="#7599ff" />

                        <Text style={styles.textInfoLine}> {account.birthdate.slice(0,account.birthdate.indexOf('T'))}</Text>
                    </View>
                    <View style={styles.Line}>
                        <Ionicons name="transgender-sharp" size={24} color="#7599ff" />
                        <Text style={styles.textInfoLine}>{account.gender == 1 ? "Trai" : "Gái"}</Text>
                    </View>
                    <View style={styles.Line}>
                        <FontAwesome name="user" size={24} color="#7599ff" />
                        <Text style={styles.textInfoLine}>{account.username}</Text>
                    </View>
                    <View style={styles.Line}>
                        <FontAwesome5 name="shield-alt" size={24} color="#7599ff" />
                        <Text style={styles.textInfoLine}>{account.authorities[0].authority}</Text>
                    </View>
                </View>
            </ScrollView>

        </View>

    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    general: {
        flex:1,
        backgroundColor: "#fff",
    },
    container: {
        flex: 0.9,
        backgroundColor: "#fff",
        alignContent:"center",
        alignItems:"center",
        gap:10
    },
    headerProfile: {
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        width:110,
        height:110,
        borderRadius:110,
        backgroundColor:"#ad5050",
        alignContent:"center"
    },
    textHeader: {
        fontSize:50,
        color:"#ffffff",
        fontWeight:"bold"
    },
    Line: {
        flex:1,
        flexDirection:"row",
        marginTop:10,
        justifyContent:"flex-start",
        width:Dimensions.get("window").width * 0.8,
        borderBottomWidth:0.5,
        borderColor:"#eee"
    },
    selectGender: {
        flex:1,
        flexDirection:"row",
        marginLeft:15,
        gap:20,
        marginBottom:1
    },
    LineSave: {
        flex:1,
        flexDirection:"row",
        marginTop:10,
        justifyContent:"space-between",
        width:Dimensions.get("window").width * 0.8,
        borderBottomWidth:0.5,
        borderColor:"#eee"
    },
    textLine: {
        fontSize:16,
        marginLeft:5,
        justifyContent:"space-between",
        color:"#666",
    },
    textInfoLine: {
        fontSize:16,
        marginLeft:15,
        color:"#666",
    },
    textNameHeader: {
        marginTop:10,
        fontSize:23,
        fontWeight:"bold",
        paddingBottom:10


    },
    LineHeader: {
        width:Dimensions.get("window").width * 0.9,
        borderBottomWidth:1,
        borderColor:"#ccc",
        justifyContent:"center",
        alignItems:"center"
    },
    logout: {
        position:"absolute",
        top:0,
        right:20
    },
    edit: {
        position:"absolute",
        top:95,
        right:110
    }
});
