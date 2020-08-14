import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component{
    static navigationOptions = {
        title: 'Contact US'
    }
    render(){
        return(
            <ScrollView>
                <Card
                    title ={'Contact Information'}
                    wrapperStyle={{margin: 10}}>
                        <Text>1. Nucamp Way</Text>
                        <Text>Seattle, WA 98001</Text>
                        <Text>USA</Text>
                        <Text></Text>
                        <Text>Phone: 1-507-399-6068</Text>
                        <Text>Email: pandepadam@gmail.com</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;