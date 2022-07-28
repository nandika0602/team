<template>
    <div class="vue-tempalte">
        <form @submit="onSubmit">
            <h3>SIGN UP</h3>

            <div class="form-group">
                <label>Full Name</label>
                <span>*</span>
                <input type="text" class="form-control form-control-lg" @keydown="checkValue" v-model="input"
                    required />
                <div>
                    <div v-if="error" class="alert">{{ error }}</div>
                </div>
            </div>
            <div class="form-group">
                <label>Email address</label>
                <span>*</span>
                <input type="email" v-model="vemail" class="form-control form-control-lg" @keydown="validateEmail" />
                <div v-if="error1" class="alert">{{ error1 }}</div>

            </div>

            <div class="form-group">
                <label>Phone Number</label>
                <span>*</span>
                <input type="tel" v-model="tel" class="form-control form-control-lg" @keydown="validateNumber"
                    required />
                <div v-if="error2" class="alert">{{ error2 }}</div>

            </div>


            <div class="form-group">
                <label>Password</label>
                <span>*</span>
                <input type="password" v-model="pass" class="form-control form-control-lg" @keydown="validatePassword"
                    required />
                <div v-if="error3" class="alert">{{ error3 }}</div>
            </div>

            <div class="form-group">
                <label>Confirm Password</label>
                <span>*</span>
                <input type="password" v-model="cpass" class="form-control form-control-lg" @keydown="validatePassword2"
                    required />
                <div v-if="error4" class="alert">{{ error4 }}</div>
            </div>


            <div class="text-center">
                <button type="submit" class="btn btn-dark btn-lg btn-block w-80 m-l-2">SIGN UP</button>
            </div>

            <p class="forgot-password ">
                Already registered?
                <router-link :to="{ name: 'login' }">SIGN IN</router-link>
            </p>
        </form>
    </div>
</template>
 
<script>
export default {
    data() {
        return {
            input: '',
            error: '',
            error1: '',
            text: '',
            vemail: '',
            tel: '',
            pass: '',
            cpass: ''
        }
    },
    methods: {
        onSubmit(e) {
            // this.error = '',
            e.preventDefault()
            const newObj = {
                input: this.input,
                vemail: this.vemail,
                tel: this.tel,
                pass: this.pass,
                cpass: this.cpass

            }

            fetch("http://10.20.4.81:8080/user/signup", {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-type": "application/json; charset=utf-8" },
                body: {
                    name: 'sfsjdhfgdsjfbhbn'
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })


            console.log(newObj, " signup successfully");
            this.text = '',
                this.vemail = '',
                this.tel = '',
                this.pass = '',
                this.cpass = ''

        },

        checkValue() {
            if (/[^a-zA-Z]/.test(this.input)) {
                this.error = 'Only letters are allowed';
            } else {
                this.error = '';
            }
        },
        validateEmail() {
            if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(this.vemail)) {
                this.error1 = '';
            }
            else {
                this.error1 = 'Please enter a valid email address';
            }
        },
        validateNumber() {
            if (/[6-9][0-9]{8}/.test(this.tel)) {
                this.error2 = '';
            } else {
                this.error2 = 'Please enter a valid phone number'
            }
        },
        validatePassword() {
            // if(pass==cpass){
            //     this.error3='';
            // }else{
            //     this.error3 = 'Password does not match'
            // }
            this.error3 = this.pass.length > 5 ? '' : "password must contains 6 characters"
        },
        validatePassword2() {
            if (this.pass === this.cpass) {
                this.error4 = '';
            } else {
                this.error4 = 'Password does not match'
            }
            // this.error4=this.pass===this.cpass ? '':"passwords match"
        }
    },
    //   watch: {
    //     email: function (val) {
    //         this.email = val;
    //         this.validateEmail(val);
    //     }
    // },



    // computed: {
    //   nameValidation(){
    //         if(/^[a-zA-Z]+(?:-[a-zA-Z]+)*$/.test(this.name)){
    //             return true
    //         }else{
    //             false
    //         }
    //    }
    // }
}
</script>
<style>
* {
    box-sizing: border-box;
    /* text-decoration: none; */
    /* text-align: center; */
    /* margin-left: 85px; */
}

body {
    /* background-color: #42b883 !important;
    min-height: 90vh;
    display: flex;
    font-weight: 400; */
    background-color: #7dcce6 !important;
}

body,
html,
.App,
.vue-tempalte,
.vertical-center {
    width: 100%;
    height: 100%;
}

.navbar-light {
    background-color: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}

.vertical-center {
    display: flex;
    text-align: left;
    justify-content: center;
    flex-direction: column;
}

.inner-block {
    width: 450px;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
}

.vertical-center .form-control:focus {
    border-color: #2554FF;
    box-shadow: none;
}

.vertical-center h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
}

label {
    font-weight: 500;
}

button {
    align-items: center;
    justify-content: center;
    margin-left: 1000px;
    margin: 10px;
    /* background-color: #109b17 */
}

.forgot-password,
.forgot-password a {
    text-align: center;
    /* font-size: 13px; */
    padding-top: 10px;
    color: #000000;
    margin: 0;
}

.forgot-password a {
    color: #2554FF;
}

.social-icons {
    text-align: center;
    font-family: "Open Sans";
    font-weight: 300;
    font-size: 1.5em;
    color: #222222;
}

.social-icons ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

*/
/* .social-icons ul li {
    display: inline-block;
    zoom: 1;
    width: 65px;
    vertical-align: middle;
    border: 1px solid #e3e8f9;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    margin-right: 5px;
    background: #f4f6ff;
}

.social-icons ul li a {
    display: block;
    font-size: 1.4em;
    margin: 0 5px;
    text-decoration: none;
} */

/* .social-icons ul li a i {
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -ms-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
}

.social-icons ul li a:focus i,
.social-icons ul li a:active i {
    transition: none;
    color: #222222;
} */

.nav-item {
    float: right;
}

button {
    align-items: center;

}

span {
    color: #ff0000;
}

.alert {
    padding: 5px;

    display: inline-block;
    color: red;

}
</style>