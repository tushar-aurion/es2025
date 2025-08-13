import module from "./modulebundle/module.json" with { type: "json" };
import css from "./modulebundle/module.css" with { type: "css" };

document.adoptedStyleSheets.push(css);
document.querySelector('a').textContent = module.title;

// Use Case 1

const activeUsers = new Set(['tgk', 'user2', 'user3']);
const adminUsers = new Set(['tgk']);

const activeAdmins = activeUsers.intersection(adminUsers);

const activeNonAdmins = activeUsers.difference(adminUsers);

const allactiveAdmins = adminUsers.isSubsetOf(activeUsers);

console.log(activeAdmins, 'activeAdmins');
console.log(activeNonAdmins, 'activeNonAdmins');
console.log(allactiveAdmins, 'allactiveAdmins');


// Use Case 2
const localItems = new Set(['item1', 'item2', 'item3']);
const remoteItems = new Set(['item4','nonexistantitem']);

const commonItems = localItems.intersection(remoteItems);
const uniqueLocalItems = localItems.difference(remoteItems);
const uniqueRemoteItems = remoteItems.difference(localItems);

const urondifferentsystem = localItems.isDisjointFrom(remoteItems);

console.log(commonItems, 'commonItems');
console.log(uniqueLocalItems, 'do not exist in remoteItems');
console.log(uniqueRemoteItems, 'To add in LocalItems');
console.log(urondifferentsystem, 'Is this user on different system?');


