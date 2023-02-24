import { Text, View } from 'react-native'

import { StatusBar } from 'expo-status-bar'

import { Button } from '@acme/button'

import styles from './styles.css'

export default function App() {
  return (
    <View style={styles.container}>
      <Text className={styles.blue}>Acme Corp</Text>
      <StatusBar style="auto" />
    </View>
  )
}
