import { GetServerSideProps } from "next";
import { getAllProducts, getProduct } from "@/lib/queries/productsQuery";
import dynamic from "next/dynamic";

export default function ProductPage({ product }: any) {
  console.log(product);

  return (
    <div>
      <p>{product.handle}</p>
      <p>{product.title}</p>
      <p>{product.id}</p>
    </div>
  );
}

export async function idk() {
  const products = await getAllProducts();
  const paths = products.map((item: any) => {
    const product = String(item.node.handle);

    return {
      params: { product },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}: any) => {
  const product = await getProduct(params.product);

  return {
    props: {
      product,
    },
  };
};
