import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,DatePickerAndroid,Button
} from "react-native";
import {useState,useEffect} from "react";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { getAccountId } from "../helpers";
import {getAccountByAccountId} from "../service/AccountService";

function ProfileScreen() {
    const [selectedDate, setSelectedDate] = useState("");
    const openDatePicker = async () => {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                // Set initial date
                date: new Date(),
                // Set minimum date (optional)
                minDate: new Date(2000, 0, 1),
                // Set maximum date (optional)
                maxDate: new Date(2025, 11, 31),
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // Selected date
                const selected = new Date(year, month, day);
                setSelectedDate(selected.toISOString().split('T')[0]);
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    };
    const [user,setUser] = useState({
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
            setAccount(accountCurrent);
            setUser(prevState => ({
                ...prevState,
                name:accountCurrent.name,
                username: accountCurrent.username,
                email:accountCurrent.email,
                birthdate: accountCurrent.birthdate,
                gender: accountCurrent.gender

            }))
        };
        fetchData();
    }, [])

    if(!account){return (<></>)}
    if (edit) {return(
        <View style={styles.general} behavior="padding" enabled>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.logout}>
                        <FontAwesome5 name="door-open" size={20} color="#7599ff" />
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
                        <Text style={styles.textInfoLine}> {account.birthdate.slice(0,account.birthdate.indexOf('T'))}</Text>
                    </View>
                    <View style={styles.Line}>
                        <Ionicons name="transgender-sharp" size={24} color="#7599ff" />
                        <Text style={styles.textInfoLine}>{account.gender == 1 ? "Troai" : "Géi"}</Text>
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
                        <Ionicons name="save" size={24} color="#7599ff" />
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
                        <FontAwesome5 name="door-open" size={20} color="#7599ff" />
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
