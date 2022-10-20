import config from '../tamagui.config'
import { NavigationProvider } from './navigation'
import { TamaguiProvider, TamaguiProviderProps } from '@my/ui'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from 'app/redux'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  return (
    <ReduxProvider store={store}>
      <TamaguiProvider config={config} disableInjectCSS defaultTheme="light" {...rest}>
        <NavigationProvider>{children}</NavigationProvider>
      </TamaguiProvider>
    </ReduxProvider>
  )
}
