<template>
  <v-container>
    <v-layout row wrap>
      <v-flex x12>
        <v-card>
          <v-card-title>
            <h4 class="primary--text">My Meetup</h4>
          </v-card-title>
          <v-card-media
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Louvre_2007_02_24_c.jpg/1280px-Louvre_2007_02_24_c.jpg"
            height="400px"
          ></v-card-media>
          <v-card-text>
              <div class="info--text">20th July 2019 - Location</div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda 
                  consequuntur odit itaque ipsum quibusdam repellendus maxime ipsam. 
                  Voluptatem aut expedita architecto deleniti molestiae voluptates 
                  magni illo, illum, quos consectetur soluta?</div>
          </v-card-text>
          <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="primary">
                  Register
              </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
