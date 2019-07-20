<template>
  <v-container>
    <v-layout row wrap >
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <!-- xs12 full span for small devices sm6 half width for not smallest devices-->
        <v-btn large router to="/meetups" class="blue lighten-4">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetups/new" class="blue lighten-4">Organize Meetups</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-3">
      <v-flex xs12>
        <v-carousel style="cursor:pointer">
          <v-carousel-item v-for="meetup in meetups" 
          :src="meetup.imageUrl" 
          :key="meetup.id"
          @click="onLoadMeetup(meetup.id)">
          
            <div class="title">{{ meetup.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-3">
      <v-flex xs12 class="text-xs-center">
        <p>Join us!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      meetups: [
        {
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Louvre_2007_02_24_c.jpg/1280px-Louvre_2007_02_24_c.jpg",
          id: "loremipsum",
          title: "Meetup in Paris"
        },
        {
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/London_Thames_Sunset_panorama_-_Feb_2008.jpg/1280px-London_Thames_Sunset_panorama_-_Feb_2008.jpg",
          id: "fuegdsfciluwbcckvas",
          title: "Meetup in London"
        }
      ]
    };
  },
  methods: {
    onLoadMeetup (id) {
      this.$router.push('/meetups/' + id)

    }
  }
};
</script>

<style scoped>

.title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0, 0, 0, 0.459);
    color: white;
    font-size: 2em;
    padding: 20px;
}

</style>
 

