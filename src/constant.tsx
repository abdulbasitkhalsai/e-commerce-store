interface ILink {
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
  