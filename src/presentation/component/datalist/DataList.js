import { FlatList, Text, View } from "react-native";
import style from "./style";

const DataList = ({data}) => {
    return (
        <View style={style.container}>
            <FlatList 
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <View style={style.item}>
                    <Text style={style.title}>{item.name}</Text>
                    <Text style={style.body}>{item.gender}</Text>
                </View>
            )}
            />
        </View>
    );
};

export default DataList;