// Import the UserHelper library or create a mock of it
// import UserHelper from 'user-helper';
import UserHelper from "./helpers/UserHelper";


function mockAPI(userData) {
  //   const newUser = UserHelper.create();
  //   const {
  //     firstName,
  //     lastName,
  //     email,
  //     phoneNumber,
  //     age,
  //     address,
  //     emergencyContact,
  //   } = userData;
  //   newUser.setFirstName(firstName);
  //   newUser.setLastName(lastName);
  //   newUser.setEmail(email);
  //   newUser.setPhoneNumber(phoneNumber);
  //   newUser.setAge(age);
  //   newUser.setAddress(address);
  //   newUser.setEmergencyContact(emergencyContact);

  //   if (!firstName || !lastName) {
  //     return { message: "Name fields are required", result: false };
  //   }
  //   if (!email) {
  //     return { message: "Email field is required", result: false };
  //   }
  //   if (!emergencyContact.firstName || !emergencyContact.lastName) {
  //     return { message: "Emergency Name fields are required", result: false };
  //   }

  //   const userResult = UserHelper.save(newUser);
  const userResult = true;

  const message = userResult
    ? "User created successfully"
    : "Failed to save user";
  const result = userResult;

  return { message, result };
}

export default mockAPI;
