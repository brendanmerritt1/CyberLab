import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { useMemo, useState, useEffect } from 'react';

export default function Table({ data }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const rankedData = useMemo(() => {
    return data
      .slice()
      .sort((a, b) => b.points - a.points)
      .map((item, index) => ({ ...item, place: index + 1 }));
  }, [data]);

  const columns = useMemo(() => {
    if (isMobile) {
      return [
        {
          accessorKey: 'username',
          header: 'Username',
        },
        {
          accessorKey: 'points',
          header: 'Total Points',
        },
      ];
    }
    return [
      {
        accessorKey: 'place',
        header: 'Ranked Place',
      },
      // {
      //   accessorKey: 'id',
      //   header: 'ID',
      // },
      {
        accessorKey: 'username',
        header: 'Username',
      },
      {
        accessorKey: 'points',
        header: 'Total Points',
        enableSorting: true,
      },
    ];
  }, [isMobile]);

  const table = useReactTable({
    data: rankedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const getPlaceColor = (place) => {
    if (place === 1) return 'text-yellow-300';
    if (place === 2) return 'text-[#C0C0C0]';
    if (place === 3) return 'text-orange-400';
    return '';
  };

  return (
    <div className="mt-5 overflow-x-auto mobile:w-full laptop:w-4/5 desktop:w-2/3">
      <table className="w-full border border-gray-300">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border-b border-gray-300 bg-[#1f2545] px-4 py-2 text-center"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className={`even:bg-[#58659f] hover:bg-[#8884d8] ${getPlaceColor(row.original.place)}`}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border-b border-gray-300 px-4 py-2 text-center"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
