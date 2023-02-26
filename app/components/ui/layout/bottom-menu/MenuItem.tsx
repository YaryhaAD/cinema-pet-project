import { Feather } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { getColor } from '@/config/colors.config'

import { IMenuItem, TypeNavigate } from './menu.interface'
import { TypeRootStackParamList } from '@/navigation/navigation.types'

interface IMenuItemProps {
	item: IMenuItem
	nav: TypeNavigate
	currentRoute?: string
}

const MenuItem: FC<IMenuItemProps> = ({ currentRoute, item, nav }) => {
	const isActive = currentRoute === item.path

	return (
		<Pressable className='items-center w-[20%]' onPress={() => nav(item.path)}>
			<Feather
				name={item.iconName}
				size={26}
				color={isActive ? getColor('primary') : getColor('gray.400')}
			/>
		</Pressable>
	)
}

export default MenuItem
