    <template>
    <div>
    <div>
        <div>{{count}}</div>
        <div>
        <span @click="increment">increment</span>
        <span @click="decrement">decrement</span>
        </div>
    </div>
    <hr/>
     <div>
        <div>{{count2}}</div>
        <div>
        <span @click="increment2">increment2</span>
        <span @click="decrement2">decrement2</span>
        </div>
    </div>
    
    </div>
    </template>
    <style>
    </style>
    <script>
    export default {
        data(){
            return {};
        },
        computed:{
          count () {
            return this.$store.state.a.count
          },
          count2 () {
            return this.$store.state.b.count2
          }
        },
        methods:{
            increment(){
                this.$store.commit('increment');
                  
            },
            decrement(){
                this.$store.commit('decrement')  
            },
             increment2(){
                this.$store.commit('increment2')  
            },
            decrement2(){
                this.$store.commit('decrement2')  
            }
        }
    }
    </script>