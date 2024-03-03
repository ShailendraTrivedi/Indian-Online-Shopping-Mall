import { Field } from "formik";

export default function AddInput({
    id,
    as,
    label,
    type,
    placeholder,
    className,
    value,
    disabled,
  }) {
    return (
      <div className="flex flex-col gap-2 w-full px-[10px]">
        <label htmlFor={id} className="font-semibold">
          {label}
        </label>
        <Field
          id={id}
          as={as}
          type={type}
          autoComplete={false}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          className={`bg-black5 p-[10px] focus:outline-none rounded-[10px] w-full ${className}`}
        />
      </div>
    );
  }