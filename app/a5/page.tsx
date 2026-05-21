"use client";
import { title } from "@/components/primitives";
import { Image } from "@heroui/image";
import {Button} from "@heroui/react";
import { Dropdown } from '@heroui/react';
import { Accordion } from '@heroui/react';

export default function A5Page() {
  return (
    <div>
      <h1>A5 Defend the Fictional Villian</h1>
      <p>
        guys... he's not that evil. i promise.
      </p>
    <br>
    </br>
      


      
      <Button onPress={() => console.log("Button pressed")}>Well For Starters...</Button>
        <Image 
         alt="Joffrey on the iron throne"
         src="https://tse2.mm.bing.net/th/id/OIP.Q-eSMTXkft89xI6m1z12dwHaLR?w=203&h=307&c=7&r=0&o=7&pid=1.7&rm=3"
         width={200}
        />   
        <h2> 1, His "father" has just been slain by a literal pig!</h2>

      <br />
      <Button onPress={() => console.log("Button pressed")}>Under Pressure</Button>
        <Image 
         alt="joffrey 2"
         src="https://tse2.mm.bing.net/th/id/OIP.F1f719rTLlA4RIXX_dUSDgHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3" 
         width={200} 
         />
         <h2>2, He is given the resposibility of all of Westeros and is incharge of King's Landing</h2>

      <br />
      <Button onPress={() => console.log("Button pressed")}>Don't tell me what to do!</Button>
        <Image 
         alt="joffrey 3 "
         src="https://tse3.mm.bing.net/th/id/OIP.bVu0zOKT-FpgHDN9-HSnjgHaKq?w=203&h=293&c=7&r=0&o=7&pid=1.7&rm=3" 
         width={200} 
         />
         <h2>3, This young boy who is overwhelmed by weight of everybody looking to him, he is constantly being told how to run the kingdom. And what to do. </h2>

      <br />
      <Button onPress={() => console.log("Button pressed")}>idk, he's lowk a really bad person.</Button>
        <Image 
         alt="joffrey 4"
         src="https://tse2.mm.bing.net/th/id/OIP.yb9lv0ZU6c5oDhiOBUTKAwHaKq?w=203&h=293&c=7&r=0&o=7&pid=1.7&rm=3" 
         width={200} 
         />
    </div>
      );
}
