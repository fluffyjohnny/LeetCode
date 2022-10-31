/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function (tasks, n) {
  // Count the occurence of each letter from A - Z in tasks
  const count = new Array(26).fill(0);
  for (const task of tasks) {
    const idx = task.charCodeAt(0) - "A".charCodeAt(0);
    count[idx] += 1;
  }
  // Sort count in descending order ... the largest task count is at index 0
  count.sort((a, b) => b - a);

  const maxTaskCount = count[0];

  // Find out how many cooldown slots the most frequent tasks requires
  let numCooldownSlots = (maxTaskCount - 1) * n;

  // Try and fill all the cooldown slots created by the most frequent tasks with other tasks
  for (let i = 1; i < count.length; ++i) {
    if (count[i] === maxTaskCount) {
      // Edge Case: If a task occurs maxTaskCount times then all but one of the tasks will fill a cooldown slot.
      numCooldownSlots -= count[i] - 1;
    } else {
      numCooldownSlots -= count[i];
    }
  }

  // The number of cooldown slots can go negative ... that simply means we've used them all up ... If it's negative let's clamp it to zero
  numCooldownSlots = Math.max(numCooldownSlots, 0);

  

  return tasks.length + numCooldownSlots;
};

console.log(leastInterval(["A", "A", "A", "B", "B", "Q"], 2));
