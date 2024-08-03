import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/logo.png";
import style from "../../app/styles/components/header.module.css";
import { Twitter, Instagram, WhatsApp,Person } from "@mui/icons-material";

export default function Header() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <Link href="/" className={style.cabecalho__link}>
          <Image src={logo} alt="Logo do rota maranhão" />
        </Link>
        <nav className={style.menu_bar}>
          <ul className={style.menu_bar__content}>
            <li>
              <Link href="/" className={style.page_active}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/sobre">Sobre nós</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
            <li>
              <Link href="/">
                <Twitter />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Instagram />
              </Link>
            </li>
            <li>
              <Link href="/">
                <WhatsApp />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Person />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
