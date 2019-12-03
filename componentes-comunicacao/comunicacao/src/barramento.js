import Vue from 'vue'
export default new Vue({
    methods:{
        alterarIdade(idade){
            this.$emit('idadeMudou', idade)
        },
        quandoIdadeMudar(idade, callback){
            this.$on(idade, callback)
        }
    }
}) 

