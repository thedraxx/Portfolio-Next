import AboutMe from "@/components/AboutMe/AboutMe";
import Layout from "@/components/Layout/Layout";
import Welcome from "@/components/Welcome/Welcome";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#030303" }}>
      <Layout title="Portafolio">
        <Welcome />
        <AboutMe />
      </Layout>
    </div>

  )
}
