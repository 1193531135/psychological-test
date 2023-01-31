import Vue from 'vue'
import Vuex from 'vuex'
import base from './base'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state:{
        username:'ddd',
        questionBase:base
    },
    mutations:{
        modifyData(state,data){
            state[data.name] = data.newdata
        },
        watchForMD(state,data){
            if(data.constructor === Array){
                state.moveDialogState[data[0]] = data[1]
            }
            state.moveDialogState[data.name] = data.newdata
        },
        showDomConfig(state,obj){
            if(obj['type'] === 'add'){
                state.showDom.push(obj.data)
            }
        }
    }    
})