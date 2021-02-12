<template>
    <div class="row">
        <div class="col-md-12"><h3 class="header-title">KKBOX 速爆新歌</h3></div>
        <div class="col-md-3 text-center" v-for="item in hotList" :key="item.id" @click="playMusic(item)">
            <img :src="item.images[0].url" class="img-thumbnail">
            <h5><b>{{ item.title }}</b></h5>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import axios from 'axios';

    export default {
        name: "HotPlayList",
        computed: {
            ...mapGetters(['isLoading', 'kkboxToken', 'AJAXConfig'])
        },
        data() {
            return {
                hotList: [],
                showModal: false,
               Modal: {
                    show: false
                },
            };
        },
        async created() {
            await this.getToken();
            this.gethotPlaylist();
        },
        methods: {
            ...mapActions(['getToken']),
            async gethotPlaylist() {
                const hotPlaylistUrl = `https://api.kkbox.com/v1.1/new-hits-playlists?territory=TW`;
                let res = await axios.get(hotPlaylistUrl, this.AJAXConfig);
                res = res.data;
                this.hotList = res.data;
            },
            playMusic(item) {
                this.$emit('Charts', item);
            }
        }
    }
</script>

<style scoped>

</style>