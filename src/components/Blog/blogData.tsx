import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "We want to know how you enjoy Bolu Jadul Bali!",
    paragraph:
      "Yuk abadikan momenmu saat menikmati bolu klasik dari Bolu Jadul Bali",
    image: "/images/blog/post1.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Social Media Expert",
    },
    tags: ["Bolu"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Nikmati Kelezatan Cokelat Dalam Setidap Gigitan",
    paragraph:
      "Cokelat lovers, ada berbagai pilihan Bolu Jadul klasik yang bisa kamu nikmati untuk merasakan sensasi cokl....",
    image: "/images/blog/post2.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Kenikmatan Hakiki"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Balikin Mood Kamu dengan Varian yang Lezat dari Bolu Jadul Bali",
    paragraph:
      "Selalu ada rasa klasik nostalgia terbaik dari Bolu Jadul Bali yang siap untuk naikkan mood kamu!",
    image: "/images/blog/post3.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Marketing Leader",
    },
    tags: ["Rasa Tiada Dua"],
    publishDate: "2025",
  },
  
];
export default blogData;
