interface Props {
  children: React.ReactNode;
}

export default function Button({ children }: Props) {
  return (
    <button className="bg-purple text-white text-sm font-bold rounded px-8 py-3">
      {children}
    </button>
  );
}
