<template>
    <section class="generator">
        <div class="generator__container">
            <div class="generator__content">
                <h1 class="generator__title">Password<br>Generator</h1>
                <password-input></password-input>
                <password-button></password-button>
                <password-slider></password-slider>
                <password-checkbox></password-checkbox>
            </div>
        </div>
    </section>
</template>
  
<script>

export default {
    mounted() {
        this.$store.commit('password/generatePassword')
    }
}

</script>
  
<style lang="scss">
$orange: #f8ef00;
$light: #fafafa;
$aqua: #00f0ff;
$grey: #bbbbbb;

.generator {

    &__container {
        max-width: 588px;
    }

    &__content {

        button {
            margin-top: 20px;
        }
    }

    &__title {
        font-family: 'Tomorrow';
        font-weight: 700;
        font-size: 40px;
        line-height: 40px;
        letter-spacing: 0.2em;
        text-transform: uppercase;

        color: $orange;
    }

}

@media(max-width:1115px) {
    .generator {

        &__container {
            margin: auto;
            text-align: center;
        }

        &__content {
            padding-top: 50px;
        }
    }
}

@media (max-width: 370px) {
    .generator__title {
        font-size: 35px;
    }
}
</style>
  