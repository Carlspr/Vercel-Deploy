import { MainLayout } from "../../Components/Layout/MainLayout";
import { Inter } from "next/font/google";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });
export default function () {
  return (
    <>
      <MainLayout>
        <div className="description">
          <p>
            Get started by editing&nbsp;
            <code className="code">pages/Pricing.js</code>
          </p>

          <Link href="/about" className="card" rel="noopener noreferrer">
            <h2 className={inter.className}>
              Ir a About <span>-&gt;</span>
            </h2>
          </Link>
        </div>
      </MainLayout>
    </>
  );
}