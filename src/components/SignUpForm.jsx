import { Col, Form, Row, Button } from "react-bootstrap";
import { userSchema } from "../validations/UserValidation";
import { useFormik, getIn } from "formik";
import FormField from "./FormField";
import PropTypes from "prop-types";

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function SignUpForm({ onSubmit }) {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      age: "",
      address: {
        line1: "",
        line2: "",
        city: "",
        region: "",
        zipCode: "",
        country: "",
      },
      emergencyContact: {
        contactFirstName: "",
        contactLastName: "",
        contactPhoneNumber: "",
      },
    },
    validationSchema: userSchema,
    onSubmit,
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Col>
          <Row>
            <h5>Personal Information</h5>
          </Row>
          <Row className="mb-2">
            <Col>
              <FormField
                label="First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.firstName}
                touched={touched.firstName}
                type="text"
              />
            </Col>
            <Col>
              <FormField
                label="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.lastName}
                touched={touched.lastName}
                type="text"
              />
            </Col>
          </Row>
          <Row className="mb-2">
            <FormField
              label="Email Address"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched.email}
              type="email"
            />
          </Row>
          <Row className="mb-2">
            <FormField
              label="Phone Number"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.phoneNumber}
              touched={touched.phoneNumber}
              type="text"
            />
          </Row>
          <Row className="mb-2">
            <FormField
              label="Age"
              name="age"
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.age}
              touched={touched.age}
              type="number"
            />
          </Row>
        </Col>
        <Col>
          <Row>
            <h5>Address</h5>
          </Row>
          <Row className="mb-2">
            <Col>
              <FormField
                label="Street Address Line 1"
                name="address.line1"
                value={values.address.line1}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getIn(errors, "address.line1")}
                touched={getIn(touched, "address.line1")}
                type="text"
              />
            </Col>
          </Row>
          <Row className="mb-2">
            <FormField
              label="Street Address Line 2"
              name="address.line2"
              value={values.address.line2}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getIn(errors, "address.line2")}
              touched={getIn(touched, "address.line2")}
              type="text"
            />
          </Row>
          <Row className="mb-2">
            <Col>
              <FormField
                label="City"
                name="address.city"
                value={values.address.city}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getIn(errors, "address.city")}
                touched={getIn(touched, "address.city")}
                type="text"
              />
            </Col>
            <Col>
              <FormField
                label="Region"
                name="address.region"
                value={values.address.region}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getIn(errors, "address.region")}
                touched={getIn(touched, "address.region")}
                type="text"
              />
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <FormField
                label="Zip Code"
                name="address.zipCode"
                value={values.address.zipCode}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getIn(errors, "address.zipCode")}
                touched={getIn(touched, "address.zipCode")}
                type="text"
              />
            </Col>
            <Col>
              <FormField
                label="Country"
                name="address.country"
                value={values.address.country}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getIn(errors, "address.country")}
                touched={getIn(touched, "address.country")}
                type="text"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mb-2">
        <Row>
          <h5>Emergency Contact</h5>
        </Row>
        <Col>
          <Row className="mb-2">
            <Col>
              <FormField
                label="First Name"
                name="emergencyContact.contactFirstName"
                value={values.emergencyContact.contactFirstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getIn(errors, "emergencyContact.contactFirstName")}
                touched={getIn(touched, "emergencyContact.contactFirstName")}
                type="text"
              />
            </Col>
            <Col>
              <FormField
                label="Last Name"
                name="emergencyContact.contactLastName"
                value={values.emergencyContact.contactLastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getIn(errors, "emergencyContact.contactLastName")}
                touched={getIn(touched, "emergencyContact.contactLastName")}
                type="text"
              />
            </Col>
          </Row>
          <Row className="mb-2">
            <FormField
              label="Phone Number"
              name="emergencyContact.contactPhoneNumber"
              value={values.emergencyContact.contactPhoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getIn(errors, "emergencyContact.contactPhoneNumber")}
              touched={getIn(touched, "emergencyContact.contactPhoneNumber")}
              type="text"
            />
          </Row>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Button disabled={isSubmitting} type="submit" className="float-end">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SignUpForm;
