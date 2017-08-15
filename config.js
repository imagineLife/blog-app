exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      // 'mongodb://localhost/blogDB';
                      'mongodb://blogger:Blogging247@ds155490.mlab.com:55490/blogdb';
exports.TEST_DATABASE_URL = (
	process.env.TEST_DATABASE_URL ||
	'mongodb://localhost/test-blog-app');
exports.PORT = process.env.PORT || 8080;