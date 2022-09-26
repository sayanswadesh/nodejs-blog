import Footer from 'layouts/footer';
import Header from 'layouts/header';
import React from 'react';

type PageContainerProps = {
	children: React.ReactNode;
};
const Pagecontainer: React.FC<PageContainerProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};
export default Pagecontainer;
