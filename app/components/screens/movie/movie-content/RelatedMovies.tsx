import { FC } from 'react'
import { ListRenderItemInfo, Text, View } from 'react-native'

import { HorizontalList, Loader, MovieItem } from '@/components/ui'

import { IMovie } from '@/shared/types/movie.interface'

import { useRelatedMovies } from './useRelatedMovies'

interface IRelatedMovies {
	genreIds: string[]
	currentMovieId: string
}

const RelatedMovies: FC<IRelatedMovies> = ({ currentMovieId, genreIds }) => {
	const { data, isLoading } = useRelatedMovies(genreIds, currentMovieId)

	const renderItem = ({ item: movie, index }: ListRenderItemInfo<IMovie>) => (
		<MovieItem
			index={index}
			movie={movie}
			key={movie._id}
			style={{
				width: 144,
				marginRight: 16
			}}
		/>
	)

	if (isLoading) return <Loader />
	if (!data?.length) return null

	return (
		<View className='my-8'>
			<Text className='text-white text-2xl font-semibold mb-5 scale'>
				Related movies
			</Text>
			<HorizontalList
				snapToInterval={160}
				data={data}
				renderItem={renderItem}
			/>
		</View>
	)
}

export default RelatedMovies
