import './chat.css';

module.exports = {
    data() {
      return {
          msg: 'msgs goes here',
          msgs: []
      }  
    },
    methods: {
      send(m) {
         console.log(m)
         this.msg = ''; 
      }  
    },
    template: require('./chat.html')
}