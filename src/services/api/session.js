import { Alert } from "react-native";
import axios from "axios"
import { BASE_URL } from "../config.services";



export const createSession = async () => {
    try {
        const apicall = await axios.get(`${BASE_URL}/create-session`);
        return apicall?.data?.sessionId;

    } catch (error) {
        Alert.alert("createSession Error in api/session.js")
        return null;
    }
}
export const checkSession = async (id) => {
    try {
        const apicall = await axios.get(`${BASE_URL}/is-alive?sessionId=${id}`);
        return apicall?.data?.isAlive;
    } catch (error) {
        Alert.alert("check Session Error in api/session.js")
        return false;
    }
}

