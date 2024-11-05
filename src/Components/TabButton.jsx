export default function TabButton({ onSelect, children, isSelected }) {
  return (
    <li>
      <button onClick={onSelect} className={isSelected ? "active" : undefined}>
        {children}
      </button>
    </li>
  );
}
