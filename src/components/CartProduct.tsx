import { useAppDispatch } from "../redux/hooks"; 
import { RxCross1 } from "react-icons/rx";
import { removeFromCart } from "../redux/features/cartSlice";

interface propsType {
    id: number;
    title: string;
    img: string;
    price: string;
    quantity: number;
}
const CArtProduct: React.FC<propsType> =({
    id,
    img,
    title,
    price,
    quantity,
}) => {
    const dispatch = useAppDispatch();

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <img src={img} alt={title} className=" h-[80px] " />
                <div className="space-y-2">
                    <h3 className="font-medium">{title}</h3>
                    <p className="text-gray-600 text-[14px]">{quantity} X ${price}.00</p>
                </div>
            </div>

            <RxCross1 
            className=" cusrsor-pointer"
            onClick = { () => dispatch(removeFromCart(id)) } />

        </div>
    );
};

export default CArtProduct;