import spinner from './assets/spinner.gif'

function Spinner() {
	return (
		<div className='mt-20 w-100'>
			<img
				width={180}
				className='text-center mx-auto'
				src={spinner}
				alt='Loading...'
			/>
		</div>
	)
}

export default Spinner
