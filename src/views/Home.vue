<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col :cols="12" :md="6" :sm="6">
        <v-card class="pa-10 py-12">
          <v-form ref="form" v-model="valid" lazy-validation>
            <h2 class="text-center mb-8 grey--text">เข้าสู่ระบบ</h2>
            <v-text-field
              solo
              v-model="username"
              :rules="usernameRules"
              label="รหัสประจำตัว"
              prepend-icon="account_box"
              required
            ></v-text-field>

            <v-text-field
              solo
              v-model="password"
              prepend-icon="lock"
              :rules="passwordRules"
              :type="show1 ? 'text' : 'password'"
              label="รหัสผ่าน"
              required
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-btn
              block
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Login
            </v-btn>
          </v-form>
          <div class="pt-5">
            <a @click="goRegister">Register</a>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/*eslint-disable  */
export default {
  name: "Home",
  data: () => {
    return {
      valid: true,
      username: "",
      usernameRules: [(v) => !!v || "กรุณาป้อนรหัสประจำตัว"],
      password: "",
      passwordRules: [
        (v) => !!v || "กรุณาป้อนรหัสผ่าน",
        (v) =>
          (v && v.length >= 8) || "Password must be more thane 8 characters",
      ],
    };
  },
  methods: {
    validate() {
      const validateResult = this.$refs.form.validate();
      if (validateResult) {
        this.$axios({
          method: "post",
          url: "/login",
          data: {
            username: this.username,
            password: this.password,
          },
        })
          .then((res) => {
            if (res.data.status == "success") {
              alert("LOGIN SUCCESS");
              this.$router.push("/aboutme");
            } else {
              alert("LOGIN FAILED");
            }
          })
          .catch((e) => alert(e.message));
        // this.$router.push('/aboutme')
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.flexCenter {
  display: flex;
  background-color: red;
  flex-direction: column;
  flex: 1;
}
</style>
