import Layout from "@/components/Layout/Layout";
import Welcome from "@/components/Welcome/Welcome";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#060606" }}>
      <Layout title="Portafolio">
        <Welcome />
      </Layout>
    </div>

  )
}
