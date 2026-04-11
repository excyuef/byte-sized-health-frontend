type Article = {
  title: string;
  source: string;
  url: string;
  img: string;
};

import Article1 from "@/assets/artikel/artikel 1.jpg";
import Article2 from "@/assets/artikel/artikel 2.jpg";
import Article3 from "@/assets/artikel/artikel 3.jpg";
import Article4 from "@/assets/artikel/artikel 4.jpg";
import Article5 from "@/assets/artikel/artikel 5.jpg";

export const articles: Article[] = [
  {
    title:
      "Cara Menghindari Burnout pada Pekerja agar Tetap Termotivasi dan Sehat",
    source: "bicarakan.id",
    url: "https://www.bicarakan.id/blog/cara-menghindari-burnout-pada-pekerja/",
    img: Article1,
  },
  {
    title: "Burn-Out Syndrome dan Produktivitas",
    source: "Perpusnas",
    url: "https://www.perpusnas.go.id/berita/burn-out-syndrome-dan-produktivitas",
    img: Article2,
  },
  {
    title:
      "Burnout atau Depresi | Tanda Anda Butuh Healing Medis, Bukan Sekedar Liburan",
    source: "Charitas Group",
    url: "https://charitashospital.com/page/id/Artikel/477/Burnout%20atau%20Depresi%20%7C%20Tanda%20Anda%20Butuh%20Healing%20Medis,%20Bukan%20Sekedar%20Liburan",
    img: Article3,
  },
  {
    title: "Ciri-Ciri Burnout dan Cara Mengatasinya",
    source: "Alodokter",
    url: "https://www.alodokter.com/ciri-ciri-burnout-dan-cara-mengatasinya",
    img: Article4,
  },
  {
    title: "Mengenal dan Mengatasi Burnout: Fakta dan Solusi Medis",
    source: "bethsaidahospitals.com",
    url: "https://www.bethsaidahospitals.com/artikelkesehatan/detail/Mengenal-dan-Mengatasi-Burnout-Fakta-dan-Solusi-Medis",
    img: Article5,
  },
];
