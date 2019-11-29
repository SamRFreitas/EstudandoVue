import Vue from 'vue'

export default new Vue({

    methods:{

        clique(usuario){
            this.$emit('Clicou', usuario)
        },
        escutandoClique(callback){
            this.$on('Clicou', callback)
        }
    }

})