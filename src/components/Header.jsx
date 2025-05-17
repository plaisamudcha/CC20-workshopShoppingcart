import CartCount from "./CartCount";

export default function Header(props) {
  const { itemCount } = props;
  return (
    <div className="flex justify-between h-15 p-5">
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">
          PP
        </div>
        <span class="text-xl font-semibold text-accent">PoRPaI Shopping</span>
      </div>
      <CartCount itemCount={itemCount} />
    </div>
  );
}
