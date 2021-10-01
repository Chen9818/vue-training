
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
            if(this.newtodo){
                let newtodo = {
                    id:this.todos.length+1,
                    content:this.newtodo,
                    complete:false
                };
                this.todos.push(newtodo);
                this.newtodo=''
            }else{
                alert('please write unfinish things')
            }
           
        },
        deletetodo(todo,index){
            let result = confirm(`delete todo:'${todo.content}'? `);
            if(result){
                this.todos.splice(index, 1)
            }
        }  
    }
}).mount('#app')
