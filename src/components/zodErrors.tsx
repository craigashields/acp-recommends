type ZodErrorsProps = { error?: string[] | null };

export function ZodErrors({ error }: ZodErrorsProps) {
  if (!error || error.length === 0) return null;
  return (
    <>
      {error.map((err: string, index: number) => (
        <div key={index} className="text-pink-500 text-xs italic ">
          {err}
        </div>
      ))}
    </>
  );
}
