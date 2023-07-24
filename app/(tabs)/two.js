import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import axios from "axios";
import {useEffect, useState} from "react";
import {useSearchParams} from "expo-router";

export default function TabTwoScreen() {
  const params = useSearchParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if(params.id !== undefined && !isNaN(params.id)){
      axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
          .then(response => {
            setPost(response.data);
          })
          .catch(error => {
            console.error('Error fetching post:', error);
          });

    }
  }, params.id);

  console.log(params.id)
  console.log(post)
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:"white"}}>
        <Text style={{color:"black"}}>
          {
            1
          }
        </Text>
          <Text style={{color:"black"}}>
              {
                  post.id
              }
          </Text>
          <Text style={{color:"black"}}>
              {
                  post.title
              }
          </Text>
          <Text style={{color:"black"}}>
              {
                  post.body
              }
          </Text>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
