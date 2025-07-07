"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "./components/Header";
import Body from "./components/Body";
export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Body />
    </div>
  );
}
