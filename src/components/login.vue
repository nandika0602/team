<template>
  <div class="vue-tempalte">

    <form>
      <h3>LOGIN</h3>

      <div class="form-group">
        <label>Email address </label>
        <span>*</span>
        <input type="email" v-model="email" class="form-control form-control-lg" required />
        <p v-if="error" class="alert">{{ error }}</p>

      </div>

      <div class="form-group">
        <label>Password</label>
        <span>*</span>
        <input type="password" v-model="password" class="form-control form-control-lg" required />
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-dark btn-lg btn-block">LOGIN</button>
      </div>
      <p class="dont">
        Don't have an account?
        <router-link :to="{ name: 'registration' }">SIGN UP</router-link>
      </p>
      <!-- <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>-->
    </form>
    <div class="App">
      <div class="vertical-center">
        <!-- <div class="inner-block"> -->
        <!-- <router-view /> -->
      </div>
    </div>
  </div>
  <!-- </div> -->

</template>
 
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    onSubmit(e) {
      this.error = '',
        e.preventDefault()
      const newObj = {
        email: this.email,
        password: this.password

      }
      console.log(newObj, " login successfully");
      this.email = ' ',
        this.password = ' '
    },
    validateEmail(value) {
      if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(value)) {
        this.error = '';
      }
      else {
        this.error = 'Please enter a valid email address';
      }
    }

  },
  watch: {
    email: function (val) {
      this.email = val;
      this.validateEmail(val);
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  /* text-align: center; */
  /* margin-left: 85px; */
}

body {
  background-color: #7dcce6 !important;

  /* background-color: #b1d8ef !important; */
  /* height: 100%; */
  /* background-position: center; */
  /* background-size: cover; */
  /* min-height: 100vh;
  display: flex;
  font-weight: 400; */
}

body,
html,
.App,
.vue-tempalte,
.vertical-center {
  width: 100%;
  height: 100%;
  /* background-color: #109b17; */
}

.alert {
  color: red;
  font-size: 20px;
}

.form div {
  justify-content: center;
  align-items: center;
}

button {
  align-items: center;
  justify-content: center;
  margin-left: 1000px;
  margin: 10px;
  background-color: #109b17
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
  padding-bottom: 30px;
}

label {
  font-weight: 500;
}

/* .forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #109b17;
  margin: 0;
} */

.forgot-password a {
  color: #2554FF;
}

button {
  padding-left: 1000px;
}

/* 
.form-group:after {
    content:" *";
    color: red;
  } */
span {
  color: #ff0000;
}

.dont {
  text-align: center;
}
</style>