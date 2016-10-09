import './app.css';

module.exports = {
	 template: require('./app.html'),
	 components: {
		 'chat': require('../chat/index.js'),
		 'scenario': require('../scenario/index.js'),
	 }
}