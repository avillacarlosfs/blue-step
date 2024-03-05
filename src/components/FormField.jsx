// eslint-disable-next-line no-unused-vars
import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from 'prop-types';

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  error: PropTypes.string,
  touched: PropTypes.bool,
  type: PropTypes.string.isRequired,
};

function FormField({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
  type,
}) {
  return (
    <Form.Group controlId={name}>
      <Form.Label className="float-start">{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isInvalid={touched && !!error}
      />
      {touched && error && (
        <Form.Control.Feedback type="invalid" className="text-start">
          {error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export default FormField;
