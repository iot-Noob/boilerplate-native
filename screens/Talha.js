import React from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
const Talha = () => {

    const name=useSelector(state=>state.name)

    return (
        <View>
            <Text>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Talha;
