import { BiMapPin } from "react-icons/bi";
import { FaHandHolding, FaShippingFast, FaTruck, FaWarehouse } from "react-icons/fa";
import { GiCargoShip } from "react-icons/gi";
import { GoContainer } from "react-icons/go";
import { IoAirplane, IoPlanetSharp } from "react-icons/io5";
import { MdBroadcastOnPersonal, MdDirectionsCarFilled } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

export const Services = [
  {
    id: 1,
    label: "Air Freight",
    icon: IoAirplane,
  },
  {
    id: 2,
    label: "Cross Border",
    icon: BiMapPin,
  },
  {
    id: 3,
    label: "Door to Door",
    icon: TbTruckDelivery,
  },
  {
    id: 4,
    label: "Sea Freight",
    icon: GoContainer,
  },
  {
    id: 5,
    label: "Customer Brokerage",
    icon: RiCustomerService2Fill,
  },
  {
    id: 6,
    label: "Garment Fashion Shipping",
    icon: FaShippingFast,
  },
  {
    id: 7,
    label: "Car Shipping",
    icon: MdDirectionsCarFilled,
  },
  {
    id: 8,
    label: "Industry Project Plants",
    icon: IoPlanetSharp,
  },
  {
    id: 9,
    label: "Agricultural Products Handing",
    icon: FaHandHolding,
  },
  {
    id: 10,
    label: "Trucking Service",
    icon: FaTruck,
  },
  {
    id: 11,
    label: "Personal Effect",
    icon: MdBroadcastOnPersonal,
  },
  {
    id: 12,
    label: "Exhibition Cargo Arrangement",
    icon: GiCargoShip,
  },
  {
    id: 13,
    label: "Warehouse",
    icon: FaWarehouse,
  },
];
