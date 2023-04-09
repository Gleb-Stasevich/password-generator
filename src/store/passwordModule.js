export const passwordModule = {
    state: () => ({
        history: [],
        inputValue: 0,
        sliderValue: 0,
        checked: {
            upperCase: false,
            lowerCase: true,
            number: true,
            symbol: false,
        },
    }),

    mutations: {
        generatePassword(state) {
            function* generator(start, end) {
                for (let i = start; i < end; i++) {
                    yield i;
                }
            }
            function* generatePasswordCodes() {
                if (state.checked.number) yield* generator(48, 58);
                if (state.checked.upperCase) yield* generator(65, 90);
                if (state.checked.lowerCase) yield* generator(97, 123);
                if (state.checked.symbol) {
                    yield* generator(35, 38);
                    yield* generator(61, 62);
                    yield* generator(64, 65);
                }
            }
            let str = "";
            for (let code of generatePasswordCodes()) {
                str += String.fromCodePoint(code);
            }

            state.inputValue = "";
            for (let i = 0; i < state.sliderValue; i++) {
                let randomIndex = Math.floor(Math.random() * str.length);

                if (str[randomIndex] !== undefined) {
                    state.inputValue += str[randomIndex];
                }
            }
        },

        updateIcon(state) {
            let icon = document.querySelector(".complexity");

            if (state.inputValue.length === 0) {
                icon.src = require("@/../public/img/complexity-0.png");
            } else if (state.inputValue.length < 5) {
                icon.src = require("@/../public/img/complexity-1.png");
            } else if (
                state.inputValue.length >= 5 &&
                state.inputValue.length < 8 &&
                state.checked.symbol == false
            ) {
                console.log("тут");
                icon.src = require("@/../public/img/complexity-2.png");
            } else if (
                state.inputValue.length >= 5 &&
                state.inputValue.length < 8 &&
                state.checked.symbol == true
            ) {
                console.log("тут");
                icon.src = require("@/../public/img/complexity-3.png");
            } else if (
                state.inputValue.length >= 8 &&
                state.inputValue.length <= 10 &&
                state.checked.symbol == false
            ) {
                icon.src = require("@/../public/img/complexity-3.png");
            } else if (state.inputValue.length > 10) {
                icon.src = require("@/../public/img/complexity-4.png");
            }
        },
    },
    namespaced: true,
};
