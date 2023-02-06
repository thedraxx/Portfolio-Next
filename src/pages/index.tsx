import AboutMe from "@/components/AboutMe/AboutMe";
import Layout from "@/components/Layout/Layout";
import Welcome from "@/components/Welcome/Welcome";
import Projects from "@/components/Projects/Projects";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { GetStaticProps } from 'next';
import "../../src/firebase/config.js";
import { GeneralProyects } from "@/interface/Proyects";
import Skills from '@/components/Skills/Skills';
import { useEffect } from "react";
import SendMe from "@/components/SendMe/SendMe";

export default function Home(dataProject: GeneralProyects) {

  return (
    <div style={{ backgroundColor: "#030303" }}>
      <Layout title="Portafolio">
        <Welcome />
        <AboutMe />
        <Projects dataProject={dataProject.dataProject} />
        <Skills />
        <SendMe />
      </Layout>
    </div>
  )
}



export const getStaticProps: GetStaticProps = async (ctx) => {

  const DataArray: any[] = [];

  const db = getFirestore();
  // Traemos la coleccion de la base de datos
  const docRef = collection(db, "Proyecto 1",);
  const docSnap = await getDocs(docRef);
  // Traemos los datos de la base de datos
  console.log(docSnap.docs.map((doc) =>
    DataArray.push(doc.data()))
  );

  return {
    props: {
      dataProject: DataArray
    }
  }
}
