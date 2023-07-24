import {StyleSheet, View, FlatList, Pressable} from 'react-native';


import {useEffect, useState} from "react";
import axios from "axios";
import {Text} from "../../components/Themed";
import {useRouter} from "expo-router";



export default function TabOneScreen() {
  const [posts, setPosts] = useState([]);
  const router =useRouter()

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response ) => {
          setPosts(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
  }, []);
  const handlePressItem =(item)=>{
      router.push({
          pathname:"two",
          params:{id:item.id}
      })

  }
  const RenderItemComp =({item})=>{
    return(
        <Pressable onPress={handlePressItem(item)}>
            <View style={{backgroundColor:"white"}}>
                <View style={{flexDirection:"row"}}>
                    <Text style={{color:"black"}}>
                        {item.id}
                    </Text>
                    <Text style={{color:"black"}}>-</Text>
                    <Text style={{color:"black"}}>
                        {item.title}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
  }

  return (

    <View style={styles.container}>

      <FlatList
          data={posts}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <RenderItemComp item={item}/>}
      />

       {/*   {posts.map(post => (
              <Text key={post.id}>
                {
                  post.title
                }

              </Text>
          ))}*/}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*alignItems: 'center',
    justifyContent: 'center',*/
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
