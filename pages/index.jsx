import Example from "../src/components/example/Example";
import Logo from "../src/components/logo/Logo"
import Header from "../src/components/header/Header"
import Avatar from "../src/components/avatar/Avatar"
import User from "../src/components/user/User"
import Card from "../src/components/card/Card"
import Trending from "../src/components/trending/Trending";


const cards = [
  {
    name: 'Clock',
    likes: 1100,
    mediaUrl: 'images/nft.jpg',
    user: {
      avatarUrl: 'images/avatar.png',
      verified: true,
    },
    price: '12.2',
    currency: 'ETH',
  },
  {
    name: 'Clock',
    likes: 1100,
    mediaUrl: 'images/nft.jpg',
    user: {
      avatarUrl: 'images/avatar.png',
      verified: true,
    },
    price: '12.2',
    currency: 'ETH',
  },
  {
    name: 'Clock',
    likes: 1100,
    mediaUrl: 'images/nft.jpg',
    user: {
      avatarUrl: 'images/avatar.png',
      verified: true,
    },
    price: '12.2',
    currency: 'ETH',
  },
  {
    name: 'Clock',
    likes: 1100,
    mediaUrl: 'images/nft.jpg',
    user: {
      avatarUrl: 'images/avatar.png',
      verified: true,
    },
    price: '12.2',
    currency: 'ETH',
  }
]

export default function Index() {
  return <Trending cards={cards} />
}

