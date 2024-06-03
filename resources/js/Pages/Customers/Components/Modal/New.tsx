import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";

export default function New({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: any;
  isOpen: boolean;
}) {
  const { data, setData, post, processing, errors } = useForm({
    full_name: "",
    phone_number: "",
    email: "",
  });

  function submit(e) {
    e.preventDefault();
    post(route("customers.store"), {
      onError: (e) => console.log(e),
      onSuccess: () => setIsOpen(false),
    });
  }

  isOpen;

  return (
    isOpen && (
      <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
        <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
          <div className="w-full">
            <div className="m-8 my-20 max-w-[400px] mx-auto">
              <form onSubmit={submit}>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label
                        htmlFor="full_name"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="full_name"
                        id="full_name"
                        required
                        onChange={(e) => setData("full_name", e.target.value)}
                        placeholder="First Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      <span className="text-sm text-red-600 dark:text-red-400">
                        {errors.full_name}
                      </span>
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label
                        htmlFor="phone_number"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone_number"
                        id="phone_number"
                        onChange={(e) =>
                          setData("phone_number", e.target.value)
                        }
                        required
                        placeholder="Phone Number"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      <span className="text-sm text-red-600 dark:text-red-400">
                        {errors.phone_number}
                      </span>
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Email Address
                      </label>
                      <input
                        type="tel"
                        name="email"
                        id="email"
                        onChange={(e) => setData("email", e.target.value)}
                        placeholder="Email Address"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      <span className="text-sm text-red-600 dark:text-red-400">
                        {errors.email}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
