import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
const Search = () => {
	return (
		<section>
			<div className='container'>
				<div className='prose py-16 mx-auto text-center'>
					<h1 className='mb-0'>Read, Learn, about exciting blogs.</h1>
					<p className='mt-0'>A general blog about various topics.</p>
					<form className='relative max-w-xl mx-auto mt-10'>
						<input
							type='text'
							name='search'
							id='search'
							placeholder='Search blogs...'
							className='border border-gray-300 h-14 py-3 pl-4 pr-16 rounded-md w-full'
						/>
						<button
							type='submit'
							className='absolute h-full w-14 top-0 right-0 flex justify-center items-center'>
							<MagnifyingGlassIcon className='h-6 w-6 text-gray-400' />
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};
export default Search;
