import React from "react";
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";
import { ErrorMessage } from "formik";
const InputField = (props) => {
	const { field, placeholder, label, form, type, disabled, min } = props;
	const { name } = field;
	const { errors, touched } = form;
	const showError = errors[name] && touched[name];
	return (
		<FormGroup>
			<Label for={field.name}>{label}</Label>
			<Input
				id={name}
				{...field}
				placeholder={placeholder}
				type={type}
				disabled={disabled}
				invalid={showError}
				min={min}
			/>
			{showError && <ErrorMessage name={name} component={FormFeedback} />}
		</FormGroup>
	);
};

export default InputField;
