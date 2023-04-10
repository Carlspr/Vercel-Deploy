import { Inter } from "next/font/google";
import Link from "next/link";
import { MainLayout } from "../Components/Layout/MainLayout";
import { DarkLayout } from "../Components/Layout/DarkLayout";


const inter = Inter({ subsets: ["latin"] });
export default function about() {
  return (
    <>
      <div className="description">
        <p>
          Get started by editing&nbsp;
          <code className="code">pages/About.js</code>
        </p>

        <Link href="/" className="card" rel="noopener noreferrer">
          <h2 className={inter.className}>
            Ir a Home <span>-&gt;</span>
          </h2>
        </Link>
      </div>
    </>
  );
}

about.getLayout = function getLayout (page:JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
