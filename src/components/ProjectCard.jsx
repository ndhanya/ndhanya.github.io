export default function ProjectCard({
  logo,        // new prop for company logo
  title,
  subtitle,
  description,
  tags,
  }) {
  return ( <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-shadow">
  {logo && ( <img
         src={logo}
         alt={title}
         className="h-36 w-full object-contain rounded-md bg-white p-2"
       />
  )}
  
 
    <h4 className="mt-4 font-semibold">{title}</h4>
    <div className="text-sm text-gray-500">{subtitle}</div>
    <p className="mt-2 text-sm text-gray-700">{description}</p>
  
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((t, i) => (
        <span
          key={i}
          className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded"
        >
          {t}
        </span>
      ))}
    </div>
  </div>
  
  );
  }
  