import axios from 'axios'
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

//create instance of axios for header to make requests easier and cleaner to write
const github = axios.create({
	baseURL: GITHUB_URL,
	headers: { Authorization: `token ${GITHUB_TOKEN}` },
})

// Get search results
export const searchUsers = async text => {
	const params = new URLSearchParams({
		q: text,
	})
	//make get request to github api search users
	const response = await github.get(`/search/users?${params}`)
	//save all users that we get in response of the request
	const searchRes = response.data.items
	return searchRes
}

// Get user and repos
export const getUserAndRepos = async login => {
	//get user and the repos of that user by sending array of requests to Promise.all
	const [user, repos] = await Promise.all([
		github.get(`/users/${login}`),
		github.get(`/users/${login}/repos`),
	])
	//return object that contains data about user and his/hers repos
	return { user: user.data, repos: repos.data }
}
