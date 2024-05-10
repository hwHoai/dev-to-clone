const siteRouter = require('../routes/siteRouter');
const userRouter = require('../routes/userRouter');
const apiRespone = require('../routes/api');
require('../routes/siteRouter');

function route(app) {
	app.use('/v1/api', apiRespone);
	app.use('/user', userRouter);
	app.use('/', siteRouter);
}

module.exports = route;
