interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  return <div className="relative px-5">{children}</div>;
}
