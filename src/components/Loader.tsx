interface LoaderProps {
  label?: string;
}

export default function Loader({ label = 'Carregando...' }: LoaderProps) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 py-10 text-gray-500"
      role="status"
    >
      <span className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
      <span className="text-sm">{label}</span>
    </div>
  );
}
