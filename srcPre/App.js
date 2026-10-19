import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Navigation from "./navigation/Navigation.js"



function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  )
}
export default App;