const Header = () => {
	return (
		<header className='border-t-4 border-indigo-400'>
			<div className='py-6 container border-b border-gray-100'>
				<div className='flex justify-between items-center'>
					<h3 className='text-xl font-semibold'>Daily Blog</h3>
					<button className='bg-indigo-700 text-indigo-50 px-10 py-4 rounded-full uppercase hover:bg-indigo-500'>
						login
					</button>
				</div>
			</div>
		</header>
	);
};
export default Header;
