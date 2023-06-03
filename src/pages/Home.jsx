import React from 'react'
//components
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

function Home() {
	return (
		<article>
			<UserSearch />
			<UserResults />
		</article>
	)
}

export default Home
