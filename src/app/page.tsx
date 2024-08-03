import Image from "next/image";
import styles from "./styles/page.module.css";
import Header from "@/components/header";
import HomePage from './(pages)/homePage/page';

export default function Home({children}:{children: React.ReactNode}) {
  return (
    <>
      <Header></Header>
      <HomePage></HomePage>
    </>
  );
}
