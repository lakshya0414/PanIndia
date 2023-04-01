import { View, Text, Button } from 'react-native'
import React from 'react'
import ScanCard from '../components/ScanCard'

export default function Scan() {
  return (
    <View>
      <ScanCard/>
      <ScanCard/>
      <ScanCard/>
      <ScanCard/>
      <ScanCard/>
      <ScanCard/>
      <Button title='click'/>
    </View>
  )
}