"use client";

import styles from "./banner.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Banner() {
  const router = useRouter();
  const covers = [
    "/img/cover.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg",
  ];
  const [index, setIndex] = useState(0);

  const handleBannerClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % covers.length);
  };

  return (
    <div className={styles.banner} onClick={handleBannerClick}>
      <Image src={covers[index]} alt="cover" fill={true} objectFit="cover" />
      <div className={`${styles.bannerText} ${styles.overlay}`}>
        <h1 className={styles.title}>Where every event finds its venue</h1>
        <h3 className={styles.subtitle}>
          Perfect Spaces, Memorable Moments - Your Event Journey Starts Here
        </h3>

        <button
          className={styles.button}
          onClick={(e) => {
            e.stopPropagation(); // Prevent banner image changing
            router.push("/venue");
          }}
        >
          Select Your Venue NOW
        </button>
      </div>
    </div>
  );
}
