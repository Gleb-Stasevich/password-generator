<template>
    <section class="history">
        <div class="history__container">
            <div class="history__content">
                <h2 class="history__title">Password history</h2>
                <div class="history__blocks">
                    <div class="block" v-for="password in $store.state.password.history" :key="password.id">
                        <div class="block__data">
                            <span class="password">{{ password.password }}</span>
                            <br>
                            <span class="date">{{ password.date }}</span>
                        </div>
                        <div class="block__icon">
                            <a @click="copyPassword" class="icon-copy"></a>
                        </div>
                    </div>

                </div>
                <span @click="clearHistory" class="clear">Clear history</span>
            </div>
        </div>
    </section>
</template>
  
<script>

export default {

    methods: {
        clearHistory() {
            this.$store.state.password.history = [];
            localStorage.clear();
        },
        copyPassword(e) {
            const password = e.target.parentNode.parentNode.querySelector('.password').textContent;
            const icon = e.target;
            icon.classList.add('copied');
            setTimeout(() => {
                icon.classList.remove('copied');
            }, 500);

            let textarea = document.createElement('textarea');
            textarea.id = 'temp';
            textarea.style.height = 0;
            document.body.appendChild(textarea);

            textarea.value = password;
            let selector = document.querySelector('#temp');
            selector.select();
            document.execCommand('copy');

            document.body.removeChild(textarea);
        },
    },

    mounted() {
        let keys = Object.keys(localStorage);
        for (let key of keys) {
            this.$store.state.password.history.push(
                {
                    password: key,
                    date: localStorage.getItem(key),
                }
            )
        }
    }

}
</script>
  
<style scoped lang="scss">
$orange: #f8ef00;
$light: #fafafa;
$grey: #bbbbbb;
$aqua: #00f0ff;

.history {


    &__container {
        width: 390px;
    }

    &__blocks {
        padding-top: 42px;
    }

    &__title {
        font-family: 'Tomorrow';
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: $light;
    }
}

.block {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__icon {
        margin-left: 10px;
    }

    &__data {
        width: 390px;
    }
}

.password {
    display: block;
    height: 19px;
    width: 390px;
}

.block:not(:first-child) {
    margin: 20px 0px;
}

.block:last-child {
    margin: 0;
    margin-top: 20px;
    margin-bottom: 24px;
}

.password {
    font-family: 'Tomorrow';
    line-height: 24px;
    letter-spacing: 0.2em;
    color: $light;
    opacity: 0.8;
}

.date {
    font-family: 'Barlow';
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: $grey;
    opacity: 0.8;
}

.clear {
    cursor: pointer;
    margin-top: 24px;
    font-family: 'Tomorrow';
    line-height: 24px;
    letter-spacing: 0.2em;
    color: #F8EF00;
    transition: all 0.4s ease;
    caret-color: transparent;
}

.clear:hover {
    color: $aqua;
    transition: all 0.4s ease;
}

.icon-copy {
    margin-right: 5px;
}

.icon-copy:before {
    color: $light;
    transition: all 0.4s ease;
}

.icon-copy:hover:before {
    color: $orange;
    transition: all 0.4s ease;
}

.copied:hover:before {
    color: green;
    transition: all 0.4s ease;
}

@media(max-width:1115px) {
    .history {

        &__container {
            text-align: center;
            margin: auto;
        }

        &__content {
            padding-top: 50px;
        }

    }
}

@media (max-width: 560px) {
    .password {
        font-size: 14px;
        width: 320px;
    }
}

@media (max-width: 450px) {

    .history__container,
    .block__data {
        width: 100%;
    }

    .block {
        flex-direction: column;
    }

    .password {
        font-size: 13px;
        margin: auto;
    }

    .icon-copy {
        display: block;
        margin-right: 0px;
        margin-top: 10px;
    }
}

@media (max-width: 370px) {
    .history__container {
        text-align: start;

    }

    .block {
        align-items: start;
    }

    .history {
        width: 100%;
    }

    .password {
        display: inline;
        font-size: 11px;
    }
}
</style>
  