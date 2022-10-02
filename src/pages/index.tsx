import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import Iframe from "react-iframe"
import { NextPageWithLayout } from "types/global"

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head
        title="Home"
        description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
      />
      {/* <Hero /> */}
      <Iframe url={'https://wellfed.netlify.app/'}
                        width="100%"
                        height="100%"
                        id="myId"
                        frameBorder={0}
                        className=''
                        position="fixed"
                    />
      {/* <FeaturedProducts /> */}
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
