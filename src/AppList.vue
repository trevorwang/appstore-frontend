<template>
    <v-slide-y-transition mode="out-in">
        <v-layout column>
            <v-list two-line>
                <template v-for="(item, index) in apps">
                    <router-link :to="'/app/' + item.id" :key="item.id">
                        <v-list-tile avatar v-bind:key="item.name">
                            <v-list-tile-avatar>
                                <img v-bind:src="'https://nativeappstorage.blob.core.windows.net/'+item.versions.slice(-1)[0].icon">
                            </v-list-tile-avatar>
                            <v-list-tile-content>
                                <v-list-tile-title v-html="item.name"></v-list-tile-title>
                                <v-list-tile-sub-title v-html="item.platform"></v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </router-link>
                    <v-divider v-if="index + 1 < apps.length" :key="index"></v-divider>
                </template>
            </v-list>
        </v-layout>
    </v-slide-y-transition>
</template>

<script>
import axios from 'axios'
import ua from 'ua-parser-js'
export default {
    data () {
        return {
            apps: []
        }
    },
    created () {
        var filter = ''
        const platforms = ['ios', 'android']
        var os = ua().os.name.toLowerCase()
        if (platforms.indexOf(os) != -1) {
            filter = 'platform=' + os
        }
        axios.get(`http://localhost:1337/app?` + filter)
            .then(response => {
                this.apps = response.data
            })
            .catch(e => {
                console.error(e)
            })
    }
}
</script>