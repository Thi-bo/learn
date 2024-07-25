import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Tabs} from 'expo-router';
import TabBar from '../components/TabBar';
const _layout = () => {
    return (
        //insere a TabBar Component in poops

        <Tabs
            tabBar={props=><TabBar {...props} />}
        >
        <Tabs.Screen
        name='index'
        options={{
            title: "Home"}
        }
        />
          <Tabs.Screen
        name='create'
        options={{
            title: "Create"}
        }
        />
          <Tabs.Screen
        name='profile'
        options={{
            title: "Profile"}
        }
        />
          <Tabs.Screen
        name='explore'
        options={{
            title: "Explore"}
        }
        />

        </Tabs>
    );
}

const styles = StyleSheet.create({})

export default _layout;
