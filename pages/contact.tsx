import { Inter } from "next/font/google";
import Link from "next/link";
import { MainLayout } from "../Components/Layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });
export default function () {
  return (
    <>
      <MainLayout>
        <div className="description">
          <p>
            Get started by editing&nbsp;
            <code className="code">pages/Contact.js</code>
          </p>

          <Link href="/" className="card" rel="noopener noreferrer">
            <h2 className={inter.className}>
              Ir a Home <span>-&gt;</span>
            </h2>
          </Link>
        </div>
      </MainLayout>
    </>
  );
}
