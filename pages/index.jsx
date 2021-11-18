import Example from "../src/components/example/Example";
import Logo from "../src/components/logo/Logo"
import Header from "../src/components/header/Header"
import Avatar from "../src/components/avatar/Avatar"
import User from "../src/components/user/User"
import Card from "../src/components/card/Card"
import Trending from "../src/components/trending/Trending";
import Auctions from "../src/components/auctions/Auctions";
import dataNfts from "../data/nfts.json";
import { useState , useEffect } from "react";


export default function Index() {


  return <Auctions cards={[{"name":"Clock","user":{"avatarUrl":"images/avatar.png","verified":true},"mediaUrl":"images/nft.jpg","price":200,"currency":"BTC","timeLeft":3600000},{"name":"DOGE","user":{"avatarUrl":"images/avatar.png","verified":true},"mediaUrl":"images/nft.jpg","price":200,"currency":"BTC","timeLeft":3600000},{"name":"BTC","user":{"avatarUrl":"images/avatar.png","verified":true},"mediaUrl":"images/nft.jpg","price":100,"currency":"BTC","timeLeft":3600000},{"name":"Litecoin","user":{"avatarUrl":"images/avatar.png","verified":true},"mediaUrl":"images/nft.jpg","price":300,"currency":"BTC","timeLeft":3600000}]} />
  
}

