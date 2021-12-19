import Footer from "../comps/footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../comps/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        Cupidatat ex sint aliquip voluptate ex ut incididunt nisi sunt culpa
        nulla. Veniam dolor sint excepteur occaecat proident ullamco magna Lorem
        in. Proident ad et excepteur do do irure. Voluptate quis proident fugiat
        fugiat labore irure amet culpa ullamco labore.
      </p>
      <p>
        Amet amet aliquip consectetur ea tempor elit laboris fugiat qui tempor
        eu consequat tempor eiusmod. In minim minim mollit do. Consectetur
        aliquip reprehenderit Lorem mollit exercitation proident sunt est sunt
        occaecat officia velit ex. Eiusmod ad non ad fugiat ex nisi nostrud
        laborum. Non non ad commodo ea aliquip ea mollit ad. Enim sint culpa
        commodo excepteur tempor laborum proident aute excepteur laborum ea in
        duis adipisicing. Qui amet non veniam anim adipisicing.
      </p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  );
}
