import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <main className="mx-auto grid h-full max-w-3xl animate-fade-in-up place-items-center px-4 py-20 opacity-0 md:px-8">
      <div className="grid place-items-center gap-20">
        <h1 className="max-w-[12ch] text-center">Auth for modern applications</h1>
        <section className="pb-20">
          <div className="mb-6 flex items-center">
            <h2 className="mx-auto inline rounded bg-purple-100 px-2 py-1 text-center text-sm text-purple-700">
              First things first
            </h2>
          </div>
          <ol className="grid grid-cols-1 gap-6">
            <li className="step-card">
              <label
                htmlFor="enable-auth"
                className="group flex cursor-pointer flex-col gap-4 p-8 has-[:checked]:line-through"
              >
                <h3 className="group-has-[:checked]:opacity-50">
                  <span className="mr-6 inline-block h-7 w-7 rounded-full bg-black text-center text-white">
                    1
                  </span>
                  Enable authentication
                </h3>
                <ol className="ml-14 list-inside list-[upper-alpha] space-y-2 group-has-[:checked]:opacity-50">
                  <li>
                    In Kinde, go to{" "}
                    <strong>{"Settings > Applications > [Your app] > Authentication"}</strong>.
                  </li>
                  <li>
                    Enable at least one authentication method (e.g. <em>Email + code</em>).
                  </li>
                  <li>
                    Select <strong>Save</strong>.
                  </li>
                </ol>
                <input
                  id="enable-auth"
                  type="checkbox"
                  className="relative bottom-0 ml-auto h-6 w-6 appearance-none rounded border-[1px] border-black transition duration-150 after:relative after:block after:scale-0 after:content-[url('data:image/svg+xml,%3Csvg%20fill%3D%22none%22%20aria-hidden%3D%22true%22%20focusable%3D%22false%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20stroke%3D%22white%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M5%2011.75%2010.499%2017%2021%207%22%2F%3E%0A%3C%2Fsvg%3E%0A')] checked:bg-black checked:after:scale-100"
                />
              </label>
            </li>
            <li className="step-card">
              <label
                htmlFor="callbacks"
                className="group flex cursor-pointer flex-col gap-4 p-8 has-[:checked]:line-through"
              >
                <h3 className="group-has-[:checked]:opacity-50">
                  <span className="mr-6 inline-block h-7 w-7 rounded-full bg-black text-center text-white">
                    2
                  </span>
                  Set callback URLs
                </h3>
                <ol className="ml-14 list-inside list-[upper-alpha] space-y-2 group-has-[:checked]:opacity-50">
                  <li>
                    In Kinde, go to{" "}
                    <strong>{"Settings > Applications > [Your app] > View details"}</strong>.
                  </li>
                  <li>
                    Add your <strong>callback URLs</strong> in the relevant fields. For example:
                    <ul className="my-4 ms-5 mt-3 list-inside list-disc space-y-6">
                      <li className="mt-4">
                        <strong>Allowed callback URLs</strong>:
                        <ul className="my-2 space-y-2 overflow-x-auto text-nowrap rounded-md border border-slate-100 bg-slate-50 p-5 font-mono text-[13px]">
                          <li>http://localhost:3000/api/auth/kinde_callback</li>
                          {process.env.VERCEL && (
                            <>
                              <li>
                                {`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/api/auth/kinde_callback`}
                              </li>
                              <li>
                                https://*<strong>[your-vercel-slug]</strong>
                                .vercel.app/api/auth/kinde_callback
                              </li>
                            </>
                          )}
                        </ul>
                      </li>
                      <li>
                        <strong>Allowed logout redirect URLs</strong>:
                        <ul className="my-2 space-y-2 overflow-x-auto text-nowrap rounded-md border border-slate-100 bg-slate-50 p-5 font-mono text-[13px]">
                          <li>http://localhost:3000</li>
                          {process.env.VERCEL && (
                            <>
                              <li>{`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`}</li>
                              <li>
                                https://*<strong>[your-vercel-slug]</strong>
                                .vercel.app
                              </li>
                            </>
                          )}
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Select <strong>Save</strong>.
                  </li>
                </ol>
                <input
                  id="callbacks"
                  type="checkbox"
                  className="relative bottom-0 right-0 ml-auto h-6 w-6 appearance-none rounded border-[1px] border-black transition duration-150 after:relative after:block after:scale-0 after:content-[url('data:image/svg+xml,%3Csvg%20fill%3D%22none%22%20aria-hidden%3D%22true%22%20focusable%3D%22false%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20stroke%3D%22white%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M5%2011.75%2010.499%2017%2021%207%22%2F%3E%0A%3C%2Fsvg%3E%0A')] checked:bg-black checked:after:scale-100"
                />
              </label>
            </li>
            <li className="step-card p-8">
              <div className="flex items-center justify-between">
                <h3>
                  <span className="mr-6 inline-block h-7 w-7 rounded-full bg-black text-center text-white">
                    3
                  </span>
                  Get building!
                </h3>
                <div className="flex gap-4">
                  <LoginLink className="button button-uncontained text-base">Log in</LoginLink>
                  <RegisterLink className="button text-base">Register</RegisterLink>
                </div>
              </div>
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}
