import { ActivityIndicator, Text, View } from "react-native";
import style from "./style";
import { useEffect, useState } from "react";
import FetchAuthorUseCase from "../../../domain/usecase/FetchAuthorUseCase";
import DataList from "../../component/datalist/DataList";
import { getDBConnection } from "../../../data/database/SQLiteDatabase";

const Home = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try{
                await FetchAuthorUseCase.execute();
                const db = await getDBConnection();
                const results = await db.executeSql('SELECT * FROM Authors');
                const authors = results[0].rows.raw();
                setData(authors);
            } catch(error) {
                console.error("Error while fetching data: " + error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    },[]);

    if(loading) {
        return(
            <View style={style.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff"/>
                <Text style={style.loadingText}>Loading data, please wait...</Text>
            </View>
        );
    }

    return <DataList data={data}/>
}

export default Home;