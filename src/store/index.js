import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            {
                imageUrl:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Louvre_2007_02_24_c.jpg/1280px-Louvre_2007_02_24_c.jpg",
                id: "loremipsum",
                title: "Meetup in Paris",
                date: '2019-01-20'
            },
            {
                imageUrl:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/London_Thames_Sunset_panorama_-_Feb_2008.jpg/1280px-London_Thames_Sunset_panorama_-_Feb_2008.jpg",
                id: "fuegdsfciluwbcckvas",
                title: "Meetup in London",
                date: '2019-01-22'
            }
        ],
        user : {
            id: 'weugafbiuflwulifcgliouwagfi',
            registeredMeetups :['fuegdsfciluwbcckvas']
        }


    },
    mutations: {},
    actions: {},
    getters: {
        loadedMeetups (state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },

        featuredMeetups (state, getters) {
            return getters.loadedMeetups.slice(0,5)
        },

        loadedMeetup (state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        }
    }
})