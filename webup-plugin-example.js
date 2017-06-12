const plugin = options => {
  return {
    /**
     * The first step of the build,
     * when webup has finished loading files,
     * calls each plugin it's load function.
     *
     * @param {file} file The file that is currently waiting to be pushed.
     * @param {string} file.path
     * @param {string|buffer} file.contents
     * @return {file} file
     */
    load: file => {
      return Promise.resolve(file);
      // return file; works also
    },

    html: file => {
      return Promise.resolve(file);
    },

    css: file => {
      return Promise.resolve(file);
    },

    js: file => {
      return Promise.resolve(file);
    }
  };
}
module.exports = plugin;
