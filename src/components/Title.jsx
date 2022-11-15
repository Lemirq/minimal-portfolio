import React from 'react';

const Title = ({ children, id }) => {
	return (
		<div id={id & id} className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white">
			{children}
		</div>
	);
};

export default Title;
