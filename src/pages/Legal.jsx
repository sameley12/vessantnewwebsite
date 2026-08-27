// Shared layout for the legal pages — matches the vs-legal styling from the
// existing GHL prototype (vessant-privacy-policy.html), rebuilt natively.
export function LegalPage({ title, updated, intro, children }) {
  return (
    <div className="mx-auto max-w-[760px] px-6 py-16 leading-relaxed text-navy-65">
      <h1 className="mb-2 text-4xl font-semibold text-navy">{title}</h1>
      <p className="mb-6 text-sm">Last updated: {updated}</p>
      <p className="mb-10 border-b border-navy-15 pb-8 text-lg text-navy">{intro}</p>
      {children}
      <div className="mt-11 rounded-md border border-navy-15 bg-navy-06 p-7">
        <p className="mb-1 font-semibold text-navy">Questions?</p>
        <p>
          Email{' '}
          <a href="mailto:hello@vessant.co.uk" className="text-cyan-deep underline">
            hello@vessant.co.uk
          </a>
        </p>
      </div>
    </div>
  );
}

export function H2({ children }) {
  return <h2 className="mb-3 mt-10 border-l-2 border-cyan pl-3 text-xl font-semibold text-navy">{children}</h2>;
}

export function H3({ children }) {
  return <h3 className="mb-2 mt-5 font-semibold text-navy">{children}</h3>;
}

export function Table({ head, rows }) {
  return (
    <table className="my-3 w-full border-collapse text-sm">
      <thead>
        <tr>
          {head.map((h) => (
            <th key={h} className="border border-navy-15 bg-navy-06 px-3 py-2 text-left text-navy">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} className="border border-navy-15 px-3 py-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
