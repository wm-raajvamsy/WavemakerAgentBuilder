import Image from "next/image";
import styles from "./page.module.css";
import Canvas from "./components/canvas/canvas";
import Header from "./components/header/header";
import Leftnav from "./components/LeftNav/leftnav";


export default function Home() {
  const onSave = () => {
    
  }
  return (
    <div className={styles.page}>
        <Header />
        <div className={styles.pageBody}>
          <Leftnav />
          <Canvas />
        </div>
    </div>
  );
}
