import Footer from "../comps/footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../comps/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
      <Footer />
    </div>
  );
}
