/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
const accountsMerge = function (accounts) {
  const parent = {};
  const rank = {};

  const find = (x) => {
    // initialize parent and rank
    if (!parent[x]) {
      parent[x] = x;
      rank[x] = 0;
    }

    if (parent[x] === x) return parent[x];

    return (parent[x] = find(parent[x])); // path compression
  };

  const union = (x, y) => {
    const [X, Y] = [find(x), find(y)];

    if (X === Y) return; // same parent

    // union by rank
    if (rank[X] < rank[Y]) parent[X] = Y;
    else if (rank[Y] < rank[X]) parent[Y] = X;
    else {
      parent[Y] = X;
      rank[X]++;
    }
  };

  const map = {}; // email: name
  // lookup: map email to first name
  // Union-Find: on each email
  for (const [name, ...emails] of accounts) {
    for (const email of emails) {
      if (!map[email]) map[email] = name;

      union(email, emails[0]);
    }
  }

  const components = {}; // parent email: [emails]
  // from list of unique emails, map parent email to [emails]
  for (const email of Object.keys(parent)) {
    const root = find(email); // get parent of email

    if (!components[root]) components[root] = [email];
    else components[root].push(email);
  }

  const output = [];
  const componentList = Object.entries(components); // parent email: [emails]
  for (const [parent, emails] of componentList) {
    emails.sort();
    const name = map[parent];
    const account = [name, ...emails];

    output.push(account);
  }

  return output;
};

/**
 * *Time: O(N x K log N x K), N = number of accounts, K = max length of accounts
 * *Space: O(N x K)
 */
// Runtime: 183 ms, faster than 66.79% of JavaScript online submissions for Accounts Merge.
// Memory Usage: 54.2 MB, less than 66.97% of JavaScript online submissions for Accounts Merge.
const accountsMerge2 = (accounts) => {
  const visited = new Set();
  const adjacency = {};

  const traverse = (email, account) => {
    if (visited.has(email)) return; // skip visited

    // mark visited and add email to current component
    visited.add(email);
    account.push(email);

    // traverse all neightbors and add to same account
    for (const adjacent of adjacency[email]) {
      traverse(adjacent, account);
    }

    return account;
  };

  // create adjacency list
  for (const [, ...emails] of accounts) {
    for (const email of emails) {
      const parent = emails[0]; // set 1st email as parent

      // parent: [emails]
      if (!adjacency[parent]) adjacency[parent] = [email];
      else adjacency[parent].push(email);

      // email: [parent]
      if (!adjacency[email]) adjacency[email] = [parent];
      else adjacency[email].push(parent);
    }
  }

  const output = [];
  for (const [name, ...emails] of accounts) {
    const parent = emails[0];

    if (visited.has(parent)) continue;

    // find all components connected to parent
    const account = traverse(parent, []);

    account.sort();
    output.push([name, ...account]);
  }

  return output;
};
