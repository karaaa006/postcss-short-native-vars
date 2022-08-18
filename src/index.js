import postcss from 'postcss';

export default postcss.plugin('postcss-short-native-vars', opts => {
	console.log({ opts }); // eslint-disable-line no-console

	return (root, result) => {
		console.log({ root, result }); // eslint-disable-line no-console
	};
});
