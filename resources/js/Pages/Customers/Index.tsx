import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import New from "./Components/Modal/New";
import { useState } from "react";

interface Record {
  id: String;
  full_name: String;
  phone_number: String;
  email?: String;
}

interface _PageProps extends PageProps {
  records: Record[];
}

export default function Index({ auth, records }: _PageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Customers
          </h2>
          <div>
            <button
              onClick={() => setIsOpen(true)}
              className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
            >
              <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full" />
              <span className="relative text-black group-hover:text-white">
                Add Customer!
              </span>
            </button>
          </div>
        </div>
      }
    >
      <Head title="Customers" />
      <New isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <table className="min-w-full bg-white shadow-md rounded-xl">
              <thead>
                <tr className="bg-blue-gray-100 text-gray-700">
                  <th className="py-3 px-4 text-left">ID</th>
                  <th className="py-3 px-4 text-left">Full Name</th>
                  <th className="py-3 px-4 text-left">Phone</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="text-blue-gray-900">
                {records &&
                  records.map((record) => (
                    <tr
                      key={record.id}
                      className="border-b border-blue-gray-200"
                    >
                      <td className="py-3 px-4">{record.id}</td>
                      <td className="py-3 px-4">{record.full_name}</td>
                      <td className="py-3 px-4">{record.phone_number}</td>
                      <td className="py-3 px-4">{record.email}</td>
                      <td className="py-3 px-4 space-x-2">
                        <button className="p-2 rounded font-medium text-white bg-blue-500">
                          Edit
                        </button>
                        <button className="p-2 rounded font-medium text-white bg-red-500">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
