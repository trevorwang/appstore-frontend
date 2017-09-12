<template>
    <v-slide-y-transition mode="out-in">
        <v-layout column>
            <v-list two-line>
                <template v-for="(item, index) in apps">
                    <router-link :to="'/app/' + item.id" :key="item.id">
                        <v-list-tile avatar v-bind:key="item.name">
                            <v-list-tile-avatar>
                                <img v-bind:src="'http://localhost:1337/version/'+item.versions.slice(-1)[0].id+'/icon'">
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
import axios from 'axios';
export default {
    data() {
        return {
            apps: []
        }
    },
    created() {
        axios.get(`http://localhost:1337/app`)
            .then(response => {
                this.apps = response.data;
            })
            .catch(e => {
                console.error(e);
            })
    }
}
</script>