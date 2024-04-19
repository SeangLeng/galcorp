import { BiMapPin } from "react-icons/bi";
import {
  FaHandHolding,
  FaShippingFast,
  FaTruck,
  FaWarehouse,
} from "react-icons/fa";
import { GiCargoShip } from "react-icons/gi";
import { GoContainer } from "react-icons/go";
import { IoAirplane, IoPlanetSharp } from "react-icons/io5";
import { MdBroadcastOnPersonal, MdDirectionsCarFilled } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

import air from "@public/assets/images/industrial-port-container-yard (1).jpg";
import ship from "@public/assets/images/busy-shipping-port-with-containers-trade-action.jpg";
import carShip from "@public/assets/images/car-shipping2.jpg";
import truckService from "@public/assets/images/trucking_service1.jpg";
import warehorse from "@public/assets/images/warehouse-service1.jpg";
import map from "@public/assets/images/cross-border-inner-1.webp";
import doorToDoor from "@public/assets/images/Cydcor-why-door-to-door-sales-scaled.jpeg";
import customer from '@public/assets/images/customs-brokerage-customs-broker.jpg';
import fashion from '@public/assets/images/Packaging-and-Shipping-Clothing-the-Right-Way_small_Small.webp';
import industry from '@public/assets/images/Logistics Isometric Infograhics.jpeg';
import productHolding from '@public/assets/images/personal-effect-household-moving-personal1.jpg'; 
import productsHandling from '@public/assets/images/key-components-of-warehouse-services.jpg';
import cargo from '@public/assets/images/agri-logistics.jpg';

export const Services = [
  {
    id: 1,
    label: "Air Freight",
    icon: IoAirplane,
    image: air,
  },
  {
    id: 2,
    label: "Cross Border",
    icon: BiMapPin,
    image: map,
  },
  {
    id: 3,
    label: "Door to Door",
    icon: TbTruckDelivery,
    image: doorToDoor
  },
  {
    id: 4,
    label: "Sea Freight",
    icon: GoContainer,
    image: ship,
  },
  {
    id: 5,
    label: "Customer Brokerage",
    icon: RiCustomerService2Fill,
    image: customer
  },
  {
    id: 6,
    label: "Garment Fashion Shipping",
    icon: FaShippingFast,
    image: fashion
  },
  {
    id: 7,
    label: "Car Shipping",
    icon: MdDirectionsCarFilled,
    image: carShip,
  },
  {
    id: 8,
    label: "Industry Project Plants",
    icon: IoPlanetSharp,
    image: industry
  },
  {
    id: 9,
    label: "Agricultural Products Handing",
    icon: FaHandHolding,
    image: productsHandling
  },
  {
    id: 10,
    label: "Trucking Service",
    icon: FaTruck,
    image: truckService,
  },
  {
    id: 11,
    label: "Personal Effect",
    icon: MdBroadcastOnPersonal,
    image: productHolding
  },
  {
    id: 12,
    label: "Exhibition Cargo Arrangement",
    icon: GiCargoShip,
    image: cargo
  },
  {
    id: 13,
    label: "Warehouse",
    icon: FaWarehouse,
    image: warehorse,
  },
];
