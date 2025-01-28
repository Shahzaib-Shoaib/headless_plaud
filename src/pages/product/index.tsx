import { GetStaticProps } from "next";

import { getProductsInHomePage } from "@/lib/queries/productsQuery";

export default function Products({ products }: any) {
  console.log(products);

  return <></>;
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProductsInHomePage();

  return {
    props: {
      products,
    },
  };
};
