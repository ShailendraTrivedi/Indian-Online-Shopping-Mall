export default function AddButton({ name, size, className, onClick }) {
  function buttonSize(size) {
    switch (size) {
      case "small":
        return "h-[32px] text-h6";
      case "medium":
        return "h-[48px] text-p";
      case "large":
        return "h-[64px] text-h5";
      default:
        return;
    }
  }
  return (
    <div className="px-[10px] w-full">
      <button
        type="submit"
        className={`flex w-full rounded-xl justify-center items-center ${buttonSize(
          size
        )} ${className}`}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
}
