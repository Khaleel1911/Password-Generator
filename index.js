const myinput = document.getElementById("myinput");
        const mybtn = document.getElementById("mybtn");
        const small = document.getElementById("small");
        const caps = document.getElementById("caps");
        const nums = document.getElementById("nums");
        const chars = document.getElementById("chars");
        const myh3 = document.getElementById("myh3");
        let allowedchars = "";
        let pass = "";
        let rdn;
        let small_letters = 'abcdefghijklmnopqrstuvwxyz';
        let cap_letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let numbers = '0123456789';
        let characters = '!@#$%^&_-()**>';

        mybtn.onclick = function() {
            pass = "";
            allowedchars = "";
            myh3.innerHTML = "";

            let length_of_password = Number(myinput.value);

            if (isNaN(length_of_password) || length_of_password <= 6) {
                myh3.innerHTML = `Password length must be greater than 6 and a valid number!`;
                return;
            }

            if (!small.checked && !caps.checked && !nums.checked && !chars.checked) {
                myh3.innerHTML = `Select at least one of the options above.`;
                return;
            }

            if (small.checked) {
                allowedchars += small_letters;
            }
            if (caps.checked) {
                allowedchars += cap_letters;
            }
            if (nums.checked) {
                allowedchars += numbers;
            }
            if (chars.checked) {
                allowedchars += characters;
            }

            let allowed_chars_length = allowedchars.length;
            for (let i = 0; i < length_of_password; i++) {
                rdn = Math.floor(Math.random() * allowed_chars_length);
                pass += allowedchars[rdn];
            }

            myh3.innerHTML = pass;
        }