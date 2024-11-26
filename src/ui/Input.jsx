function Input({ className, placeholder, name, value, onChange, required }) {
  return (
    <input
      className={`input ${className}`}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}

export default Input;
