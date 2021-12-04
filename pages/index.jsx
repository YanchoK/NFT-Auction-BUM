import Example from "../src/components/example/Example";
import Logo from "../src/components/logo/Logo"
import Header from "../src/components/header/Header"
import Avatar from "../src/components/avatar/Avatar"
import User from "../src/components/user/User"
import Card from "../src/components/card/Card"
import Trending from "../src/components/trending/Trending";
import Auctions from "../src/components/auctions/Auctions";
import dataNfts from "../data/nfts.json";
import { useState, useEffect } from "react";
import Footer from "../src/components/footer/Footer";
import Step from "../src/components/step/Step";
import How from "../src/components/how/How";

const stepsData =
{
  number: "1",
  title: "Digital Currency",
  description: "You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange"
}

const howData = {
  description: "Discover, collect, and sell extraordinary NFTs on the world's first & largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM.",
  title: "HOW IT WORKS",
  items: [
    {
      number:1,
      title: "String",
      description: "String"
    },
    {
      number:2,
      title: "String",
      description: "String"
    },
    {
      number:3,
      title: "String",
      description: "String"
    }
  ],
  link: "String"
}

const step = <Step number="1" title="Digital Currency"
  description="You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange" />

export default function Index() {
  return <How {...howData}/>
}

