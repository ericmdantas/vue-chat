import Vue from 'vue';

new Vue({
	el: '#chat',
	components: {
		'app': require('./app/index.js')
	}
});