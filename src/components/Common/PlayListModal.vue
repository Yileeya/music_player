<template>
    <modal v-model="showModal"
           @hide="onHideModal"
           :header="false"
           :footer="false"
           :backdrop="true">
        <div slot="default">
            <button class="btn" @click="showModal =false">
                <i class="fa fa-times fa-lg" aria-hidden="true"></i>
            </button>
            <iframe width="100%" height="550" class="iframe"
                    :src="`https://widget.kkbox.com/v1/?id=${musicSrc.id}&amp;type=${musicSrc.type}&amp;terr=TW}&amp;lang=TC&amp;autoplay=${musicSrc.autoplay}`"
                    frameBorder="0" allow="autoplay" id="iframeID">
            </iframe>
        </div>
    </modal>
</template>

<script>
    export default {
        name: "PlayListModal",
        props: {
            value: Boolean,
            musicSrc: {
                type: Object,
                default() {
                    return {
                        id: '0otAoi0Eu_GpAJGfcF',
                        type: 'album',
                        autoplay: false
                    };
                }
            }
        },
        watch: {
            value(newVal) {
                if(newVal == false) {
                    this.$emit('autoPlay', false);
                }
                this.showModal = newVal;
            }
        },
        data() {
            return {
                showModal: this.value
            };
        },
        methods: {
            onHideModal() {
                this.$emit('input', false);
            }
        }
    }
</script>

<style scoped>
    .btn{
        background-color: transparent;
        color:            darkgrey;
        position:         absolute;
        right:            0;
        top:              0;
    }
    .fa{
        background:    rgba(255, 255, 255, 0.7);
        border-radius: 5px;
        padding:       5px;
    }
</style>