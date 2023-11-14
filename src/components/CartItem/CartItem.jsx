import Image from "next/image";

const CartItem = ({ name, price, type, image }) => {
    return (
        <div>
            <Image src={image} width={22} height={22} alt={name} />
            <h2>{name}</h2>
            <p>{type}</p>
            <span>{price}</span>
        </div>
    );
};

export default CartItem;
