const path = require('path');



// TODO: throw error if name or directory are undefined
// TODO: resolve subdirectories, e.g. about/team -> children.about.children.team.children
// TODO: also make sure the slug has the full path
// TODO: throw error if directory doesn't exist
// TODO: what happens if there is no metadata? does the desctructring throw an error?

module.exports = ({ name, directory }) => ({ registerTreeHandler }) => {

  registerTreeHandler(({ tree, globals }) => {
    const pages = tree.children[directory].children;
    globals[name] = Object.keys(pages).map((slug) => {
      // return an object with the extracted metadata, full slug, body, and any other properties on the page object
      const {metadata, ...page} = pages[slug];
      return Object.assign(page, metadata, {slug: path.join(directory, slug)});
    });
    return {tree, globals};
  });

}
