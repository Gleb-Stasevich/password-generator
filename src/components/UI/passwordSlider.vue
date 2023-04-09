<template>
    <span class="slider-value"></span>
    <input @input="updatePassword" class="slider" type="range" min="0" max="30" value="10" step="1">
</template>
  
<script>

export default {
    name: 'password-slider',
    mounted() {
        const input = document.querySelector('.slider');
        const span = document.querySelector('.slider-value');
        this.$store.state.password.inputValue = this.$store.state.password.sliderValue = span.textContent = input.value;
    },
    methods: {
        updatePassword(e) {
            const input = document.querySelector('.slider');
            const span = document.querySelector('.slider-value');
            this.$store.state.password.sliderValue = span.textContent = input.value;
            this.$store.commit('password/generatePassword');
            this.$store.commit('password/updateIcon');
        }
    }
}
</script>
  
<style lang="scss" scoped>
span {
    display: block;
    position: absolute;
    padding-top: 35px;
    padding-left: 193px;
    color: white;
}

$orange: #f8ef00;
$aqua: #00f0ff;

.slider[type=range] {
    margin-top: 64px;
    appearance: none;
    width: 100%;
}

.slider[type=range]:focus {
    outline: none;
}

.slider[type=range]::-webkit-slider-runnable-track {
    height: 3px;
    border: 3px solid #00F0FF;

}

.slider[type=range]::-webkit-slider-thumb {
    margin-top: -10.5px;
    height: 21px;
    width: 21px;
    background: $orange;
    cursor: pointer;
    -webkit-appearance: none;
}

.slider[type=range]::-moz-range-track {
    height: 3px;
    border: 3px solid #00F0FF;

}

.slider[type=range]::-moz-range-thumb {
    margin-top: -10.5px;
    height: 21px;
    width: 21px;
    background: $orange;
    cursor: pointer;
}

.slider[type=range]::-ms-track {
    height: 3px;
    border: 3px solid $aqua;
}

.slider[type=range]::-ms-fill-lower {
    background: $aqua;
}

.slider[type=range]::-ms-fill-upper {
    background: $aqua;
}

.slider[type=range]::-ms-thumb {
    margin-top: -10.5px;
    height: 21px;
    width: 21px;
    background: $orange;
    cursor: pointer;
}

.slider[type=range]:focus::-ms-fill-lower {
    background: $aqua;
}

.slider[type=range]:focus::-ms-fill-upper {
    background: $aqua;
}

@media (max-width: 640px) {
    .slider {
        width: 100% !important;
    }
}
</style>
  