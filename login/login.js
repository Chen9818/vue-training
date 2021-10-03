let vm = Vue.createApp({
    data(){
        return{
            name:'jason',
            sex:'男',
            age:'20~30歲',
            favor:['打電玩','看電影','旅遊'],
            marry:true
        }
    }

}).mount('#app')