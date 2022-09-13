const BlogCard = () => {
	return (
		<article className='prose prose-p:text-xl prose-p:font-medium tracking-tighter'>
			<img
				src='https://images.unsplash.com/photo-1663046067831-89a0a154cfa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
				alt='Blog'
				className='aspect-square object-cover'
			/>
			<h2>What Traveling Greece For 2 Weeks Taught Me About Life</h2>
			<small className='uppercase tracking-wider font-medium'>
				Jun 21, 2021 • 11 min read
			</small>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis
				lectus vitae nulla malesuada amet purus sed. A condimentum tempus a
				egestas sodales diam cras.
			</p>
		</article>
	);
};
export default BlogCard;
