<template>
  <v-container fill-height fluid>
    <v-row justify="center" align="center">
      <v-col :cols="12" :sm="6" :md="8">
        <v-card class="pa-10 py-12">
          <v-form ref="form" v-model="valid" lazy-validation>
            <h2 class="text-center mb-5">ลงทะเบียน</h2>
            <v-text-field
              filled
              v-model="firstname"
              :error-messages="firstnameErrors"
              label="ชื่อ"
              required
            ></v-text-field>

            <v-text-field
              filled
              v-model="lastname"
              :error-messages="lastnameErrors"
              label="นามสกุล"
              required
            ></v-text-field>

            <v-text-field
              filled
              v-model="password"
              :rules="[(v) => !!v || 'กรุณาใส่รหัส']"
              label="รหัสประจำตัว"
              type="id"
              append-icon="assignment_ind"
              required
            ></v-text-field>

            <v-text-field
              filled
              v-model="password"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[(v) => !!v || 'กรุณาใส่รหัส']"
              label="รหัสผ่าน"
              :type="show2 ? 'text' : 'password'"
              required
              @click:append="show2 = !show2"
            ></v-text-field>

            <h4 class="mb-5">สถานะ</h4>
            <v-radio-group v-model="row" row>
              <v-radio label="อาจารย์" value="radio-1"></v-radio>
              <v-radio label="เจ้าหน้าที่" value="radio-2"></v-radio>
            </v-radio-group>

            <v-text-field
              filled
              v-model="password"
              :rules="[(v) => !!v || 'กรุณาใส่รหัส']"
              label="รหัสคณะ"
              type="password"
              append-icon="assignment_ind"
              required
            ></v-text-field>

            <v-text-field
              filled
              v-model="first"
              :error-messages="Errors"
              label="คณะ"
              required
            ></v-text-field>

            <v-text-field
              filled
              v-model="first"
              :error-messages="Errors"
              label="สาขา"
              required
            ></v-text-field>

            <v-select
              filled
              v-model="adress"
              :error-messages="Errors"
              label="อาคาร-ห้อง"
              required
            ></v-select>

            <div class="text-center">
              <v-btn class="red white--text mr-10" @click="submit">
                ลงทะเบียน
              </v-btn>
              <v-btn class="red white--text" @click="submit"> ย้อนกลับ </v-btn>
            </div>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/*eslint-disable*/
export default {
  name: "Register",
  data: () => {
    return {
      adress:"[]",
      show2: false,
    };
  },
};
</script>
