export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "building-3d-components",
    title: "Mera Experience 3D Web Components Banane Mein",
    excerpt: "Main abhi 3D components pe work kar raha hu apne web projects ke liye. Dekhiye mera process.",
    content: `
# Mera Experience 3D Web Components Banane Mein

Hello dosto! Aaj kal main 3D components pe kaafi work kar raha hu. Normal websites bahut common ho gayi hain, isliye main apni sites me thoda "Wow" factor laane ke liye Three.js aur Framer Motion use kar raha hu.

Main mainly **React Three Fiber (R3F)** ka use karta hu kyunki ye React ecosystem ke sath perfectly blend ho jata hai. Agar aapne mera portfolio dekha hoga, toh jo floating logos aur animated 3D cards hain, wo sab isi tech pe based hain.

Agar aapko bhi 3D web development seekhna hai ya koi doubt hai toh let's connect!
    `,
    date: "May 21, 2026",
    readTime: "2 min read",
    category: "3D Development",
  },
  {
    slug: "learning-postgresql-w3schools",
    title: "PostgreSQL Seekh Raha Hu W3Schools Se",
    excerpt: "MongoDB aur MySQL ke baad ab baari hai PostgreSQL seekhne ki. W3Schools kaafi help kar raha hai.",
    content: `
# PostgreSQL Seekh Raha Hu W3Schools Se

Hi guys! Waise toh MERN stack developer hone ke naate mera mostly kaam MongoDB par hota hai, aur thoda bahut MySQL par jab main Laravel use karta hu. Par aaj kal market me **PostgreSQL** ki demand kafi badh gayi hai.

Isliye maine decide kiya ki ab isko properly seekhna hai. Main abhi [W3Schools ki website](https://www.w3schools.com/postgresql/) se PostgreSQL seekh raha hu. Unka format bahut hi simple aur point-to-point hota hai.

Mujhe isme sabse badhiya cheez iska JSONB support lag raha hai. Aisa lagta hai jaise SQL aur NoSQL dono ka maza ek hi database mein mil gaya ho. Agar aap log bhi backend dev ho, toh PostgreSQL zaroor try karo!
    `,
    date: "May 18, 2026",
    readTime: "2 min read",
    category: "Backend Learning",
  },
  {
    slug: "learning-communication-skills",
    title: "Communication Skills Improve Kar Raha Hu - Aa Jao Sath Seekhte Hain!",
    excerpt: "Coding ke sath soft skills bahut zaroori hain. Agar aap bhi seekhna chahte ho, let's collaborate on Instagram.",
    content: `
# Communication Skills Improve Kar Raha Hu - Aa Jao Sath Seekhte Hain!

Sirf achhi coding aana hi kafi nahi hota, apne ideas clients aur team ko samjhana bhi aana chahiye. Maine notice kiya hai ki as developers hum kabhi kabhi soft skills pe dhyan nahi dete.

Isliye main apni **Communication Skills** (especially spoken English aur presentation skills) seekh raha hu aur continuously improve kar raha hu. 

**Koi mere sath seekhna chahta hai?**
Agar aap bhi apni communication skills improve karna chahte ho, mock interviews practice karna chahte ho, ya bas casually English me tech discuss karke confidence badhana chahte ho, toh aa jao! 

Akele seekhne se achha hai sath me collaborate karke seekhein. 
Mujhe Instagram pe message karo aur hum ek group ya call set up karte hain:

👉 **[Collaborate with me on Instagram (@rahul.jangir_143)](https://www.instagram.com/rahul.jangir_143/)**

Milkar grow karte hain!
    `,
    date: "May 15, 2026",
    readTime: "3 min read",
    category: "Soft Skills",
  }
];
