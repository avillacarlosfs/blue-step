import SignUpForm from "../components/SignUpForm";
import axios from "axios";
import mockAPI from "../utils/MockAPI";
import { useState } from "react";
import { Alert } from "react-bootstrap";

function SignUp() {
  const [show, setShow] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (values, actions) => {
    try {
      const userData = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        age: values.age,
        address: {
          line1: values.address.line1,
          line2: values.address.line2,
          city: values.address.city,
          region: values.address.region,
          zipCode: values.address.zipCode,
          country: values.address.country,
        },
        emergencyContact: {
          contactFirstName: values.emergencyContact.contactFirstName,
          contactLastName: values.emergencyContact.contactLastName,
          contactPhoneNumber: values.emergencyContact.contactPhoneNumber,
        },
      };

      // axios
      //   .post("myfunapi.fake/user/signup", userData)
      //   .then((response) => {
      //     console[response.data.result ? "log" : "error"](
      //       response.data.message
      //     );
      //   })
      //   .catch((error) => {
      //     console.error("Error:", error.message);
      //   });

      console.log("User Data:", userData);

      const result = await mockAPI(userData);

      if (result) {
        setShow(true);
        setMessage(result.message);
      } else {
        setShow(false);
        setMessage(result.message);
        alert("Failed to submit user data. Please try again.");
      }
    } catch (error) {
      setShow(false);
      setMessage("Error submitting user data: ", error.message);
    } finally {
      actions.resetForm();
    }
  };

  return (
    <>
      {show && (
        <Alert
          variant={show ? "success" : "danger"}
          className="m-3"
          onClose={() => setShow(false)}
          dismissible
        >
          <b>{message}</b>
        </Alert>
      )}
      <div className="p-3 m-3 bg-light-subtle border border-light-subtle rounded-3">
        <h2 className="p-2">Sign Up</h2>
        <SignUpForm onSubmit={handleSubmit} />
      </div>
    </>
  );
}

export default SignUp;
