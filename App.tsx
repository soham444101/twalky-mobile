import { SafeAreaProvider } from 'react-native-safe-area-context';
import Start from './src/start';

function App() {
  return (
    <SafeAreaProvider>
      <Start />
    </SafeAreaProvider>
  );
}

export default App;
