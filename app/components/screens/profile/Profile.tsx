import { AntDesign } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { useAuth } from '@/hooks/useAuth'

import { AuthService } from '@/services/auth/auth.service'

const Profile: FC = () => {
	const { setUser } = useAuth()
	return (
		<View className='mt-20 px-10'>
			<Pressable
				className='opacity-40 items-center flex-row justify-end'
				onPress={() => AuthService.logout().then(() => setUser(null))}
			>
				<AntDesign name='logout' size={18} color='white' />
				<Text className='text-white text-lg ml-2'>Logout</Text>
			</Pressable>
		</View>
	)
}

export default Profile
