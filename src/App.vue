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
        <transition>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </v-container>
    </main>
    <v-footer :fixed="fixed ">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios';
import Vue from 'vue'

export default {
  data () {
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
      title: 'AppStore',
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>