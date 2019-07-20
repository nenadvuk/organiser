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
                date: new Date(),
                location: 'Paris',
                description: "Let's go to Paris "
            },
            {
                imageUrl:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/London_Thames_Sunset_panorama_-_Feb_2008.jpg/1280px-London_Thames_Sunset_panorama_-_Feb_2008.jpg",
                id: "fuegdsfciluwbcckvas",
                title: "Meetup in London",
                date: new Date(),
                location: 'London',
                description: 'London callin'
            }
        ],
        user : {
            id: 'weugafbiuflwulifcgliouwagfi',
            registeredMeetups :['fuegdsfciluwbcckvas']
        }


    },

    mutations: {
        createMeetup (state, payload) {
            state.loadedMeetups.push(payload)
        }
    },
    actions: {
        createMeetup ({ commit }, payload) {
            const meetup = {
                title: payload.title,
                location: payload.location,
                imageUrl: payload.imageUrl,
                description: payload.description,
                date: payload.date,
                id: 'ofh23lhb54io238y4t73t3f2'
            }
            // Reach out to firebase and store it
            commit('createMeetup', meetup)
        }
    },

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