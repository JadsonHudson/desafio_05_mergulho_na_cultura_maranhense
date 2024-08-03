import  Image  from "next/image";
import apresentation from "@/../public/The_World.png";
import style from "../../styles/pages/homePage.module.css";
import Card from '../../../components/card/index';
import centro_historico_imagem from "@/../public/centro_hst_1.jpg";
import alcantara from "@/../public/Alcantara_1.jpg";
import lencois_maranhenses from "@/../public/lencois-maranhenses-220-c.jpg";
import esculturas from "@/../public/Artesanato_maranhense_na_Expo_Industria_2023.jpeg";
import ArtesanatoItem from '../../../components/artesanatoItem/index';
export default function HomePage() {
  return (
    <main>
      <div className={style.content}>
        <Image src={apresentation} alt="banner de apresentação" />
      </div>
      <div className={style.container}>
        <div className={style.content + " " + style.destaque}>
          <h1>O que fazer no Maranhão?</h1>
          <p>
            Descubra paisagens deslumbrantes, cultura vibrante e aventuras
            inesquecíveis!
          </p>
        </div>
      </div>
      <div className={style.content + " " + style.pontos__wrapper}>
        <Card>
          <div>
            <Image src={centro_historico_imagem} alt="centro historico"></Image>
          </div>
          <p>Centro Histórico de São Luís</p>
        </Card>
        <Card>
          <div>
            <Image src={alcantara} alt="Alcântara"></Image>
          </div>
          <p>Alcântara</p>
        </Card>
        <Card>
          <div>
            <Image src={lencois_maranhenses} alt="lençóis maranhenses"></Image>
          </div>
          <p>Lençóis Maranhenses</p>
        </Card>
      </div>
      <div>
        <div className={style.content + " " + style.destaque}>
          <h1 className={style.artesanato__title}>
            <span>Artesanatos</span>
            <br />
            Maranhenses
          </h1>

          <div className={style.artesanatos__wrapper}>
            <ArtesanatoItem>
              <div>
                <Image src={esculturas} alt="Esculturas"></Image>
              </div>
              <p>Esculturas</p>
            </ArtesanatoItem>
            <ArtesanatoItem>
              <div>
                <Image src={esculturas} alt="Esculturas"></Image>
              </div>
              <p>Esculturas</p>
            </ArtesanatoItem>
            <ArtesanatoItem>
              <div>
                <Image src={esculturas} alt="Esculturas"></Image>
              </div>
              <p>Esculturas</p>
            </ArtesanatoItem>
          </div>
        </div>
      </div>
    </main>
  );
}
