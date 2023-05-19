import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import {} from '@expo-google-fonts/roboto'

import{
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import{
  BaiJamjuree_700Bold,
} from '@expo-google-fonts/bai-jamjuree'

import blurBg from '.src/assets/bg-blur.png'
import Stripes from './src/assets.stripes.svg'
import {styled} from 'nativewind'

const StyledStripes = styled(Stripes)

export default function App() {

  const [hasLoadedFonts]= useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts){
    return null
  }

  return (
    <ImageBackground 
      source={blurBg} 
      className="relative bg-gray-900 flex-1 items-center "
      imageStyle={{position: 'absolute', left: '-100%'}}
    > 
      <StyledStripes className="absolute left-2"></StyledStripes>

      <View className="flex-1 items-center justify-center gap-6"></View>

      <StatusBar style="light" translucent/>
    </ImageBackground>
  )
}


//CSS IN JS