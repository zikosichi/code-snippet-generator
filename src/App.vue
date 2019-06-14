<template>
  <div id="app">

    <div class="h-100 bg-light row no-gutters">
      <div class="col col-6">
        <div class="p-5">
          <div class="mb-3 d-flex align-items-center">
            <h5 class="mr-auto mb-0 text-uppercase">Your snippets</h5>
            <div class="text-right">
              <v-btn color="blue"
                class="white--text"
                @click="loader = 'loading3'">
                <v-icon left dark>add</v-icon>
                New
              </v-btn>
            </div>
          </div>
            <hr>

          <v-expansion-panel v-model="panelIndex">
            <v-expansion-panel-content v-for="(item,i) in 5"
              :key="i"
              :lazy="true">

              <template v-slot:header>
                <div class="snippet-name">Item</div>
              </template>

              <v-card class="grey lighten-4 px-4 py-3">
                <div class="row">
                  <div class="col">
                    <v-text-field label="Prefix"
                      placeholder="m-snippet"
                      color="primary">
                    </v-text-field>
                  </div>
                  <div class="col">
                    <v-text-field label="Snippet Name"
                      placeholder="My Snippet">
                    </v-text-field>
                  </div>
                  <div class="col">
                    <v-text-field label="Description">
                    </v-text-field>
                  </div>
                </div>

                <div class="editor-wrapper">
                  <codemirror v-model="code"
                    v-if="visibleEditorIndex === i"
                    :options="cmOptions">
                  </codemirror>
                </div>

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
// language js
import 'codemirror/mode/javascript/javascript.js'
// theme css
import 'codemirror/theme/neo.css'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data() {
    return {
      code: 'const a = 10',
      panelIndex: 0,
      visibleEditorIndex: 0,
      cmOptions: {
        tabSize: 2,
        mode: 'auto',
        theme: 'neo',
        lineNumbers: true,
        line: true,
      }
    }
  },
  methods: {
    onCmReady: function(e) {
    }
  },
  watch: {
    panelIndex: function (newValue) {
      setTimeout(() => {
        this.visibleEditorIndex = newValue
      });
    }
  }
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

.editor-wrapper {
  height: 300px;
}

.snippet-name {
  font-size: 16px;
}

.v-expansion-panel {
  border-radius: 5px;
  overflow: hidden;
}

.CodeMirror {
  font-family: Arial, monospace;
  font-size: 16px;
  border-radius: 5px;
  overflow: hidden;
}
</style>
