import Vue from 'Vue';

new Vue({
	el: '#chat',
	components: {
		'c-app': require('./app/index.js')
	}
});