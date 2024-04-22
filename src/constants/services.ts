import { BiMapPin } from "react-icons/bi";
import {
  FaHandHolding,
  FaShippingFast,
  FaTruck,
  FaWarehouse,
} from "react-icons/fa";
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
import customer from "@public/assets/images/customs-brokerage-customs-broker.jpg";
import fashion from "@public/assets/images/Packaging-and-Shipping-Clothing-the-Right-Way_small_Small.webp";
import industry from "@public/assets/images/Logistics Isometric Infograhics.jpeg";
import productHolding from "@public/assets/images/personal-effect-household-moving-personal1.jpg";
import productsHandling from "@public/assets/images/key-components-of-warehouse-services.jpg";
import cargo from "@public/assets/images/agri-logistics.jpg";
import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { GiCargoShip } from "react-icons/gi";

export interface ServiceProps {
  id: number;
  label: string;
  image: string | StaticImageData;
  icon: IconType;
  description?: string;
  content?: string;
}

export const Services: ServiceProps[] = [
  {
    id: 1,
    label: "Air Freight",
    icon: IoAirplane,
    image: air,
    description:
      "Gal always take care of every step of the delivery process to ensure your shipment is in good hands. The caring start from booking, pick up, loading, customs cleared, on-board, at transit points, flight connection and arrival status at destination up to delivery at warehouse.",
    content: `<p>Gal always take care of every step of the delivery process to ensure your shipment is in good hands. The caring start from booking, pick up, loading, customs cleared, on-board, at transit points, flight connection and arrival status at destination up to delivery at warehouse.</p>
    <br>
    <p>Key highlights: </p>
    <ul style="list-style-type:circle; margin-left: 2rem">
        <li>Airport to airport</li>
        <li>Airport to door, warehouse</li>
        <li>Ex-work to door</li>
        <li>Door to door delivery</li>
        <li>Airfreight consolidation</li>
        <li>Free-flow of documentation</li>
    </ul>
    <p><br>Gal Air-Consol With our wide-ranging of services under Gal Air-Consol, you now have greater flexibility in areas such as service and tariffs, providing options that will suit all your airfreight consignments perfectly.  Gal Air-Charter Your unique shipment requires our special attention. We offer three different freight choices that are guaranteed to suit your needs. Gal Air-Charter organizes dedicated freighter aircraft flights that are customized to meet your exact requirements.  Gal Charter&rsquo;s specialty is in heavy goods. This service matches the right aircraft for your shipment, thus saving you costs while taking excellent care of your cargo.  </p>
    <br/>
    <p>Gal Express and air priority services caters for shipments that are on a tight timeline. We assure you delivery or collection within 24 hours for the fastest transit time.  </p>
    <br/>
    <p>Sea-Air combined services Gal Sea-Air combines ocean freight&rsquo;s cost-effectiveness and airfreight&rsquo;s speed to give you the perfect solution when you need faster transit times and airfreight is too expensive. We also provide additional services such as customs brokerage, trucking, cross-border, thus ensuring that your shipment is right on schedule.  </p>
    <br/>
    <p>Truck-Air combined services Gal Truck-Air combines inland freight&rsquo;s cost-saving and airfreight&rsquo;s speed, from Cambodia via Ho Chi Minh or Bangkok, giving you the perfect solution for your dateline delivery demand when you need faster transit times and the airfreight</p>`,
  },
  {
    id: 2,
    label: "Cross Border",
    icon: BiMapPin,
    image: map,
    content: `<div class="content-detail">
                <p>
               \tGal provide cross border services to serve the need of our clients for land-air transit via Ho Chi Minh city and land-air transit via Bangkok city for big lot of air freight shipments where airport in Cambodia can not cope with at the moment, and there is no capacity with the airlines existing flight in Cambodia as there is no freighter flight. At the moment, airlines fly in by passenger flight where space is very limit to cater big lot shipments.<br><br>

                </p>
                \t<div class="row">
                \t    <div class="col-md-6 col-sm-6 col-xs-6 ">
                \t    \t<b>\tCross border services</b><br>  
                \t    \t\t– Land-air for garment time-sensitive cargo<br>
                \t    \t\t– Garment on hanger<br>
                \t    \t\t– Land-sea combine services via Vietnam<br>
                \t    \t\t– Cross border import and export activities<br>
                \t    \t\t– Projects &amp; plant shipments<br>
                \t    \t\t– Trucking services &amp; bonded trucking services<br>
                \t    \t\t– Door to door<br>
                \t    \t\t– Place to place moving, point to point<br>
                \t    \t\t– Car moving<br>
                \t    \t\t– Customs clearance<br>
                \t    \t\t– Document free flow<br>
                \t    </div>
                \t</div>
            </div>`,
    description:
      "Gal provides cross-border services for large air freight shipments via Ho Chi Minh City and Bangkok due to capacity limitations at Cambodian airports and the absence of freighter flights with local airlines.",
  },
  {
    id: 3,
    label: "Door to Door",
    icon: TbTruckDelivery,
    image: doorToDoor,
    content: `<div class="content-detail">
                <p>
                \tGal logistics understand that, not all the shipments has the same terms of delivery, same mode of transport; it is depend on the urgency of the shipments and the term of buying it would agree upon..
                </p>
                \t
                <div class="mt-5">
                \t<div class="col-sm-6">
                \t\t<strong>Door to door for:</strong><br>
                \t\t– Warehouse to door<br>
                \t\t– Door to warehouse<br>
                \t\t– Door to store<br>
                \t\t– Door to store chain<br>
                \t\t– From door import to door delivery<br>
                \t\t– Door to port<br>
                \t\t– Delivery to third party’s door chain<br>
                \t</div>
                </div>
            </div>`,
    description:
      "Gal logistics understand that, not all the shipments has the same terms of delivery, same mode of transport; it is depend on the urgency of the shipments and the term of buying it would agree upon.",
  },
  {
    id: 4,
    label: "Sea Freight",
    icon: GoContainer,
    image: ship,
    description:
      "Gal Logistics is dedicated a wide range of sea freight services, locally and international freight activities solution, import & export. We understand that each delivery is precious and take special care to ensure professional handling of all cargo from end to end, until the cargo reach to buyer warehouse.",
    content: `<p>Gal Logistics is dedicated a wide range of sea freight services, locally and international freight activities solution, import &amp; export.<br /> <br/>
    We understand that each delivery is precious and take special care to ensure professional handling of all cargo from end to end, until the cargo reach to buyer warehouse.<br /> <br/>
    High Frequency Sailing&rsquo;s (NVOCC): We provide weekly cargo consolidations from every part of the world to Cambodia and from Cambodia to worldwide.<br /> <br/>
    Container freight: We specialize in fast and short transit times for FCL, import &amp; export shipments.<br /> <br/>
    Buyer&rsquo;s Consolidation, Import &amp; export Logistic solutions (Full Container Load, or FCL): We provide complete export &amp; import logistic services including warehousing, local transport, pick up, stuffing, unstuffing and customs clearance.<br />
    Consolidation Groupage Import &amp; export (Loose Cargo Load, or LCL): We offer worldwide consolidated cargo services for export to different parts of Europe, America and Asia.<br /> <br/>
    Express Cargo Bill (Tomorrow&rsquo;s Document for today&rsquo;s cargo): We offer our expertise in express documentation for sea cargo clearance.<br /> <br/>
    Ensures a free flow of documentation: We possess extensive experience in documentation for both shipping and customs clearance.<br /><br/>
    Conventional &amp; Break Bulk Services / Ro Ro Carrier: We offer shipping for bulky items such as heavy equipment, mobile plants, and agriculture products likes rice, cassava, castor, rubber shipments etc&#8230;</p>`,
  },
  {
    id: 5,
    label: "Customer Brokerage",
    icon: RiCustomerService2Fill,
    image: customer,
    content: `<div class="content-detail">
                <p>
                 Gal own in-house customs brokerage license where it would provide easy approach to the customs issue.<br>

                 Customs clearance process in Cambodia is the most complicated part where it is always make us a headache fully.<br>

                 The import process would take a few days, if fortunate, to finish or even more if it is unfortunate….<br>

                 Then, after import process, permit is finished; the clearance part at entrance port would take one more day or unfortunate in some cases take a few days also. Sometime customs demand we need to do translation into Khmer language.<br><br>

                </p>
                \t<div class="row">
                \t    <div class="col-md-6 col-sm-4 col-xs-6 ">
                \t    \tServices we do<br>
                \t    \tCustoms clearance (import &amp; export)<br>
                \t    \tCustoms import &amp; export permit, formalities<br>
                \t    \tPermit with other Ministries involving with customs matter<br>
                \t    \tCustoms declaration<br>
                \t    \tTax payable<br>
                \t    \tTemporary import and re-export arrangement<br>
                \t    </div>
                \t</div>
                  
            </div>`,
    description:
      "Gal's in-house customs brokerage license streamlines customs procedures in Cambodia, which are often time-consuming and complex, leading to potential delays of several days. Entry port clearance may also require Khmer language translation as requested by customs.",
  },
  {
    id: 6,
    label: "Garment Fashion Shipping",
    icon: FaShippingFast,
    image: fashion,
    content: `<div>
                \tWith many years experiences in garment, textiles, shoes, cap &amp; hat and plastic handling, we are pleased to inform our valuable clients and agents that you would find a specialized freight forwarder, freight partner in Cambodia with full experience on handling garment-fashion, time sensitive shipments, we provide the services from point A to point Z, one-stop-happy-services.<br><br>

                \t<strong>Starting from:</strong><br>

                \tShipping instruction, Container booking, Booking report<br>
                \tConsignee shipping approval management, data input<br>
                \tPick up management, CFS arrangement, Handing report,<br>
                \tConsolidated arrangement of small shipments from many different shippers<br>
                \tCounting management, Loading arrangement, Final report<br>
                \tCustoms clearance and inspection<br>
                \tC/O arrangement (Certificate of Origin)<br>
                \tOcean freight or air moving<br>
                \tMonitoring arrival schedule to consignee warehouse<br>
                \tCourier buyer document to consignee at destination<br><br>

                \tOur garment services cater for the following:<br>
                \tInbound logistics /outbound logistics<br>
                \tAir home-made-GOH box<br>
                \tHanging garment<br>
                \tPre –retail services – labeling, tagging, over bagging<br>
                \tGarment distribution<br><br>

                \tGarment On Hanging (GOH)<br>

                \t1×20’GOH with 11bar,25 string,12 knot 1×40’GOH with 22bar, 25string, 12 knot Knot to knot = 11CM and  plastic sheet to be covered whole container
                </div>`,
    description:
      "Gal oversees every step of the delivery process to ensure your shipment's safety and efficiency. From booking to pick-up, loading, customs clearance, transit points, flight connections, and arrival status at the destination, we take care of it all until delivery at the warehouse.",
  },
  {
    id: 7,
    label: "Car Shipping",
    icon: MdDirectionsCarFilled,
    image: carShip,
    description:
      "Gal arrange Auto car, Motorcycle shipment to and from Cambodia, international shipments. We have arranged shipping for auto car & motorcycles from the beginning.",
    content: `<p>Gal arrange Auto car, Motorcycle shipment to and from Cambodia, international shipments. We have arranged shipping for auto car &amp; motorcycles from the beginning. Although we arrange shipping for many automobiles, motorcycles are a specialty we have experience with. Unlike automobiles are shipped in specialty designed enclosed motorcycle transporters. Free your headache, let&rsquo;s us handle and ship the auto car and motorcycles for you. We arrange from A-Z for our clients. Our services cater for all type of shipping mode. We can arrange from sea, air and inland transportation.</p>`,
  },
  {
    id: 8,
    label: "Industry Project Plants",
    icon: IoPlanetSharp,
    image: industry,
    content: `<p>
                 Gal provides core and prime transportation for industry project and plant shipments.<br>

                 We ship cargo from factories Worldwide and deliver cargo to jobsites Worldwide. Each project is unique, few jobs are alike and we take nothing for granted when we start up on a new project <br>

                 We handle all types of cargo which can be part of a project, from small LCL shipments and containers, to very Large and very Heavy units. To get the cargo to its destination we can apply all modes of transportation:<br>

                 By Ship, chartering<br>
                 By Truck<br>
                 By Air<br>

                 We have experts in VESSEL CHARTERING, HEAVY LIFT, CONTAINER SHIPMENTS, TRUCKING, AIRFREIGHT, PROJECT MANAGEMENT.<br>

                 To ensure successful handling of a project, there must be adequate KNOWLEDGE, CAPACITY and FLEXIBILITY. This we understand at Gal Logistics and our organization is built to meet exactly these requirements.<br>
                </p>`,
    description:
      "Gal provides core and prime transportation for industry project and plant shipments. We ship cargo from factories Worldwide and deliver cargo to jobsites Worldwide. Each project is unique, few jobs are alike and we take nothing for granted when we start up on a new project.",
  },
  {
    id: 9,
    label: "Agricultural Products Handing",
    icon: FaHandHolding,
    image: productsHandling,
    content: `<div class="content-detail">
                <p>
                \tWe are proud to inform our valuable clients and agents that we are having more experiences and specialized in agriculture products handling such as Tobacco, rice, corn, cassava, caster, rubber, coffee bean etc., we provide the services from point A to point Z, one-stop-happy-services.<br>
                </p>
                <div class="mt-5">
                    <strong>Starting from:</strong><br />
                    <ul class="list-disc ml-7">
                      <li>Break-bulk, Ro/Ro, Charter ship arrangement</li>
                      <li>Container booking management</li>
                      <li>Pick up management from farm, warehouse</li>
                      <li>Warehousing management/storage</li>
                      <li>Counting management</li>
                      <li>Loading arrangement</li>
                      <li>Trucking from farm to ICD</li>
                      <li>Fumigation arrangement</li>
                      <li>Phytosanitary certificate processing</li>
                      <li>Customs clearance and inspection</li>
                      <li>Fuji trap arrangement</li>
                      <li>C/O arrangement (Certificate of Origin) Ocean freight moving</li>
                    </ul>
                 </div>
            </div>`,
    description:
      "We are proud to inform our valuable clients and agents that we are having more experiences and specialized in agriculture products handling such as Tobacco, rice, corn, cassava, caster, rubber, coffee bean etc., we provide the services from point A to point Z, one-stop-happy-services.",
  },
  {
    id: 10,
    label: "Trucking Service",
    icon: FaTruck,
    image: truckService,
    content: `<p>Gal logistics is providing land transportation to suit the need of our clients for their cargo movement from one place to another within Cambodia and cross border between Cambodia-Vietnam, Vietnam-Cambodia and Cambodia-Thailand, Thailand-Cambodia</p>
    <p><br></p>
    <p>Trucking services including:</p>
    <ul style="list-style-type:circle; margin-left: 2rem">
        <li>Container transportations (LTL, FTL)</li>
        <li>Bulky transportations (open-truck, bulky truck)</li>
        <li>Break bulk movements, heavy equipment movement</li>
        <li>Farm to warehouse</li>
        <li>Warehouse to port, Pick up and delivery</li>
        <li>Haulage; flatbeds handling</li>
    </ul>`,
    description:
      "Gal logistics is providing land transportation to suit the need of our clients for their cargo movement from one place to another within Cambodia and cross border between Cambodia-Vietnam, Vietnam-Cambodia and Cambodia-Thailand, Thailand-Cambodia.",
  },
  {
    id: 11,
    label: "Personal Effect",
    icon: MdBroadcastOnPersonal,
    image: productHolding,
    content: `<p>
                 Gal removal specialists who can arrange all details for international personal / professional moves. As a first-class removal company, we are completely guided by your wishes and needs from the very first discussion, to placement of order and completion of your move, regardless of whether you are moving overseas, to another part of the country or simply just down the road. <br>
                 Your move is in the very best of hands:<br>
                  our employees are all permanent employees with many years of experience at Gal and who have undergone continuous training. They are specialists in every kind of move. What we do? Container shipping (FCL, LCL, Shipments Consolidated) Air freight (Import &amp; Export) Overseas removal (Import &amp; Export) Offices and commercial removal Event and exhibition logistics Storage Fine art and Antiques Door to door delivery Value added services Packing &amp; Repackaging Palletize Labeling/Pricing Stock management Returns management Re-ordering
                </p>`,
    description:
      "Gal's removal specialists handle all aspects of international personal or professional moves. We prioritize your preferences and needs throughout the entire process, from initial discussions to completing your move, whether it's overseas, within the country, or nearby.",
  },
  {
    id: 12,
    label: "Warehouse",
    icon: FaWarehouse,
    image: warehorse,
    content: `<p><span style="text-align: start;color: rgb(0, 0, 0);font-size: medium;">Gal provides warehouse on demand; Container handling services (stuffing/un-stuffing) Pick &amp; pack, storage Cargo sorting, re-arranging, palletizing, storage Lashing, Fumigate arrangement Promotional packing Distribution</span></p>`,
    description:
      "Gal provides warehouse on demand; Container handling services (stuffing/un-stuffing) Pick & pack, storage Cargo sorting, re-arranging, palletizing, storage Lashing, Fumigate arrangement Promotional packing Distribution.",
  },
  {
    id: 13,
    label: "Exhibition Cargo Arrangement",
    icon: GiCargoShip,
    description:
      "For all the shows it is needed to arrange the collection, pick and pack, then deliver to the stands, work from all the way of a start-to-end of the shows.\n" +
      "\n",

    content: `<div class="content-detail">
                <p>
                \tFor all the shows  it is needed  to arrange the collection, pick and pack, then deliver to the stands, work from all the way of a start-to-end of the shows.
                </p>
                <h4 class="font-semibold mt-4">Gal does everything to meet your demand</h4>

                <ul>
                \t<li>Outdoor &amp; indoor exhibition</li>
                \t<li>Domestics show &amp; Overseas show</li>
                \t<li>Collect products from your premises and delivery to port/airport/border gate</li>
                \t<li>Planning &amp; preparations</li>
                \t<li>Shipping management</li>
                \t<li>Customs clearance and transportation, Deliver to exhibition site on time- Overseas co-ordination and on-site assistance.</li>
                \t<li>Collect from your stand and On-forwarding and return the exhibits, Fast delivery back to you</li>
                </ul>
            </div>`,
    image: cargo,
  },
];
