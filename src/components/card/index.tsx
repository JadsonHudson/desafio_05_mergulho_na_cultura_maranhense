import React from "react";
import style from "@/app/styles/components/card.module.css";
export default function Card({ children }: { children: React.ReactNode }) {
  return <div className={style.card}>{children}</div>;
}
