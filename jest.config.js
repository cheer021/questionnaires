module.exports = {
	'testMatch': [
		'<rootDir>/__tests__/*.test.js'
	],
	verbose: true,
	testURL: 'http://localhost',
	'coverageDirectory': '__coverage__',
	'collectCoverage': true,
	'coverageReporters': [
		'lcov', 'text', 'text-summary'
	]
};
