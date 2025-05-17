export default function CartCount(props) {
  const { itemCount } = props;
  return (
    <div className="indicator">
      <span className="indicator-item badge badge-secondary">{itemCount}</span>
      <p>
        <i className="fa-solid fa-cart-shopping text-4xl"></i>
      </p>
    </div>
  );
}
