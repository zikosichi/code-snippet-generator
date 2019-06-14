<template>
  <div id="app">

    <div class="h-100 bg-light row no-gutters">
      <div class="col col-6">
        <div class="p-5">
          <div class="mb-3 d-flex align-items-center">
            <h5 class="mr-auto mb-0 text-uppercase">Your snippets</h5>
            <div class="text-right">
              <v-btn
                color="blue-grey"
                class="white--text"
                @click="loader = 'loading3'"
              >
                <v-icon left dark>add</v-icon>
                New
              </v-btn>
            </div>
          </div>
            <hr>

          <v-expansion-panel>
            <v-expansion-panel-content
              v-for="(item,i) in 5"
              :key="i"
            >
              <template v-slot:header>
                <div>Item</div>
              </template>
              <v-card>
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </div>
      </div>
      <div class="col col-6">
        <div class="h-100 bg-white">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app'
}
</script>

<style lang="scss">
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
