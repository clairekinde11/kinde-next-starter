import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import KindeLogo from "../app/assets/kinde.svg";
import NextLogo from "../app/assets/next.svg";
import Image from "next/image";

interface HeaderProps {
  showNav?: boolean;
}

export default async function Header({ showNav = true }: HeaderProps) {
  const { isAuthenticated } = getKindeServerSession();

  return (
    <header className="sticky top-0 z-10 border-[1px] border-b-[#f5f5f5] bg-white/70 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <a href="/" title="Go to the homepage">
          <Image src={KindeLogo} width={64} alt="Kinde logo" />
        </a>
        <svg height="32" viewBox="0 0 32 32" width="32">
          <path d="M22 5L9 28" stroke="#eaeaea" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit the Next.js website"
        >
          <Image src={NextLogo} width={90} alt="Next.js logo" />
        </a>
      </div>
      {showNav ? (
        <nav>
          <ul>
            {(await isAuthenticated()) ? (
              <li>
                <LogoutLink>Log out</LogoutLink>
              </li>
            ) : (
              <>
                <li>
                  <LoginLink className="button button-uncontained">Sign in</LoginLink>
                </li>
                <li>
                  <RegisterLink className="button">Register</RegisterLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      ) : (
        <div className="flex items-center gap-4">
          <a
            target="_blank"
            href="#"
            rel="noopener noreferrer"
            className="focus-visible:ring-ring border-input hover:bg-accent hover:text-accent-foreground bg-background inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border px-4 py-2 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="size-4"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>
            <span className="ml-2 hidden md:flex">GitHub</span>
          </a>
          <a
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmarcosmartini%2Fkinde-next-starter&env=KINDE_ISSUER_URL,KINDE_CLIENT_ID,KINDE_CLIENT_SECRET&envDescription=Environment%20variables%20needed&envLink=https%3A%2F%2Fdocs.kinde.com%2Fdeveloper-tools%2Fsdks%2Fbackend%2Fnextjs-sdk%2F%23configure-environment-variables&project-name=kinde-next-starter&repository-name=kinde-next-starter"
            target="_blank"
            className="focus-visible:ring-ring text-primary-foreground inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
          >
            <svg
              aria-label="Vercel logomark"
              role="img"
              viewBox="0 0 74 64"
              className="mr-2 size-4"
            >
              <path
                d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="hidden sm:block">Deploy to Vercel</span>
            <span className="sm:hidden">Deploy</span>
          </a>
        </div>
      )}
    </header>
  );
}
