import { AntDesign } from '@expo/vector-icons'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Image, Pressable, Text, View } from 'react-native'
import Animated from 'react-native-reanimated'

import { Button, Heading, Layout, Loader } from '@/components/ui'

import { useAuth } from '@/hooks/useAuth'
import { useScaleOnMount } from '@/hooks/useScaleOnMount'

import { IAuthFormData } from '@/shared/types/auth.interface'

import { AuthService } from '@/services/auth/auth.service'

import AuthFields from '../auth/AuthFields'

import { useProfile } from './useProfile'

const Profile: FC = () => {
	const { setUser } = useAuth()

	const { handleSubmit, setValue, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const { isLoading, onSubmit } = useProfile(setValue)

	const { styleAnimation } = useScaleOnMount()
	return (
		<Layout isHasPadding>
			<Heading title='Profile' />
			<Animated.View
				style={styleAnimation}
				className='my-6 items-center justify-center'
			>
				<Image
					source={require('../../../assets/avatar-guest.jpg')}
					className='w-40 h-40 rounded-2xl'
				/>
			</Animated.View>
			{isLoading ? (
				<Loader />
			) : (
				<View className='mb-10'>
					<AuthFields control={control} />
					<Button onPress={handleSubmit(onSubmit)} icon='edit'>
						Update profile
					</Button>
				</View>
			)}
			<Pressable
				className='opacity-40 items-center flex-row justify-end'
				onPress={() => AuthService.logout().then(() => setUser(null))}
			>
				<AntDesign name='logout' size={18} color='white' />
				<Text className='text-white text-lg ml-2'>Logout</Text>
			</Pressable>
		</Layout>
	)
}

export default Profile
