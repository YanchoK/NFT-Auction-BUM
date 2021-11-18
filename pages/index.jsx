import Example from "../src/components/example/Example";
import Logo from "../src/components/logo/Logo"
import Header from "../src/components/header/Header"
import Avatar from "../src/components/avatar/Avatar"
import User from "../src/components/user/User"
import Card from "../src/components/card/Card"
import Trending from "../src/components/trending/Trending";
import Auctions from "../src/components/auction/Auctions";


const cards = [
  {
      name : 'Ivy',
      likes : 1100,
      mediaUrl : 'images/nft.jpg',
      user : {
        avatarUrl : 'images/avatar.png',
        verified : true,
      },
      price : '1',
      currency : 'ETH',
  },
  {
      name : 'Judie',
      likes : 1100,
      mediaUrl : 'images/nft.jpg',
      user : {
          avatarUrl : 'images/avatar.png',
          verified : true,
      },
      price : '2.3',
      currency : 'ETH',
  },
  {
      name : 'Juniper',
      likes : 1100,
      mediaUrl : 'images/nft.jpg',
      user : {
          avatarUrl : 'images/avatar.png',
          verified : true,
      },
      price : '5',
      currency : 'ETH',
  },
  {
      name : 'Maple',
      likes : 1100,
      mediaUrl : 'images/nft.jpg',
      user : {
          avatarUrl : 'images/avatar.png',
          verified : true,
      },
      price : '10',
      currency : 'ETH',
  }
]

const liveCards = [
{
    name : 'Ivy',
    likes : 1100,
    mediaUrl : 'images/nft.jpg',
    user : {
      avatarUrl : 'images/avatar.png',
      verified : true,
    },
    price : '1',
    currency : 'ETH',
    timeLeft : 50,
},
{
    name : 'Judie',
    likes : 1100,
    mediaUrl : 'images/nft.jpg',
    user : {
        avatarUrl : 'images/avatar.png',
        verified : true,
    },
    price : '2.3',
    currency : 'ETH',
    timeLeft : 30,
},
{
    name : 'Juniper',
    likes : 1100,
    mediaUrl : 'images/nft.jpg',
    user : {
        avatarUrl : 'images/avatar.png',
        verified : true,
    },
    price : '5',
    currency : 'ETH',
    timeLeft : 60,
},
{
    name : 'Maple',
    likes : 1100,
    mediaUrl : 'images/nft.jpg',
    user : {
        avatarUrl : 'images/avatar.png',
        verified : true,
    },
    price : '10',
    currency : 'ETH',
    timeLeft : 20,
}
]

export default function Index() {
  return <Auctions cards={liveCards} />
  
}

