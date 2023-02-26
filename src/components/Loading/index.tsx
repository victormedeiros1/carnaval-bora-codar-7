import "./styles.css";

export default function Loading() {
  return (
    <div className="loading-wrap">
      <svg className="loading" viewBox="22 22 44 44">
        <circle
          className="loading__circle"
          stroke="#6246EA"
          stroke-width="3.6"
          fill="transparent"
          r="20.2"
          cx="44"
          cy="44"
        />
      </svg>
    </div>
  );
}
