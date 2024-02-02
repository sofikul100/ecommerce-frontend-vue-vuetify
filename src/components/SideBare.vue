<template>
  <v-app-bar color="#215486" height="40">
    <v-row>
      <v-col cols="5">
        <ul class="top_nav_ul">
          <li><v-btn class="topbar_leftside_button">COMPARE</v-btn></li>
          <li><v-btn class="topbar_leftside_button">MY ORDERS</v-btn></li>
          <li><v-btn class="topbar_leftside_button">ORDER TRACKING</v-btn></li>
          <li><v-btn class="topbar_leftside_button">CHECKOUT</v-btn></li>
        </ul>
      </v-col>
      <v-col cols="5">
        <v-btn class="discount_text_topbar" :ripple="false"
          >20% DISCOUNT ALL NEW CUSTOMERS</v-btn
        >
      </v-col>

      <v-col cols="2">
        <div>
          <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn color="white" v-bind="props" class="top_right_button"
                >ENGLISH
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title>English</v-list-item-title>
                <v-list-item-title>Hindi</v-list-item-title>
                <v-list-item-title>Bangla</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn color="white" v-bind="props" class="top_right_button"
                >DOLLER
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title>DOLLER</v-list-item-title>
                <v-list-item-title>TAKA</v-list-item-title>
                <v-list-item-title>RUPPE</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-col>
    </v-row>
  </v-app-bar>

  <v-app-bar height="90" flat color="#215486">
    <v-app-bar-title>
      <img src="../assets/logo-white.png" alt="" />
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-card color="#fff" flat outlined height="50" width="500" class="pt-1">
      <v-row>
        <v-col cols="12" sm="10">
          <v-text-field
            density="compact"
            placeholder="Search Producuts......"
            variant=""
            class=""
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-btn color="primary">
            <v-icon
              color="#0C3F71"
              icon="mdi mdi-magnify"
              size="large"
              class="mt-2 ml-4"
              id="search_icon"
            ></v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <v-spacer></v-spacer>
    <div>
      <span class="ml-4 text-caption text-sm" id="account">LOGIN / SIGNUP</span
      ><br />
      <v-btn append-icon="mdi mdi-lock-open-outline" class="account">
        My account
        <template v-slot:append>
          <v-icon></v-icon>
        </template>
      </v-btn>
    </div>

    <v-divider vertical inset class="mr-6"></v-divider>
    <div>
      <span class="ml-4 text-caption" id="favorite"> MY FAVORITE </span><br />
      <v-btn append-icon="mdi mdi-heart-outline" class="account">
        Wishlist
        <template v-slot:append>
          <v-icon></v-icon>
        </template>
      </v-btn>
    </div>
    <v-divider vertical inset class="mr-6"></v-divider>
    <v-badge content="9" color="white" class="mr-10">
      <v-icon size="35">mdi mdi-shopping-outline</v-icon>
    </v-badge>
  </v-app-bar>
  <v-app-bar height="60" flat color="#0C3F71">
    <v-btn variant="text" color="#2f6fae"> Home </v-btn>
    <v-btn variant="text" class="account"> Shop </v-btn>
    <v-btn variant="text" class="account"> Drinks </v-btn>
    <v-btn variant="text" class="account"> Blog </v-btn>
    <v-btn variant="text" class="account"> Contact US </v-btn>
    <v-btn variant="text" class="account"> Update To Pro </v-btn>
    <v-spacer></v-spacer>
    <v-btn
      density="comfortable"
      icon="mdi mdi-phone"
      class="phone mr-2"
    ></v-btn>
    <div>
      <span class="text-caption">CALL TO </span><br />
      <span class="text-grey text-caption mr-2" id="phone_number"
        >1800-231-124</span
      >
    </div>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
#phone_number {
  color: #fff !important;
  font-weight: 600;
}
#top_bar {
  padding: 15px 0px;
  border-bottom: 1px solid #2f6fae;
}

.topbar_leftside_button {
  font-size: 10px !important;
  font-weight: 600 !important;
}

.top_right_button {
  font-size: 10px !important;
  font-weight: 600 !important;
}

.discount_text_topbar {
  font-size: 10px !important;
  font-weight: 600 !important;
  cursor: default;
}

#account {
  font-size: 11px !important;
  letter-spacing: 1px !important;
}
#favorite {
  font-size: 11px !important;
  letter-spacing: 1px !important;
}

.top_nav_ul {
  display: flex;
  align-items: center;
  margin-left: 5px !important;
}

.top_nav_ul li {
  list-style: none;
}

.top_nav_ul li a {
  color: white;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
}

.account {
  transition-duration: 0.4s;
}
.account:hover {
  color: #65a9ec;
}
.phone {
  background-color: #215486 !important;
}
</style>
