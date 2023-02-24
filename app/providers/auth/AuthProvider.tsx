import * as SplashScreen from 'expo-splash-screen'
import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState
} from 'react'

import { IUser } from '@/shared/types/user.interface'

import { IContext, TypeUserState } from './auth-provider.interface'

export const AuthContext = createContext({} as IContext)

SplashScreen.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null)

	useEffect(() => {
		let mounted = true
		checkAccessToken()
		return () => {
			mounted: false
		}
	}, [])

	const checkAccessToken = async () => {
		try {
		} catch {
		} finally {
			await SplashScreen.hideAsync()
		}
	}
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
