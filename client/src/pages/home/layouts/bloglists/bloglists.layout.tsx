import { BlogCard } from '../../components';

const BlogLists = () => {
	return (
		<section className='py-28'>
			<div className='container'>
				<div className='grid grid-cols-3 gap-x-4 gap-y-14'>
					{[...Array(10)].map((_, index) => (
						<BlogCard key={index} />
					))}
				</div>
			</div>
		</section>
	);
};
export default BlogLists;
