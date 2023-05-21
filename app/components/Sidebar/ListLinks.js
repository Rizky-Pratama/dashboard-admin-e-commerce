import ItemLink from "./ItemLink";

export default function ListLinks() {
  return (
    <>
      <ul className="py-7 space-y-7 border-y border-black-[#C2C2C2]">
        <ItemLink href="/" icon="dashboard">
          Dashboard
        </ItemLink>
        <ItemLink href="/product" icon="product">
          Product
        </ItemLink>
        <ItemLink href="/payment" icon="payment">
          Payment
        </ItemLink>
        <ItemLink href="/order" icon="order">
          Order
        </ItemLink>
        <ItemLink href="/customer" icon="customer">
          Customer
        </ItemLink>
        <ItemLink href="/analythic" icon="analythic">
          Analythic
        </ItemLink>
      </ul>
      <ul className="py-7 space-y-7">
        <ItemLink href="/settings" icon="settings">
          Settings
        </ItemLink>
        <ItemLink href="/logout" icon="logout">
          {"Log'out"}
        </ItemLink>
      </ul>
    </>
  );
}
