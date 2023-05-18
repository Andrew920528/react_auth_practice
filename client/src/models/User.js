import React from "react";

function User(id, username, password, firstName, lastName, age, lastModified) {
  this.id = id;
  this.username = username;
  this.password = password;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.lastModified = lastModified;
}

export default User;
