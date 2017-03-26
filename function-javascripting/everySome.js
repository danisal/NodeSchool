function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function (subUsers) {
      return goodUsers.some(function (gUsers) {
        return subUsers.id === gUsers.id;
      });
    });
  };
}

module.exports = checkUsersValid;
