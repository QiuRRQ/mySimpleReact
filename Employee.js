import React, { Component } from 'react';
import { TouchableOpacity, Text, View, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

class Employee extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            employee: [],
            error: null
        };
    }
    async componentDidMount(){
       await axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
          .then(res => {
            const data = res.data.data; //res.data artinya untuk ambil datanya kalau.data dibelakangnya untuk mengambil array datanya
            this.setState({ employee : data });
            console.log(this.state.employee);
          });
    }

    goToHome = () =>{
        Actions.employee()
    }
    
    render() {
        console.log(this.state.employee);
        return(
            <View>
                
                {/* <Text>
                    {this.state.error != null} ? {this.state.error} : no error 
                </Text> */}
    
                <FlatList data= {this.state.employee} renderItem = {
                    ({item}) => 
                    <View>
                        <Text>
                            {item.employee_name}
                        </Text>
                    </View>
                }>

                </FlatList>
                
            </View>
        );
    }
}

export default Employee