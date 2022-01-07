import VuexPersistence from 'vuex-persist'

export default ({store}) => {
    return new VuexPersistence({
        modules: ['rates']
    }).plugin(store);
}