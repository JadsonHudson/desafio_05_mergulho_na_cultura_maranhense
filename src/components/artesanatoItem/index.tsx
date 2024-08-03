import React from "react";
import style from "@/app/styles/components/artesanatoItem.module.css";
export default function ArtesanatoItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={style.artesanato__item}>{children}</div>;
}
