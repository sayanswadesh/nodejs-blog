import { PageContainer } from 'layouts';
import { BlogLists, Search } from './layouts';

const HomePage = () => {
	return (
		<PageContainer>
			<Search />
			<BlogLists />
		</PageContainer>
	);
};
export default HomePage;
