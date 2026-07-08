
import Link from "next/link"
import { FiBox, FiHome, FiShoppingCart } from "react-icons/fi";



const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link href="/" className="link">
        <FiHome/>
        <span>Dashboard</span>
      </Link>
      <Link href="/products" className="link">
        <FiBox/>
        <span>Products</span>
      </Link>
      <Link href="/orders" className="link">
        <FiShoppingCart />
        <span>Orders</span>
      </Link>
    </div>
  );
};

export default Sidebar