import Example from "../src/components/example/Example";
import Logo from "../src/components/logo/Logo"
import Header from "../src/components/header/Header"
import Avatar from "../src/components/avatar/Avatar"
import User from "../src/components/user/User"
import Card from "../src/components/card/Card"


export default function Index() {
  // return <User name='terika77' info='134 items' avatar="D:\1. Programming\Boom.dev\Projects\nft-auction-bum\public\images\avatar.png" />;
  return <Card name="Clock" likes={1100} mediaUrl='../public/images/nft.jpg' user={{ avatarUrl: '../public/images/avatar.png', verified: false }} price="~12.2" curency="ETH" />
}
