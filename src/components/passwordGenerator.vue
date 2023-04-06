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

}
</script>
  
<style lang="scss">
$orange: #f8ef00;
$light: #fafafa;
$aqua: #00f0ff;
$grey: #bbbbbb;

// * {
//     font-family: "Barlow", sans-serif;
//     font-family: "Tomorrow", sans-serif;
// }

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
</style>
  