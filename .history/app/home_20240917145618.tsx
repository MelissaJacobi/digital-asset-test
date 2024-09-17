import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View>
        <Text>This is my "home" page </Text>;
        <Link href="/cheese">CHEESE</Link>
    </View>
  )
}