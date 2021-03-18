const path = require('path');



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
