const users = [
  {
    fullName: "Aarav Mehta",
    profession: "UI/UX Designer",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    description:
      "Designer who focuses on clean UI and smooth user experiences.",
    tags: ["uiux", "design", "creativity"],
  },
  {
    fullName: "Riya Sharma",
    profession: "Full Stack Developer",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    description: "MERN stack developer building full modern web apps.",
    tags: ["mern", "javascript", "webdev"],
  },
  {
    fullName: "Kabir Verma",
    profession: "Digital Marketer",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    description: "SEO and social media strategist helping brands grow.",
    tags: ["seo", "marketing", "brand"],
  },
  {
    fullName: "Ishita Patel",
    profession: "Content Writer",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    description: "Writes blogs, scripts, and creative brand stories.",
    tags: ["writing", "content", "storytelling"],
  },
  {
    fullName: "Devansh Rao",
    profession: "Software Engineer",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    description: "Backend engineer focusing on scalable APIs and systems.",
    tags: ["backend", "nodejs", "systemdesign"],
  },
  {
    fullName: "Saanvi Kapoor",
    profession: "Graphic Designer",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    description: "Creates striking visual graphics and brand identities.",
    tags: ["graphics", "photoshop", "illustrator"],
  },
  {
    fullName: "Yash Malhotra",
    profession: "Mobile App Developer",
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
    description: "Android + iOS developer who loves building smooth apps.",
    tags: ["flutter", "android", "mobile"],
  },
  {
    fullName: "Nisha Jain",
    profession: "Data Analyst",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=60",
    description: "Turns raw data into meaningful visual insights.",
    tags: ["excel", "python", "analytics"],
  },
  {
    fullName: "Harshit Bansal",
    profession: "Cybersecurity Specialist",
    img: "https://plus.unsplash.com/premium_photo-1763306454161-2587c3791de3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D",
    description:
      "Protects systems from threats and strengthens online security.",
    tags: ["cybersecurity", "network", "security"],
  },
  {
    fullName: "Meera Nair",
    profession: "Product Manager",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=60",
    description: "Leads product vision and coordinates development teams.",
    tags: ["product", "management", "strategy"],
  },
];

let sum = "";

users.forEach(function (elem) {
  sum += ` <div class="card">
            <img src="${elem.img}">
            <h2>${elem.fullName}</h2>
            <h3>${elem.profession}</h3>
            <p>${elem.description}</p>
            <p class="tags">${elem.tags.join(" | ")}</p>
        </div>`;
});

// console.log(sum);

let main = document.querySelector("main");

main.innerHTML = sum;
