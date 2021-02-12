<template>
    <div>
        <div class="img-fluid" alt="Responsive image"></div>
        <div>
            <hot-play-list @Charts="playMusic"></hot-play-list>
        </div>
        <!--        <div class="nav flex-column nav-pills nav-stacked" id="v-pills-tab" role="tablist" aria-orientation="vertical">-->
        <!--            <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>-->
        <!--            <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>-->
        <!--            <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>-->
        <!--            <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>-->
        <!--        </div>-->
        <!--        <div class="tab-content" id="v-pills-tabContent">-->
        <!--            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">1</div>-->
        <!--            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">2</div>-->
        <!--            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">3</div>-->
        <!--            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">4</div>-->
        <!--        </div>-->
        <template v-if="musicAutoplay">
            <play-list-modal @autoPlay="AutoPlay" v-model="modal.show" :musicSrc="musicObject"></play-list-modal>
        </template>
    </div>
</template>

<script>
    import HotPlayList from '@/components/Pages/HotPlayList';
    import PlayListModal from '@/components/Common/PlayListModal';

    export default {
        name: "IndexPage",
        components: {PlayListModal, HotPlayList},
        data() {
            return {
                musicObject: {
                    id: 'DZrC8m29ciOFY2JAm3',
                    type: 'playlist',
                    autoplay: false
                },
                modal: {
                    show: false
                },
                musicAutoplay: false
            };
        },
        methods: {
            playMusic(item) {
                this.musicObject = item;
                this.musicObject.type = 'playlist';
                this.musicObject.autoplay = true;

                this.musicAutoplay = true;
                this.modal.show = true;
            },
            AutoPlay() {
                this.musicAutoplay = false;
            }
        }
    }
</script>

<style scoped>
    .img-fluid{
        height:                250px;
        background-color:      #A6808C;
        opacity:               0.6;
        background-blend-mode: multiply;
        background-image:      url(https://www.emome.net/files/fckeditor/image/images/bn/bn-service-small-8.jpg);
        background-size:       cover;
        background-position:   center center;
    }
</style>