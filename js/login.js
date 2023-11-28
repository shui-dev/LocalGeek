// login

const enterBtn = document.querySelector('#login')

enterBtn.onclick = function () {
    hList.classList.remove('active');
    const container = document.querySelector('.login-screen');
    container.classList.add('visible')

    container.innerHTML = `
        <div class="container-login">
            <a href="" class="login-close">
                <i class="fa-solid fa-xmark"></i>
            </a>
            <div class="login-img">
                <img src="https://lh3.googleusercontent.com/fife/AK0iWDyjbn7QXQ3aK7f3TzqtCgVWdfv8LXN-9EFFZL-JdKLkIQsvE1Zz1BleKCFn7e0QYRXbogcClPrmmxzdbsbGoF-bNVMv_u5eyktVKvx_BXhGHTWqi-Wcu2SzNu_sEXTXPAV0bTCONG_IyTgRJtTvROmKVv0B3_IkrC1_KiD6qJEVig0VGHVCpq59TfpPuk1PHRBc9_mQgIJJ6xQ9bSKhJKqmedhvu4na_q0mz7hBtOJu63WYVxqoQnmaFJZRX3EcpDTcSgE3ej0gpPhOPliF-J_DLzZpVMaGvQzymi36Cgd0M80rniz1ARnS4hCUDLEp-w1pHTiiTJDY9_zm2TxCmx4AMf0GOgKAHzX7u9-InAztHca12Y4DUylBo05CnSaHv_ohkW_6LnqNCIvWWrnf6LsSmgqN3U2YQ6nGr4wxA2S0WhlQKl3a3GDlb1529JGPVse6aVDwW4VQBgfMS8XI2P9XA0XB2XQ73yvcOh0k4W63zBd-v9jowVce05Q2hH-_hQpI8GYk-kLfng57JfQCQGn1oJUucosiFAcHRxmjlnLVydys5Ot-OQir-jGhchGzNWzQCeZP3ziQwJxnpC2axaYXnEPQoS-y1r957344f7sJNR7o6TOklF1SF8q-XCr2cn37dXYRpFkNjrqBxFA4PhBUQcbCeE3gAx_RGQWKDx3FQx2djjdOi9QTOsUgLwQrL0QpjT_t1z8yHgIb7vWpAK9vob_VNoEehRy2IwvFiJ4y68fiB8593h-rmA3JqgEQ7jT0q4Jba2jemllSbjn5P_JrwFVxwYcUhXnMnUPiwemmbUhxkuhlQ0cw8WGl76nu4rjBWq2uDyT6pC-mcQUFtk4tY5b3Y3unItHIZ1XK7Hp26CGd_7i7NvVmwtmHRm4nRZHFuM8RvxR4pBfA-oyNjLWHsJ16FPCdWFzPpnGiC2q_fKPDH8vr2IvBlDm_JTuVyOEnNioPVunIUvfbm4ZcqAD4_QROeLO5pTntsoMQT11f842aUXff8ycOPm657cTR7_D0mAi3RZuEWFjzeJ-25npVFblhNQWumuWILhh8N9_NJHkwJ3GV5l30XLMx48QfFCvse7ixarl0LkY5GtKN8IqoWzg1-fL3srdjnHSYDTyfMrr5jmtfrcvXfJJnQVl7f2MtZfhxBu7ga5gbudt4heK_Ezw9fTu9LJCySblb9SoVdT9V3XS26I2_ipwfRRfrsCy4PsyHnu7mQR0vVEDaBntBXLVSmmAnss4cyynfK06ni01UolQ0A1KKSmQiciKwqBSzWzsBwUKgNmcjuT2hVepdwbsVpvZfgMtULewqTWaNO3jUaXK8FTZk-bJJQOw1rAoV93sf_WIC9oGubwk9lR-69dlguRHG6CwKtpKZKY6-5kwlADUGTBtWG6tN-zfXlixsb-_7q5I7dvOajJk2dxwPIlrtZhFENWBG77ETWdnnkFCcZe8857JsJ9kyDbn9sjD-p6GC0RLODEIU36ktOXC854TXxxQ_y1xbC8tLfnCVIGS5U9EH4BR9TqJR03be00Q8cmlWaDixWPvtZE52SDLzdjBxqm-aldBq05aqB_rkOoKz0oD90U11VPQv634OkTmWlX9LOy6nVCaNMBDrff-Tk1K6UegmOjCZQyn8JaE6Bp1U4zYiN9trOBo1e3PSk9h8L5XXxdchLXtYPcITYIPqaACqOBwnbWs-FMIcCbOK1_3H22wItzLg14aQ9pCX1HRGVDCj9PIRcQ=w1878-h970" alt="">
            </div>
            <div class="login-input">
                <div>
                    <input id="email" type="text" placeholder="Email">
                    <!-- <label for="">Email</label> -->
                    <label class="label-icon" for=""><i class="fa-solid fa-user-large"></i></label>
                </div>
                <div>
                    <input id="passwd" type="password" placeholder="Senha">
                    <!-- <label for="">Senha</label> -->
                    <label class="label-icon" for=""><i class="fa-solid fa-lock"></i></label>
                </div>
                <div class="login-btn">
                    <a href="#">Entrar</a>
                </div>
                <div class="login-newAC">
                    <p>Ainda não tem conta?</p>
                    <a href="">Criar Conta</a>
                </div>
            </div>
        </div>
    `
}

// login input

// const email = document.querySelector('#email')
// const passwd = document.querySelector('#passwd')
// const join = document.querySelector('.login-btn')

// join.onclick = function() {
//     if(email.value === 'admin' && passwd.value === 'admin') {
//         window.location.href("https://www.google.com/")
//     }
// }