export interface ILink {
    title: string,
    link: string
}

export const navItems :ILink[] = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "About",
      link: "/about"
    },
    {
      title: "Contact Us",
      link: "/contact-us"
    },
    {
      title: "Blog",
      link: "/blog"
    }
  ];
  

  export const hIcons : ILink[] = [
    {
        title: "Favorites",
        link: "/images/Favorites.png"
    },
    {
        title: "Cart",
        link: "/images/Cart.png"
    },
    {
        title: "User",
        link: "/images/User.png"
    }
  ]
  


  interface IProdCard {
    icon: "/images/Favorites.png";
    altIcon: "Favorites";
    image: string;
    altImage: string;
    description: string;
    price: number;
    button: "Buy Now";
}

export const DiscItems : IProdCard[] = [
    {
        icon: "/images/Favorites.png",
        altIcon: "Favorites",
        image: "/images/DiscProd-IPhone.png",
        altImage: "iPhone Pro",
        description: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
        price: 1437,
        button: "Buy Now"
    },
    {
        icon: "/images/Favorites.png",
        altIcon: "Favorites",
        image: "/images/Card-HeadPhone.png",
        altImage: "Head Phone",
        description: "AirPods Max Silver Starlight Aluminium",
        price: 549,
        button: "Buy Now"},
    {
        icon: "/images/Favorites.png",
        altIcon: "Favorites",
        image: "/images/Card-SWatch.png",
        altImage: "Smart Watch",
        description: "Apple Watch Series 9 GPS 41mm Starlight Aluminium ",
        price: 399,
        button: "Buy Now"
    },
    {
        icon: "/images/Favorites.png",
        altIcon: "Favorites",
        image: "/images/DiscProd-Iphone14.png",
        altImage: "iPhone 14 Pro",
        description: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
        price: 1499,
        button: "Buy Now"
    }
]
