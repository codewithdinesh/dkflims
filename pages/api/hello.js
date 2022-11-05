// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  var item = [
    {
      name: "Pahila Chakraview - Chalava",
      description: "A mysterious serial killer is being transferred from one prison to another; Ashish Dutta, a new police officer, is assigned to lead the journey, which leads to shocking events, deaths, and unimaginable crimes ",
      background: "/media/1945-tumbnail.png",
      gif: "/media/pahila-chakraview-trailer.webp",
      link: "https://www.youtube.com/embed/BmkgmN8Lcwo",
      release: 2022,
      type: "webseries",
      category: "thriller",
      id: 1,
      cast: [
        "Dushant",
        "Dinesh Rathod",
        "Priya",
        "Omkar",
        "Karthi",
        "xyz",
        "abc",
        "bcd",
        "god",
        "Hello",
        "amazon",
        "chalava"]

    },
    {
      name: "Pahila Chakraview - Chalava",
      description: "A mysterious serial killer is being transferred from one prison to another; Ashish Dutta, a new police officer, is assigned to lead the journey, which leads to shocking events, deaths, and unimaginable crimes ",
      background: "/media/1945-tumbnail.png",
      gif: "/media/pahila-chakraview-trailer.webp",
      link: "https://www.youtube.com/embed/BmkgmN8Lcwo",
      release: 2022,
      type: "webseries",
      category: "thriller",
      id: 2,
      cast: [
        "Dushant",
        "Dinesh Rathod",
        "Priya",
        "Omkar",
        "Karthi",
        "xyz",
        "abc",
        "bcd",
        "god",
        "Hello",
        "amazon",
        "chalava"]

    },
  ]



  res.status(200).json(item[req.query.id])
}
