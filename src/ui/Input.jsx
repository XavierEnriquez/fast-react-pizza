function Input({
  className,
  type,
  placeholder,
  name,
  id,
  value,
  defaultValue,
  onChange,
  required,
}) {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      required={required}
    />
  );
}

export default Input;
