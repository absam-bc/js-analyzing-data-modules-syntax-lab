


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

// index.js
// Author: Abdulsalam Ahmed
// Lab: Analyzing Data with Modules and Syntax (JS)

/**
 * Accepts multiple username arrays and combines them
 * into a single object containing the merge date and users.
 *
 * @param {...string[]} usernameArrays
 * @returns {{ merge_date: string, users: string[] }}
 */
function combineUsers(...usernameArrays) {
  validateInputs(usernameArrays);

  const users = mergeArrays(usernameArrays);
  const merge_date = getFormattedDate();

  return {
    merge_date,
    users
  };
}


function validateInputs(arrays) {
  arrays.forEach(arr => {
    if (!Array.isArray(arr)) {
      throw new TypeError("All inputs must be arrays of usernames.");
    }
  });
}

function mergeArrays(arrays) {
  return [].concat(...arrays);
}

function getFormattedDate() {
  const date = new Date();
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}



module.exports = {
  ...(typeof combineUsers !== "undefined" ? { combineUsers } : {})
};