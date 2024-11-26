function Input({
  className,
  placeholder,
  name,
  value,
  defaultValue,
  onChange,
  required,
}) {
  return (
    <input
      className={`input ${className}`}
      placeholder={placeholder}
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      required={required}
    />
  );
}

export default Input;
