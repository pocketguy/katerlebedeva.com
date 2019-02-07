export const state = () => ({
    showOverlay: false
})

export const mutations = {
    toggleOverlay(state) {
        state.showOverlay = !state.showOverlay
    }
}