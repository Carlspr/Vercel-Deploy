
import { Inter } from "next/font/google";
import Link from "next/link";
import { MainLayout } from "../Components/Layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MainLayout>
        <div className="description">
          <p>
            Get started by editing&nbsp;
            <code className="code">pages/Home.js</code>
          </p>

          <Link href="/about" className="card" rel="noopener noreferrer">
            <h2 className={inter.className}>
              Ir a about <span>-&gt;</span>
            </h2>
          </Link>
        </div>
      </MainLayout>
    </>
  );
}
