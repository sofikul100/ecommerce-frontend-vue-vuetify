<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.colors.primary }">
    <v-main>
      <SideBare />
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="3">
            <v-row>
              <v-col cols="12" sm="12">
                <v-expansion-panels v-model="panel" id="panel-ex">
                  <v-expansion-panel id="categries_panel">
                    <v-expansion-panel-title
                      style="font-size: 13px; background: #0c3f71"
                      class="text-white"
                      ><v-icon icon="mdi mdi-menu" class="ml-n4 mr-1"> </v-icon
                      >BROWSE CATEGORIES
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <v-list  density="compact">
                        <v-list-item
                          v-for="(item, i) in items"
                          :key="i"
                          :value="item"
                          color="#000"
                          variant="plain"
                          class="ml-n2"
                          id="category_single_item"
                        >
                          <v-list-item-title
                            v-text="item.text"
                            class="text-caption"
                            id="category_list_item"
                          ></v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="9">
            <v-row>
              <!-- CAROUSEL -->
              <v-col cols="12" sm="12">
                <v-carousel show-arrows="hover" cycle class="rounded">
                  <v-carousel-item :src="slide1" cover></v-carousel-item>
                  <v-carousel-item :src="slide2" cover></v-carousel-item>
                </v-carousel>
              </v-col>
              <!-- END CAROUSEL -->
            </v-row>
          </v-col>
        </v-row>

        <!-- products -->
        <v-row>
          <v-col cols="12" sm="12">
            <v-toolbar color="#fff">
              <v-toolbar-title
                >Safe and on time home deliveries</v-toolbar-title
              >

              <v-spacer></v-spacer>

              <v-btn color="primary" class="btn"> View Offers </v-btn>
            </v-toolbar>
          </v-col>
          <v-col cols="12" sm="12">
            <v-card  flat>
              <v-tabs v-model="tab"  align-tabs="end">
                <v-tab :value="1">Desserts</v-tab>
                <v-tab :value="2">Drinks</v-tab>
                <v-tab :value="3">Pasta</v-tab>
              </v-tabs>
              <v-window v-model="tab">
                <v-window-item v-for="n in 3" :key="n" :value="n">
                  <v-container fluid>
                    <v-row>
                      <v-col
                        v-for="(dishe, i) in dishes"
                        :key="i"
                        cols="12"
                        md="3"
                      >
                        <v-hover
                          v-slot="{ isHovering, props }"
                          open-delay="200"
                        >
                          <v-card class=""  v-bind="props">
                            <v-img
                              height="90"
                              :src="dishe.image"
                              class="mt-6"
                            ></v-img>
                            <v-card-item class="text-center mt-14">
                              <v-card-subtitle>
                                <span class=" ">{{ dishe.name }}</span>
                              </v-card-subtitle>
                              <v-card-title class="text-caption text-white">{{
                                dishe.money
                              }}</v-card-title>
                            </v-card-item>
                            <v-expand-transition>
                              <div
                                v-if="isHovering"
                                class="d-flex transition-fast-in-fast-out  v-card--reveal text-h2"
                                style="height: 100%"
                              >
                                <v-btn
                                  density="compact"
                                  icon="mdi mdi-magnify"
                                  class="mr-2"
                                ></v-btn>
                                <v-btn
                                  density="compact"
                                  icon="mdi mdi-heart-outline"
                                  class="mr-2"
                                ></v-btn>
                                <v-btn
                                  density="compact"
                                  icon="mdi mdi-sync"
                                ></v-btn>
                              </div>
                            </v-expand-transition>
                          </v-card>
                        </v-hover>
                      </v-col>
                      <v-toolbar color="transparent">
                        <v-toolbar-title class="populer_product_text"
                          > POPULER PRODUCTS </v-toolbar-title
                        >
                        <v-spacer></v-spacer>
                      </v-toolbar>
                      <v-col cols="12" sm="12">
                        <v-sheet
                          class="mx-auto"
                          elevation="8"
                        
                        >
                          <v-slide-group
                            v-model="model"
                            class="pa-4"
                            center-active
                            show-arrows
                          >
                            <v-slide-group-item
                              v-for="(dishe, i) in dishes"
                              :key="i"
                              v-slot="{ isSelected, toggle }"
                            >
                              <v-card
                                :color="isSelected ? 'primary' : '#fff'"
                                class="ma-4"
                                height="100"
                                width="200"
                                @click="toggle"
                              >
                                <v-row>
                                  <v-col cols="12" sm="6">
                                    <v-img
                                      height="100"
                                      :src="dishe.image"
                                      class="ml-5"
                                    ></v-img>
                                  </v-col>
                                  <v-col
                                    cols="12"
                                    sm="6"
                                    class="text-center mt-6"
                                  >
                                    <span class=" ">{{ dishe.name }}</span>

                                    <h5 class="text-caption text-orange">
                                      {{ dishe.money }}
                                    </h5>
                                  </v-col>
                                </v-row>
                                <div
                                  class="d-flex fill-height align-center justify-center"
                                >
                                  <v-scale-transition>
                                    <v-icon
                                      v-if="isSelected"
                                      color="white"
                                      size="48"
                                      icon="mdi-close-circle-outline"
                                    ></v-icon>
                                  </v-scale-transition>
                                </div>
                              </v-card>
                            </v-slide-group-item>
                          </v-slide-group>
                        </v-sheet>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import SideBare from "@/components/SideBare.vue";
import Footer from "@/components/Footer.vue";
import slide1 from "../assets/slider-1.jpeg";
import slide2 from "../assets/slider2.jpeg";
</script>
<script>
export default {
  data: () => ({
    panel: [0],
    disabled: false,
    tab: null,
    model: null,
    items: [
      { text: "Accessories" },
      { text: "Pharmacy" },
      { text: "Personal Equipment" },
      { text: "Health & Nutrition" },
      { text: "Blood Pressure" },
      { text: "Diagnostic Sets" },
      { text: "Microscope" },
      { text: "Needle & Syringes" },
      { text: "Health & Beauty" },
      { text: "OT Therapy" },
    ],
    products: [
      {
        title: "Pizza",
        subtitle: "$800.00",
        image: "3.png",
      },
      {
        title: "Cheese",
        subtitle: "$300.00",
        image: "11.png",
      },
      {
        title: "Drink",
        subtitle: "$200.00",
        image: "20.png",
      },
      {
        title: "Drink2",
        subtitle: "$180.00",
        image: "21.png",
      },
      {
        title: "Dessert",
        subtitle: "$120.00",
        image: "7.png",
      },
    ],
    offers: [
      {
        title: "Join Risk Free",
        subtitle: "30 days refund ",
        icon: "mdi mdi-diamond-stone",
      },
      {
        title: "100% SAfe",
        subtitle: "Secure Shopping",
        icon: "mdi mdi-anchor",
      },
      {
        title: "24x7 Support",
        subtitle: "Online 24 hours",
        icon: "mdi mdi-coffee",
      },
      {
        title: "Best Offers",
        subtitle: "Grab Now",
        icon: "mdi mdi-basket",
      },
      {
        title: "Free Shiping",
        subtitle: "On all order over",
        icon: "mdi mdi-airplane",
      },
    ],
    dishes: [
      { image: "f1.png", name: "Plat unique", money: "$10.00" },
      { image: "f2.png", name: "Plat africains", money: "$25.00" },
      { image: "f3.png", name: "Plat de viand", money: "$15.00" },
      { image: "f4.png", name: "Rajthan", money: "$23.00" },
      { image: "f5.png", name: "The messy house", money: "$10.00" },
      { image: "f6.png", name: "The frenchy", money: "$25.00" },
      { image: "f7.avif", name: "Resse", money: "$15.00" },
      { image: "44.png", name: "Gratin", money: "$23.00" },
    ],
  }),
};
</script>
<style scoped>

.populer_product_text{
   font-weight: 700;
   color:#215486
}

.co {
  background-color: #1f1f1f;
}
.tb {
  background-color: #2f2f2f;
}



.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}


#category_list_item {
	font-size: 14px !important;
	font-weight: 400;
	color: #000 !important;
}



</style>
