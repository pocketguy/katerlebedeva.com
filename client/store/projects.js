function parseProject(project, lang) {
  let result = {}
  Object.keys(project).map(k => {
    if (k === 't') {
      const translation = project.t[lang];
      Object.keys(translation).map(k => result[k] = translation[k].trim())
      return;
    }
    result[k] = project[k];
  })
  return result;
}

export const state = () => {
  return {
    rawGrid: require('~/projects').default
  }
}

export const getters = {
  grid: (state) => (lang) => {
    let result = {};
    result.width = state.rawGrid.width;
    result.blocks = state.rawGrid.blocks.map(block => {
      let result = {};
      result.slug = block.slug;
      result.project = parseProject(block.project, lang);
      return result;
    })
    return result
  },
  get: (state) => (lang, slug) => {
    const block = state.rawGrid.blocks.find(block => block.slug === slug);
    if (block) {
      return parseProject(block.project, lang)
    }
    return null;
  }
 }
