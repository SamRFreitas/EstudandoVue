<template>
    <v-toolbar app>

        <v-toolbar-title class="headline text-uppercase mr4">
            <span>Stock</span>
            <span class="font-weight-light">Trader</span>
        </v-toolbar-title>

            <v-toolbar-items class="hidden-sm-and-down">
                <!-- <v-btn flat to="/">Início</v-btn>
                <v-btn flat to="/portfolio">Portfólio</v-btn>
                <v-btn flat to="/stocks">Ações</v-btn> -->
                <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link"> 
                    {{ item.title }} 
                </v-btn>
            </v-toolbar-items>

            <v-spacer/>

            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat @click="endDay">Finalizar Dia</v-btn>
                <v-menu offset-y>
                    <v-btn flat slot="activator">Salvar & Carregar</v-btn>
                    <v-list>
                        <v-list-tile @click="saveData">
                            <v-list-tile-title>Salvar Dados</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile @click="loadDataLocal">
                            <v-list-tile-title>Carregar Dados</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
                <v-layout align-center>
                    <span class="text-uppercase grey--text text--darken-2">
                        Saldo: {{ funds | currency }}
                    </span>
                </v-layout>
            </v-toolbar-items>
        
        <v-menu class="hidden-md-and-up" 
                :close-on-click="true"
                :close-on-content-click="false"
        >   
          <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
          <v-card width="210" class="justify-center">
            <v-list>
                <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link"> 
                    {{ item.title }} 
                </v-btn>

                <v-btn flat @click="endDay">Finalizar Dia</v-btn>

                <v-menu offset-y>
                    <v-btn flat slot="activator">Salvar & Carregar</v-btn>
                    <v-list>
                        <v-list-tile @click="saveData">
                            <v-list-tile-title>Salvar Dados</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile @click="loadDataLocal">
                            <v-list-tile-title>Carregar Dados</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>

                <v-layout >
                    <span style="margin-left: 24px;" class="text-uppercase grey--text text--darken-2 mt-1">
                        Saldo: {{ funds | currency }}
                    </span>
                </v-layout>
            </v-list>
          </v-card>
        </v-menu>

    </v-toolbar>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data() {
        return {
            menuItems: [
                { title: 'Início', link: '/' },
                { title: 'Portfólio', link: '/portfolio' },
                { title: 'Ações', link: '/stocks' },
            ],
            menu: [
        { icon: "home", title: "Link A" },
        { icon: "info", title: "Link B" },
        { icon: "warning", title: "Link C" }
      ]
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    },
    methods: {
        ...mapActions(['randomizeStocks', 'loadData']),
        endDay() {
            this.randomizeStocks()
        },
        saveData() {
            const { funds, stockPortfolio, stocks } = this.$store.getters
            this.$http.put('data.json', { funds, stockPortfolio, stocks })
        },
        loadDataLocal() {
            this.loadData()
        }
    }
}
</script>

<style>

</style>