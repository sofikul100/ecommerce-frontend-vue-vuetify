<template>
  <div>
    <!--========HEADER COMPONENT START=========-->
    <Header /> 
    <!--========HEADER COMPONENT END=========-->

    <div class="py-6">
        <router-view></router-view>
    </div>


    <!--========FOOTER COMPONENT START=========-->

    <Footer />

    <!--========FOOTER COMPONENT END=========-->



   





















    <!-- <div class="text-center m-auto mt-2">
      <v-layout>
        <v-navigation-drawer v-model="drawer" temporary location="right">
          
          <div class="text-left">
            <h1 class="bg-sky-600 text-white px-1 py-4">Hello MD Rana</h1>
          </div>
        </v-navigation-drawer>
        <v-main>
          <div>
            <v-btn color="primary" @click.stop="drawer = !drawer">
              Open Drawer
            </v-btn>
          </div>
        </v-main>
      </v-layout>
    </div> -->

    <!-- <div class="text-center m-auto mt-6">
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="1024">
          <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props"> Open Modal </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">User Profile</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Legal first name*"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Legal middle name"
                      hint="example of helper text only on focus"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Legal last name*"
                      hint="example of persistent helper text"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Email*" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Password*"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      :items="['0-17', '18-29', '30-54', '54+']"
                      label="Age*"
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-autocomplete
                      :items="[
                        'Skiing',
                        'Ice hockey',
                        'Soccer',
                        'Basketball',
                        'Hockey',
                        'Reading',
                        'Writing',
                        'Coding',
                        'Basejump',
                      ]"
                      label="Interests"
                      multiple
                    ></v-autocomplete>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="dialog = false"
              >
                Close
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="dialog = false"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div> -->
  </div>
</template>
<script>
import { ref } from "vue";
import Header from "./components/layouts/Header.vue"
import Footer from "./components/layouts/Footer.vue"
export default {
  components:{
     Header,
     Footer
  },
  setup() {
    const drawer = ref(null);
    const dialog = ref(false);

    return { drawer, dialog };
  },
};
</script>




<style scoped>
</style>
