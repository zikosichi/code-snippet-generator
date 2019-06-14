<template>
  <div id="app">

    <div class="h-100 bg-light row no-gutters">
      <div class="col col-6">
        <div class="px-5 py-3">
          <div class="mb-3 d-flex align-items-center">
            <h5 class="mr-auto mb-0 text-uppercase">Your snippets</h5>
            <div class="text-right">
              <v-btn color="blue"
                class="white--text"
                @click="addNewSnippet">
                <v-icon left dark>add</v-icon>
                New
              </v-btn>
            </div>
          </div>

          <hr>

          <v-expansion-panel v-model="panelIndex">
            <v-expansion-panel-content v-for="(snippet, i) in snippets"
              :key="i"
              :lazy="true">

              <template v-slot:header>
                <div class="snippet-name">{{snippet.name}}</div>
                <div class="text-right">
                  <v-btn flat icon small color="grey darken-1"
                   @click.stop="deleteSnippet(i)">
                    <v-icon small>delete</v-icon>
                  </v-btn>
                </div>
              </template>

              <v-card class="grey lighten-4 px-4 py-3">
                <div class="row">
                  <div class="col">
                    <v-text-field label="Prefix"
                      v-model="snippet.prefix"
                      placeholder="m-snippet"
                      color="primary">
                    </v-text-field>
                  </div>
                  <div class="col">
                    <v-text-field label="Snippet Name"
                      v-model="snippet.name"
                      placeholder="My Snippet">
                    </v-text-field>
                  </div>
                  <div class="col">
                    <v-text-field label="Description"
                      v-model="snippet.description">
                    </v-text-field>
                  </div>
                </div>

                <div class="editor-wrapper">
                  <codemirror v-model="snippet.code"
                    v-if="visibleEditorIndex === i"
                    :options="cmOptions">
                  </codemirror>
                </div>

              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-btn small block flat @click="addNewSnippet"
            color="grey darken-1">
            <v-icon small left dark>add</v-icon>
          </v-btn>
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
// theme css
import 'codemirror/theme/neo.css'

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
      },
      snippets: [
        {
          prefix: '',
          name: 'My Snippet',
          code: '',
          description: '',
        }
      ]
    }
  },
  methods: {
    addNewSnippet: function() {
      this.snippets.push({
        prefix: '',
        name: 'My Snippet',
        code: '',
        description: '',
      })
      this.panelIndex = this.snippets.length - 1
    },
    deleteSnippet: function (i) {
      this.snippets.splice(i, 1)
      this.panelIndex--
    }
  },
  watch: {
    panelIndex: function (newValue) {
      // This is a fix for codemirror.
      // It does not render in expandable box without re-render
      setTimeout(() => {
        this.visibleEditorIndex = newValue
      }, 10);
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
