module.exports = ({ name, directory }) => ({ registerTreeHandler }) => {

  registerTreeHandler(({ tree, globals }) => {

    // TODO: throw error if name or directory are undefined
    // TODO: resolve subdirectories, e.g. about/team -> children.about.children.team.children
    // TODO: throw error if directory doesn't exist
    globals[name] = tree.children[directory].children;

    return {tree, globals};

  });

}
