export const state = () => ({
    showOverlay: false
})

export const mutations = {
    toggleOverlay(state) {
        console.log('toggleOverlay')
        state.showOverlay = !state.showOverlay
    }
}