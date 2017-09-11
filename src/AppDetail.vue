<template>
    <div>
        Hello detail
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: ['id'],
    data() {
        return {
            app: {},
            props: ['id']
        }
    },
    created() {
        axios.get(`http://localhost:1337/app` + id)
            .then(response => {
                this.app = response.data;
            })
            .catch(e => {
                console.error(e);
            })
    }
}
</script>