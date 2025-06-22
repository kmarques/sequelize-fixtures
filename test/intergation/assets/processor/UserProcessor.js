module.exports = {
  default: class UserProcessor {
    postProcess(name, object) {
      object.name = `${object.firstName} ${object.lastName}`;
    }
  },
};
