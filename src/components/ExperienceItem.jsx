export default function ExperienceItem({ company, title, period, bullets }) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="text-sm text-indigo-600 font-medium">{company}</div>
          </div>
          <div className="text-sm text-gray-500">{period}</div>
        </div>
  
        <ul className="mt-3 ml-4 list-disc text-sm text-gray-700 space-y-1">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    );
  }
  