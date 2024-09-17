import { View, Text } from 'react-native';
import { Link } from 'expo-router'

export default function Index() {
  return (

    <View>
      <Text>This is my Index page</Text>;
      <Link href="/home">GO HOME</Link>
    </View>
    
  )
}
