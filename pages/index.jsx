import Example from "../src/components/example/Example";
import Logo from "../src/components/logo/Logo"
import Header from "../src/components/header/Header"
import Avatar from "../src/components/avatar/Avatar"
import User from "../src/components/user/User"
import Card from "../src/components/card/Card"
import Trending from "../src/components/trending/Trending";
import Auctions from "../src/components/auction/Auctions";
import dataNfts from "../data/nfts.json";
import { useState , useEffect } from "react";


export default function Index() {


  return <Auctions cards={dataNfts} />
  
}

