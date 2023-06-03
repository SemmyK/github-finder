import React, { useContext } from 'react'
//context
import GithubContext from '../../context/github/GithubContext'
//assets
import Spinner from '../layout/Spinner'
//component
import UserItem from './UserItem'

function UserResults() {
	const { users, loading } = useContext(GithubContext)

	return !loading ? (
		<section className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
			{users.map(user => (
				<UserItem key={user.id} user={user} />
			))}
		</section>
	) : (
		<Spinner />
	)
}

export default UserResults
