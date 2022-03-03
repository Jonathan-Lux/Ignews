import Head from "next/head";
import ButtonSubs from "../Components/buttonSubs/buttonSubs";
import { authorization } from "../services/authorization";

export default function Home({ product }) {
  return (
    <>
      <Head>
        <title>IgNews</title>
      </Head>
      <main className="main">
        <section className="main-context">
          <span className="main-context title">
            <img src="../../../assets/hand.svg" alt="hand" />
            Hey, Welcome
          </span>
          <h1>
            News about the <span> React </span>world
          </h1>
          <p>
            Get acess to all the publications <br />
            <span className="value">for {product.amount} month</span>
          </p>
          <ButtonSubs />
        </section>
        <img src="../../../assets/avatar.svg" alt="avatar" width="300px" />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const price = await authorization.prices.retrieve(
    "price_1KYZ0xLdVnLMtAccktiXlb1O"
  );

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US",{
      style:"currency",
      currency:"USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate:  60 * 60 * 24, // 24 horas
  };
}
