import React from 'react'
import salad from '../assets/salad.jpg'
import rolls from '../assets/rollcream.jpg'
import desert from '../assets/desert.jpg'
import cake from '../assets/cake.jpg'
import sandwich from '../assets/sandwich.jpg'
import pureveg from '../assets/pureVeg.jpg'
import pasta from '../assets/pasta.jpg'
import noodles from '../assets/noodles.jpg'
import cc from '../assets/b-chicken-curry.jpg'
import ct from '../assets/b-chicken-tikka.jpg'
import cb from '../assets/b-chickenbiriyani.jpg'
import ec from '../assets/b-egg-curry.jpg'
import eo from '../assets/b-egg-omlet.jpg'
import mb from '../assets/b-mutton-biriyani.jpg'
import mc from '../assets/b-Mutton-curry.jpg'
import tc from '../assets/b-Tandoori-chicken.jpg'
import gupchup from '../assets/s-gupchup.jpg'
import Gobimunchurian from '../assets/Gobi-munchurian.jpg'
import Dosa from '../assets/Dosa.jpg'
import ZeeraRice from '../assets/jeera-rice.jpg'
import malaiKofta from '../assets/malai-kofta.jpg'
import mushroom from '../assets/mushroom.jpg'
import naan from '../assets/naan.jpg'
import paneerTikka from '../assets/paneer-tikka.jpg'
import PaneerMasala from '../assets/Paneer-masala.jpg'
import PaneerMakhani from '../assets/Panner-makhani.jpg'
import rice from '../assets/rice.jpg'
import rollcream from '../assets/rollcream.jpg'
import roti from '../assets/roti.jpg'



let collection=[
      {
            id:33,
            img:cc,
            title:"Chicken Curry",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"130",
            quantity:0,
            category:"nonveg",
      },
      {
            id:32,
            img:ct,
            title:"Chicken Tikka",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"180",
            quantity:0,
            category:"nonveg",
      },
      {
            id:31,
            img:cb,
            title:"chickenbiriyani",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"140",
            quantity:0,
            category:"nonveg",
      },
      {
            id:30,
            img:mc,
            title:"Mutton Curry",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"180",
            quantity:0,
            category:"nonveg",
      },
      {
            id:29,
            img:ec,
            title:"Egg Curry",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"80",
            quantity:0,
            category:"nonveg",
      },
      {
            id:28,
            img:eo,
            title:"Egg-Omlet",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"30",
            quantity:0,
            category:"nonveg",
      },
      {
            id:27,
            img:mb,
            title:"Mutton Biriyani",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"280",
            quantity:0,
            category:"nonveg",
      },
      {
            id:26,
            img:mc,
            title:"Mutton Curry",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"180",
            quantity:0,
            category:"nonveg",
      },
      {
            id:25,
            img:tc,
            title:"Tandoori Chicken",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"180",
            quantity:0,
            category:"nonveg",
      },
      {
            id:24,
            img:gupchup,
            title:"gupchup",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"6",
            quantity:0,
            category:"starter",
      },
      {
            id:23,
            img:Dosa,
            title:"Dosa",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"39",
            quantity:0,
            category:"veg",
      },
      {
            id:22,
            img:cake,
            title:"cake",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"39",
            quantity:0,
            category:"veg",
      },
      {
            id:21,
            img:Gobimunchurian,
            title:"Gobimunchurian",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"79",
            quantity:0,
            category:"veg",
      },
      {
            id:20,
            img:ZeeraRice,
            title:"ZeeraRice",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"59",
            quantity:0,
            category:"veg",
      },
      {
            id:19,
            img:malaiKofta,
            title:"musmalaiKofta",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"79",
            quantity:0,
            category:"veg",
      },
      {
            id:18,
            img:mushroom,
            title:"mushroom",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"79",
            quantity:0,
            category:"veg",
      },
      {
            id:17,
            img:naan,
            title:"naan",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"39",
            quantity:0,
            category:"veg",
      },
      {
            id:16,
            img:paneerTikka,
            title:"paneerTikka",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"139",
            quantity:0,
            category:"veg",
      },
      {
            id:15,
            img:PaneerMasala,
            title:"PaneerMasala",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"129",
            quantity:0,
            category:"veg",
      },
      {
            id:14,
            img:PaneerMakhani,
            title:"PaneerMakhani",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"119",
            quantity:0,
            category:"veg",
      },
      {
            id:13,
            img:rice,
            title:"rice",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"35",
            quantity:0,
            category:"veg",
      },
      {
            id:11,
            img:rollcream,
            title:"rollcream",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"25",
            quantity:0,
            category:"veg",
      },
      {
            id:10,
            img:roti,
            title:"Roti",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"5",
            quantity:0,
            category:"veg",
      },
      {
            id:0,
            img:salad,
            title:"salad",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"139",
            quantity:0,
            category:"starter",
      },
      {
            id:1,
            img:pasta,
            title:"pasta",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"139",
            quantity:0,
            category:"starter",
      },
      {
            id:2,
            img:rolls,
            title:"rolls",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"139",
            quantity:0,
            category:"starter",
      },
      {
            id:3,
            img:desert,
            title:"Desert",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"149",
            quantity:0,
            category:"starter",
      },
      {
            id:4,
            img:cake,
            title:"Cake",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"139",
            quantity:0,
            category:"starter",
      },
      {
            id:5,
            img:pureveg,
            title:"pureveg",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"139",
            quantity:0,
            category:"veg",
      },
      {
            id:6,
            img:pasta,
            title:"Pasta",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"139",
            quantity:0,
            category:"veg",
      },
      {
            id:7,
            img:sandwich,
            title:"Sandwich",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"139",
            quantity:0,
            category:"starter",
      },
      {
            id:8,
            img:pasta,
            title:"Pasta",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"139",
            quantity:0,
            category:"starter",
      },
      {
            id:9,
            img:noodles,
            title:"Noodles",
            desc:"Food provides essential nutrients for overall health and well being",
            price:"139",
            quantity:0,
            category:"veg",
      },

]
export default collection