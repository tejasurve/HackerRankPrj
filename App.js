import React, { Component } from 'react';  
 import { Platform, StyleSheet, View, Text,  
 Image, TouchableOpacity, Alert,FlatList } from 'react-native';  
 import Details from './Details';
 
 export default class Myapp extends Component<{}>  
{  
   constructor(props){  
     super(props);
     this.state = {
      data: [],
      isLoading: true
    };  
     this.state={  
     isVisible : true,  
    }  
  }  
   Hide_Splash_Screen=()=>{  
    this.setState({   
      isVisible : false   
    });  
  }  
   
  

   async getMovies() {
    try {
      const response = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/stocks-descriptive59bdd75.json');
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }
  componentDidMount(){  
    var that = this;  
    setTimeout(function(){  
      that.Hide_Splash_Screen();  
    }, 5000);  
    this.getMovies();
   }  

    
    render()  
   
    {  
      const { data, isLoading } = this.state;
        let Splash_Screen = (  
             <View style={styles.SplashScreen_RootView}>  
                 <View style={styles.SplashScreen_ChildView}>  
                       <Image source={{uri:'https://qph.fs.quoracdn.net/main-qimg-169cd761a7a847b234f2212dcde63ed5'}}  
                    style={{width:'100%', height: '100%', resizeMode: 'contain'}} />  
                </View>  
             </View> )  
         return(  
           
             <View style = { styles.MainContainer }> 
             <FlatList
             style = { styles.Flist }
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.item} onPress ={() => alert("Security Code: " + item['Security Name'] + "\n" +
              "Issuer Name :"+ item['Issuer Name'] +"\n"+
"Security Id: " + item['Security Id'] + "\n" +
              "Security Name :"+ item['Security Name'] +"\n"+
"SStatus: " + item['Status'] + "\n" +
              "Group :"+ item['Group'] +"\n"+
"Face Value: " + item['Face Value'] + "\n" +
              "ISIN No :"+ item['ISIN No'] +"\n"+
"Industry: " + item['Industry'] + "\n" +
              "Instrument :"+ item['Instrument'] +"\n"
)} >
                <Text>Security Name : {item['Security Name']}</Text>
                <Text>Security Id : {item['Security Id']}</Text>
              </TouchableOpacity>
            )}
          /> 
             
                  {  
                  (this.state.isVisible === true) ? Splash_Screen : null  
                } 
                
            </View>  
              );  
    }  
}  
 const styles = StyleSheet.create(  
{  
    MainContainer:  
    {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  ,
        
    },  
   
    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:1,  
        margin: 10,  
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
      },  
   
    SplashScreen_ChildView:  
    {  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: '#00BCD4',  
        flex:1,  
    },  
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    Flist: {
      marginTop : 20
    }
});  