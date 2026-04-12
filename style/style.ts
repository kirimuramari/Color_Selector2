 import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor:"#f4efef",
    },
    container: {
 
        justifyContent:"center",
        alignItems:"center",
        flexDirection: 'column',
        width:"100%",
    },
    card: {
              justifyContent:"center",

        backgroundColor:"#fff",
        borderRadius: 20,
        width:"50%",
        padding: 12,
        marginBottom:5,
        elevation: 5,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 24,
        marginTop: 24,
    },
    section: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection: 'column',
        width:"100%",
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        textAlign:"center",
        marginBottom: 12,
    },
    swichRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
        marginBottom: 12,
    },
    button: {
        width: 100,
        paddingVertical: 14,
        borderRadius: 12,
        textAlign: "center",
        color: "#fff",
        fontWeight:"bold",
        fontSize: 20,
    },
    buttonText: {
        textAlign: "center",
        color: "#fff",
        fontWeight:"bold",
        fontSize: 16,
    },
    result:{
        fontSize:18
    },
    error:{
        color: "red",
        fontSize: 18,
    },
    pickerviw:{
flexDirection: 'column',
flex:1,
justifyContent:"center",
alignItems:"center",
    },
    picker:{
        width:200,
        marginTop:10,
    },
 });