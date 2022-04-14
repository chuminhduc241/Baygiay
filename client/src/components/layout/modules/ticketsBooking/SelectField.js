import React from "react";
import Select from "react-select";
import { FormGroup, Label, FormFeedback } from "reactstrap";
import { ErrorMessage } from "formik";
const SelectField = (props) => {
	const {
		field,
		options,
		placeholder,
		label,
		form,
		type,
		disabled,
		handelChang1,
	} = props;
	const { name, value } = field;
	const selectedOption = options.find((option) => option.value === value);
	const { errors, touched } = form;
	const showError = errors[name] && touched[name];
	const handleSeclectedOptionChange = (selectedOption) => {
		const selectedValue = selectedOption
			? selectedOption.value
			: selectedOption;
		const changeEvent = {
			target: {
				name: name,
				value: selectedValue,
			},
		};
		field.onChange(changeEvent);
		handelChang1({
			name: field.name,
			value: selectedValue,
		});
	};
	return (
		<FormGroup>
			<Label for={field.name}>{label}</Label>
			<Select
				id={name}
				{...field}
				value={selectedOption}
				onChange={handleSeclectedOptionChange}
				placeholder={placeholder}
				type={type}
				disabled={disabled}
				options={options}
				invalid={showError}
				className={showError ? 'is-invalid' : ''}
			/>
			{showError && <ErrorMessage name={name} component={FormFeedback} />}
		</FormGroup>
	);
};

export default SelectField;
