import './chat.css';

module.exports = {
    data() {
      return {
          msgs: [{msg: 'a'}]
      }  
    },
    template: require('./chat.html')
}