import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'

import { AdminNavigation, Button, Layout, Loader } from '@/components/ui'

import { IGenreEditInput } from '@/shared/types/genre.interface'
import { IUserEditInput } from '@/shared/types/user.interface'

import { useGenreEdit } from './useGenreEdit'

const GenreEdit: FC = () => {
	const { control, setValue, handleSubmit } = useForm<IGenreEditInput>({
		mode: 'onChange'
	})

	const { isLoading, onSubmit } = useGenreEdit(setValue)
	return (
		<Layout isHasPadding>
			<AdminNavigation title='Edit user' isBackButton />
			<View>
				{isLoading ? (
					<Loader />
				) : (
					<>
						<Button onPress={handleSubmit(onSubmit)} icon='pen-tool'>
							Update
						</Button>
					</>
				)}
			</View>
		</Layout>
	)
}

export default GenreEdit
