import { rem, Tabs, Notification, Loader, Text, Title } from "@mantine/core";
import {
  IconBuilding,
  IconBuildingBank,
  IconBuildingStore,
  IconMoneybag,
} from "@tabler/icons-react";
import {
  ProductListResponse,
  useGetUserProductsQuery,
} from "../../gql/graphql";
import ProductList from "../../components/Products/ProductList";

export default function FilteredProductsByUser() {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    return (
      <Notification color="red" title="Id not found error">
        UserId not found
      </Notification>
    );
  } else {
    console.log("id:", userId);
  }

  //Api call
  const { loading, error, data } = useGetUserProductsQuery({
    variables: {
      userId: parseInt(userId),
    },
  });

  //   const { bought, sold, borrowed, lent } = data?.getUserProducts || {};
  const boughtProducts =
    data?.getUserProducts?.bought?.filter(
      (product): product is ProductListResponse => product !== null
    ) ?? [];

  const soldProducts =
    data?.getUserProducts?.sold?.filter(
      (product): product is ProductListResponse => product !== null
    ) ?? [];

  const lentProducts =
    data?.getUserProducts?.lent?.filter(
      (product): product is ProductListResponse => product !== null
    ) ?? [];

  const borrowedProducts =
    data?.getUserProducts?.borrowed?.filter(
      (product): product is ProductListResponse => product !== null
    ) ?? [];

  if (loading) return <Loader />;
  if (error) return <Text>Error fetching data: {error.message}</Text>;

  const iconStyle = { width: rem(20), height: rem(20) };
  return (
    <div>
      <Tabs defaultValue="bought">
        <Tabs.List>
          <Tabs.Tab
            value="bought"
            leftSection={<IconBuilding style={iconStyle} />}
          >
            <Title size="h3">Products Bought</Title>
          </Tabs.Tab>
          <Tabs.Tab
            value="sold"
            leftSection={<IconBuildingStore style={iconStyle} />}
          >
            <Title size="h3">Products Sold</Title>
          </Tabs.Tab>
          <Tabs.Tab
            value="borrowed"
            leftSection={<IconMoneybag style={iconStyle} />}
          >
            <Title size="h3">Products Borrowed</Title>
          </Tabs.Tab>
          <Tabs.Tab
            value="lent"
            leftSection={<IconBuildingBank style={iconStyle} />}
          >
            <Title size="h3">Products Lent</Title>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="bought">
          {boughtProducts && <ProductList products={boughtProducts} />}
        </Tabs.Panel>

        <Tabs.Panel value="sold">
          {soldProducts && <ProductList products={soldProducts} />}
        </Tabs.Panel>

        <Tabs.Panel value="borrowed">
          {borrowedProducts && <ProductList products={borrowedProducts} />}
        </Tabs.Panel>

        <Tabs.Panel value="lent">
          {lentProducts && <ProductList products={lentProducts} />}
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
