interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`bg-white border border-[#E2E8F0] rounded-lg shadow-md p-6 ${
        hover ? "transition-shadow duration-250 hover:shadow-xl" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
