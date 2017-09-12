<template>
    <v-slide-y-transition mode="out-in">
        <v-card class="cyan primary white--text">
            <v-container fluid grid-list-lg>
                <v-layout column>
                    <v-flex text-xs-center>
                        <v-card-media :src="'http://localhost:1337/version/' + app.versions.slice(-1)[0].id + '/icon'" height="125px" contain></v-card-media>
                    </v-flex>
                    <v-list two-line>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title>Package Name</v-list-tile-title>
                                <v-list-tile-sub-title v-html="app.packageName"></v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title>Platform</v-list-tile-title>
                                <v-list-tile-sub-title v-html="app.platform"></v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title>Version</v-list-tile-title>
                                <v-list-tile-sub-title v-html="app.versions.slice(-1)[0].name"></v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title>Size</v-list-tile-title>
                                <v-list-tile-sub-title v-html="bytesToSize(app.versions.slice(-1)[0].fileSize)"></v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title>Updated at</v-list-tile-title>
                                <v-list-tile-sub-title v-html="formatDate(app.versions.slice(-1)[0].updatedAt)"></v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>
                            <a :href="'http://localhost:1337/version/' + app.versions.slice(-1)[0].id + '/download'">
                                <v-list-tile-content>
                                    <v-list-tile-title>Download</v-list-tile-title>
                                </v-list-tile-content>
                            </a>
                        </v-list-tile>
                    </v-list>
                </v-layout>
            </v-container>
        </v-card>
    </v-slide-y-transition>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
    props: ['id'],
    data() {
        return {
            app: {},
        }
    },
    created() {
        console.log(this);
        this.fetchData(this.$props.id)
    },
    watch: {
        id: (val, oldValue) => {
            if (val !== oldValue) {
                console.log("value changed to " + val)
                console.log(this.$props)
                console.log(this.default.methods.fetchData)
                this.default.methods.fetchData(val)
            }
        }
    },
    methods: {
        bytesToSize(bytes) {
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            if (bytes == 0) return 'n/a';
            var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
            return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
        },

        formatDate(date) {
            return moment(date).format("DD MMM YYYY hh:mm:ss")
        },

        fetchData(id) {
            axios.get('http://localhost:1337/app/' + id)
                .then(response => {
                    this.app = response.data;
                    console.log(this.app)
                })
                .catch(e => {
                    console.error(e);
                })
        }
    }
}
</script>