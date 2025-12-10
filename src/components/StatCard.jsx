export default function StatCard({ label, value }) {
    return (
      <div className="bg-indigo-50 rounded-lg p-4 text-center">
        <div className="text-2xl font-semibold">{value}</div>
        <div className="text-xs text-gray-600">{label}</div>
      </div>
    );
  }
  