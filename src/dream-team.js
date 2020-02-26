module.exports = function createDreamTeam(members) {

  if (!Array.isArray(members)) return false;
  let filteredMembers = members.filter(function(name){
    if (typeof(name) === 'string') {
    return true};
  })

  let trimMembers =  filteredMembers.map(function(name) {
    trimName = name.trim();
    return trimName[0].toUpperCase();
  });

  trimMembers.sort();
  return trimMembers.join('');
};