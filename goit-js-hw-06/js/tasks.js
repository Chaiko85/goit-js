"use strict";

import users from "./users.js";

//======================= TASK 1

const getUserNames = (users) => users.map((user) => user.name);

console.log(getUserNames(users));

//======================= TASK 2

const getUsersWithEyeColor = (users, color) =>
  users.filter((user) => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, "blue"));

//======================= TASK 3

const getUsersWithGender = (users, gender) =>
  users.filter((user) => user.gender === gender).map((user) => user.name);

console.log(getUsersWithGender(users, "male"));

//======================= TASK 4

const getInactiveUsers = (users) => users.filter((user) => !user.isActive);

console.log(getInactiveUsers(users));

//======================= TASK 5

const getUserWithEmail = (users, email) =>
  users.find((user) => user.email === email);

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));

//======================= TASK 6

const getUsersWithAge = (users, min, max) =>
  users.filter((user) => min < user.age && max > user.age);

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));

//======================= TASK 7

const calculateTotalBalance = (users) =>
  users.reduce((totalBalance, user) => totalBalance + user.balance, 0);

console.log(calculateTotalBalance(users));

//======================= TASK 8

const getUsersWithFriend = (users, friendName) =>
  users
    .filter((user) => user.friends.some((friend) => friend === friendName))
    .map((user) => user.name);

console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));

//======================= TASK 9

const getNamesSortedByFriendsCount = (users) =>
  users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);

console.log(getNamesSortedByFriendsCount(users));

//======================= TASK 10

const getSortedUniqueSkills = (users) => {
  const getSkills = users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);

    return allSkills;
  }, []);

  const filteredSkills = getSkills
    .filter((skill, idx) => getSkills.indexOf(skill) === idx)
    .sort();

  return filteredSkills;
};

console.log(getSortedUniqueSkills(users));
