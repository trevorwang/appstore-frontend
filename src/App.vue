<template>
  <v-app light>
    <v-list>
      <v-list-tile v-for="(item, i) in items" :key="i" value="true">
        <v-list-tile-action>
          <v-icon light v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-toolbar fixed>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column>

            <v-list two-line>
              <template v-for="item in apps">
                <v-list-tile avatar v-bind:key="item.name" download>
                  <v-list-tile-avatar>
                    <img v-bind:src="'http://localhost:1337/version/'+item.versions.slice(-1)[0].id+'/icon'">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.name"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.platform"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </main>
    <v-footer :fixed="fixed ">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'bubble_chart',
          title: 'Inspire'
        }
      ],
      title: 'Vuetify.js',
      apps: []
    }
  },
  created() {
    axios.get(`http://localhost:1337/app`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.apps = response.data;
      })
      .catch(e => {
        console.error(e);
      })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>