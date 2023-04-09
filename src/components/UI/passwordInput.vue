<template>
    <div class="input">
        <input readonly maxlength="30" :value="this.$store.state.password.inputValue" type="text">
        <div class="input__icons">
            <img src="@/../public/img/complexity-3.png" class="complexity">
            <a @click="$store.commit('password/generatePassword')" class="icon-update second-icon"></a>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'password-input',
    methods: {
    }
}
</script>
  
<style lang="scss" scoped>
$aqua: #00f0ff;
$orange: #f8ef00;

input {
    color: $aqua;
    font-family: "Tomorrow", sans-serif;
    width: 588px;
    height: 64px;
    padding-left: 20px;
    border: 2px solid $aqua;
    background: rgba(0, 240, 255, 0.1);


}

.input {
    position: relative;
    margin-top: 64px;

    &__icons {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 20px;

    }
}

img {
    position: absolute;
    right: 27px;
    width: 16px;
    height: 17px;
}

.complexity {
    margin-right: 12px;
}

.second-icon:before {
    transition: all 0.4s ease;
}

.second-icon:hover:before {
    color: $orange;
    transition: all 0.4s ease;
}

@media (max-width: 640px) {
    .input {
        input {
            width: 100%;
        }
    }
}

@media (max-width: 450px) {

    .input__icons {
        transform: translateY(50%);
        position: relative;
        top: 0;
        left: 0;
        display: block;
    }

    .complexity {
        position: relative;
        top: 2px;
        right: 0;
    }
}
</style>
  