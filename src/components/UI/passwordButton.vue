<template>
    <button @click="copyAndPushPassword">
        <div class="button__content">
            <span class="button__text">Copy Password_</span>

            <div class="button__icon">
                <a @click="ddd" class="icon-arrow"></a>
            </div>
        </div>
        <hr class="button__line">
        <div class="button__triangle"></div>
    </button>
</template>
  
<script>

export default {
    name: 'password-button',
    methods: {
        copyAndPushPassword() {

            if (!this.$store.state.password.inputValue) return

            let getDate = new Date();
            const date = String(getDate).match(/(\w+ )\d+ \d+ \w+\:\d{2}/gi).join(' ');

            for (let key of Object.values(this.$store.state.password.history)) {

                if (key.password == this.$store.state.password.inputValue) return
            }

            if (localStorage.length < 7) {

                this.$store.state.password.history.push(
                    {
                        password: this.$store.state.password.inputValue,
                        date: date,
                        id: date,
                    }
                );
                localStorage.setItem(this.$store.state.password.inputValue, date);
            };

            const button = document.querySelector('button');
            const buttonLline = document.querySelector('.button__line');

            button.classList.add('copied');
            buttonLline.classList.add('copied');
            setTimeout(() => {
                button.classList.remove('copied');
                buttonLline.classList.remove('copied');
            }, 500);

            let textarea = document.createElement('textarea');
            textarea.id = 'temp';
            textarea.style.height = 0;
            document.body.appendChild(textarea);
            textarea.value = this.$store.state.password.inputValue;
            let selector = document.querySelector('#temp');
            selector.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        },
    }
}
</script>
  
<style scoped lang="scss">
$red: #FF003C;
$orange: #f8ef00;
$aqua: #00f0ff;
$light: #fafafa;

button {
    cursor: pointer;
    border: none;
    position: relative;
    width: 350px;
    height: 64px;
    background: $orange;
    transition: all 0.4s ease;
}

button:hover {
    background: $red;
    color: $light !important;
    transition: all 0.4s ease;
}

hr {
    transition: all 0.4s ease;
}

.button {
    &__content {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    &__text {
        font-family: 'Tomorrow';
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
    }

    &__line {
        position: absolute;
        right: 0;
        top: 0;
        color: $red;
        border: 2px solid $red;
        height: 100%;
    }

    &__triangle {
        position: absolute;
        bottom: 0;
        width: 0;
        height: 0;
        border: 0 solid transparent;
        border-right-width: 15px;
        border-left-width: 0px;
        border-bottom: 15px solid black
    }
}

.copied:hover {
    background: green;
}

.button__line.copied {
    border: 2px solid green !important;
    transition: all 0.4s ease;
}

@media (max-width: 470px) {
    button {
        width: 100%;
    }
}
</style>
  