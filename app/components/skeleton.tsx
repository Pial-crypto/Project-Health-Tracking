// export function SkeletonList() {
//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="space-y-2">
//         <div className="h-8 w-64 shimmer rounded" />
//         <div className="h-4 w-96 shimmer rounded" />
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {[1, 2, 3].map((i) => (
//           <div key={i} className="h-28 rounded-xl shimmer" />
//         ))}
//       </div>

//       {/* Cards */}
//       <div className="space-y-4">
//         {[1, 2, 3, 4].map((i) => (
//           <SkeletonCard key={i} />
//         ))}
//       </div>
//     </div>
//   );
// }

export function SkeletonList() {
  return (
    <div className="rounded-xl border p-4 space-y-3">
      <div className="h-4 w-1/2 rounded shimmer" />
      <div className="h-3 w-3/4 rounded shimmer" />
      <div className="flex justify-between items-center">
        <div className="h-3 w-1/4 rounded shimmer" />
        <div className="h-8 w-24 rounded-md shimmer" />
      </div>
    </div>
  );
}
