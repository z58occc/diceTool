function FormField({
  id,
  label,
  type = "text",
  className = "",
  ...inputProps
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="form-label fs-7 text-muted mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="form-control form-control-lg"
        {...inputProps}
      />
    </div>
  );
}

export default FormField;
