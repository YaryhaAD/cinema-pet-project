import { FC } from 'react'
import { Text, View } from 'react-native'

import { AdminNavigation, Layout } from '@/components/ui'

const UserList: FC = () => {
	return (
		<Layout isHasPadding>
			<AdminNavigation title='UserList' />
		</Layout>
	)
}

export default UserList
