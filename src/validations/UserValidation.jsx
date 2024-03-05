import * as yup from "yup";

export const userSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Required")
    .min(2, "First name must be at least 2 characters"),
  lastName: yup
    .string()
    .required("Required")
    .min(2, "Last name must be at least 2 characters"),
  email: yup.string().email("Email must be a valid email").required("Required"),
  phoneNumber: yup
    .string()
    .matches(
      /^\+(?:[0-9] ?){6,14}[0-9]$/,
      "Phone number is not valid. It should start with a '+' followed by country code and contain 7 to 15 digits."
    ),
  age: yup
    .number()
    .positive("Age must be a positive number")
    .integer()
    .min(0, "Age must be at least 0 years old")
    .max(150, "Age must be at most 150 years old"),
  address: yup.object().shape({
    line1: yup.string().min(2, "Street must be at least 2 characters"),
    line2: yup.string(),
    city: yup.string().min(2, "City must be at least 2 characters"),
    region: yup.string().min(2, "Region must be at least 2 characters"),
    zipCode: yup.string().min(2, "Zip Code must be at least 2 characters"),
    country: yup.string().min(2, "Country must be at least 2 characters"),
  }),
  emergencyContact: yup.object().shape({
    contactFirstName: yup
      .string()
      .required("Required")
      .min(2, "First name must be at least 2 characters"),
    contactLastName: yup
      .string()
      .required("Required")
      .min(2, "Last name must be at least 2 characters"),
    contactPhoneNumber: yup
      .string()
      .matches(
        /^\+(?:[0-9] ?){6,14}[0-9]$/,
        "Phone number is not valid. It should start with a '+' followed by country code and contain 7 to 15 digits."
      ),
  }),
});
