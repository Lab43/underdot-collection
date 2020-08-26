const path = require('path');



// TODO: throw error if name or directory are undefined
// TODO: resolve subdirectories, e.g. about/team -> children.about.children.team.children
// TODO: also make sure the slug has the full path
// TODO: throw error if directory doesn't exist

module.exports = ({ name, directory }) => ({ registerTreeHandler }) => {

  registerTreeHandler(({ tree, globals }) => {
    const pages = tree.children[directory].children;
    globals[name] = Object.keys(pages).map((slug) => {
      return {
        ...pages[slug],
        slug: path.join(directory, slug),
      };
    });
    return {tree, globals};
  });

}
