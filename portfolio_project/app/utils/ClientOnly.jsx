export default function ClientOnly({ children, ...delegated }) {
  if (typeof window === "undefined") {
    return null;
  }

  return <div {...delegated}>{children}</div>;
}