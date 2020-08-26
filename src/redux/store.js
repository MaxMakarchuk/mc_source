import {createStore} from 'redux'

const SET_PLAYER_ONE = 'SET_PLAYER_ONE_NAME'
const SET_PLAYER_TWO = 'SET_PLAYER_TWO_NAME'

let initialState = {
   playerOne: null,
   playerTwo: null,
   data:[{ id: 1, name: 'Baraka' }, { id: 2, name: 'Cassie' }, { id: 3, name: 'Cyrax' }, { id: 4, name: 'Ermac' },
   { id: 5, name: 'Geras' }, { id: 6, name: 'Jade' }, { id: 7, name: 'JhonnyCage' }, { id: 8, name: 'Kenshi' },
   { id: 9, name: 'Kintaro' }, { id: 10, name: 'Kitana' }, { id: 11, name: 'Kollector' }, { id: 12, name: 'KungJin' },
   { id: 13, name: 'KungLao' }, { id: 14, name: 'NoobSaibot' }, { id: 15, name: 'Scorpion' }, { id: 16, name: 'ShaoKhan' },
   { id: 17, name: 'Smoke' }, { id: 18, name: 'Sonya' }, { id: 19, name: 'Spawn' }, { id: 20, name: 'SubZero' },
   { id: 21, name: 'Takeda' }]
};

export const mcReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PLAYER_ONE:
            return{
                ...state, playerOne:{...action.playerOne}
                
            }
        case SET_PLAYER_TWO:
            return{
                ...state, playerTwo:{...action.playerTwo}
            }
        default:
            return state
    }
};

export const setPlayerOne = (playerOne) => ({type: SET_PLAYER_ONE, playerOne})
export const setPlayerTwo = (playerTwo) => ({type: SET_PLAYER_TWO, playerTwo})

let store = createStore(mcReducer)

export default store;