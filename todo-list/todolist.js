
const vm = Vue.createApp({
    data(){
        return{
            newtodo:'',
            todos:[
                {
                    id:1,
                    content:'lorem1',
                    complete:true,
                },
                {
                    id:2,
                    content:'lorem2',
                    complete:true,
                },
                {
                    id:3,
                    content:'lorem3',
                    complete:false  ,
                },
            ]
        }
    },
    methods:{
        creattodo(){
            let newtodo = {
                id:this.todos.length+1,
                content:this.newtodo,
                complete:false
            };
            this.todos.push(newtodo);
            this.newtodo=''
        }       
    },
}).mount('#app')

console.log('ddd')