import React, { useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Gem, 
  Leaf, 
  MapPin, 
  Flame, 
  ShieldAlert, 
  Link as LinkIcon, 
  Thermometer, 
  Zap, 
  Layers, 
  Grid, 
  Cable, 
  Plug, 
  ToggleRight, 
  Laptop, 
  Wind, 
  Fan, 
  Power, 
  Server, 
  Bike, 
  Box, 
  ChevronRight, 
  ArrowRight, 
  Check, 
  Compass, 
  Settings, 
  Award, 
  Target, 
  RefreshCw, 
  Feather, 
  Lock, 
  Building2, 
  Home, 
  Briefcase, 
  Hospital, 
  GraduationCap, 
  ShoppingBag, 
  BatteryCharging,
  Package,
  FileDown,
  Smartphone,
  Cpu,
  Globe
} from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/productsData';
import FilterTrack from '../components/FilterTrack';
import ProductModal from '../components/ProductModal';
import ImageLightboxModal from '../components/ImageLightboxModal';
import LaptopChargerSpecsSection from '../components/LaptopChargerSpecsSection';

// Icon map for sidebar per category id
const CAT_ICONS = {
  all:             <Grid size={16} />,
  wires:           <Zap size={16} />,
  harness:         <Cable size={16} />,
  extension:       <Plug size={16} />,
  switches:        <ToggleRight size={16} />,
  chargers:        <Laptop size={16} />,
  fans:            <Wind size={16} />,
  coolers:         <Fan size={16} />,
  powercord:       <Power size={16} />,
  datacenter:      <Server size={16} />,
  mobile_chargers: <Smartphone size={16} />,
  battery_modules: <BatteryCharging size={16} />,
  ev:              <Bike size={16} />,
  moulded:         <Box size={16} />
};

export default function ProductsPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('cat') || 'all';
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  const handleCategoryChange = (catId) => {
    if (catId === 'all') {
      searchParams.delete('cat');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ cat: catId });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Flagship Cards
  const flagshipProducts = [
    {
      id: 'wires',
      catId: 'wires',
      badgeNum: '01',
      title: 'WIRES & CABLES',
      img: '/assets/images/products/wires_cables_sheet.webp?v=2',
      fallbackImg: '/assets/images/wires_cables.webp?v=2',
      features: ['High conductivity copper', 'Flame retardant PVC', 'Durable & safe', '10 Specialized Cable Categories'],
      btnText: 'VIEW CABLE TYPES',
      detailModal: { title: 'Wires & Cables', desc: '100% pure electrolytic copper single & multi-core cables engineered for residential, commercial and industrial applications.' }
    },
    {
      id: 'harness',
      catId: 'harness',
      badgeNum: '02',
      title: 'WIRING HARNESS & BATTERY CABLE',
      isNew: true,
      img: '/assets/images/products/harness_battery_cables_hero.webp?v=2',
      fallbackImg: '/assets/images/wiring_harness.webp?v=2',
      features: ['Customised wiring harness', 'High performance battery cables', 'For automotive & earth movers industry', 'Reliable & durable'],
      btnText: 'VIEW DETAILS',
      detailModal: { title: 'Wiring Harness & Battery Cable', desc: 'Heavy-duty bespoke automotive wiring looms, battery power cables, and industrial harnesses built with flame-retardant connectors and high-current endurance.' }
    },
    {
      id: 'extension',
      catId: 'extension',
      badgeNum: '03',
      title: 'EXTENSION BOARDS',
      img: '/assets/images/extension/extension_hero_main.webp?v=3',
      fallbackImg: '/assets/images/extension/extension_hero_main.webp?v=3',
      features: ['Multiple socket options', 'Safety shutters', 'Overload protection', 'Stylish & durable design'],
      btnText: 'VIEW DETAILS',
      detailModal: { title: 'Extension Boards', desc: 'Surge-protected multi-socket power distribution strips with USB ports, master circuit breakers, and unbreakable fire-retardant polycarbonate body.' }
    },

    {
      id: 'chargers',
      catId: 'chargers',
      badgeNum: '05',
      title: 'LAPTOP CHARGERS',
      img: '/assets/images/laptop/laptop_hero_main.webp?v=3',
      fallbackImg: '/assets/images/laptop/laptop_hero_main.webp?v=3',
      features: ['Fast & efficient charging', 'Multiple power ratings', 'Overvoltage protection', 'Compact & reliable'],
      btnText: 'VIEW DETAILS',
      detailModal: { title: 'Laptop Chargers', desc: 'Universal and OEM replacement laptop power adapters engineered with high-frequency transformers, heavy duty DC cables, and 90%+ energy conversion efficiency.' }
    },
    {
      id: 'fans',
      catId: 'fans',
      badgeNum: '06',
      title: 'AC GRILLS & FANS',
      img: '/assets/images/ac/ac_hero_main.webp?v=2',
      fallbackImg: '/assets/images/ac/ac_hero_main.webp?v=2',
      features: ['High air flow design', 'Strong & durable', 'Precision moulded', 'Multiple sizes'],
      btnText: 'VIEW DETAILS',
      detailModal: { title: 'AC Grills & Fans', desc: 'Aerodynamically balanced fan grills, ventilation diffusers, and copper motor coils engineered for high-performance HVAC and cooling dynamics.' }
    },
    {
      id: 'coolers',
      catId: 'coolers',
      badgeNum: '07',
      title: 'COOLERS (BODY & FANS)',
      img: '/assets/images/coolers/cooler_hero_main.webp?v=3',
      fallbackImg: '/assets/images/coolers/cooler_hero_main.webp?v=3',
      features: ['Sturdy & stylish bodies', 'Efficient cooling', 'High quality material', 'Customised solutions'],
      btnText: 'VIEW DETAILS',
      detailModal: { title: 'Coolers (Body & Fans)', desc: 'UV-stabilized engineered plastic cooler bodies, submersible pumps, and high-thrust fan assemblies built for severe summer conditions.' }
    },
    {
      id: 'powercord',
      catId: 'powercord',
      badgeNum: '08',
      title: 'POWER CORD (6A & 16A)',
      img: '/assets/images/power_cords/power_cords_hero_main.webp?v=4',
      fallbackImg: '/assets/images/power_cords/power_cords_hero_main.webp?v=4',
      features: ['6A & 16A options', '3 Pin - with earthing', 'High quality PVC', 'Safe & durable'],
      btnText: 'VIEW DETAILS',
      detailModal: { title: 'Power Cord (6A & 16A)', desc: 'ISI-certified 3-pin moulded power cords available in custom lengths and gauge thicknesses (0.75 sq mm to 2.5 sq mm) with nickel-plated solid brass pins.' }
    },
    {
      id: 'datacenter',
      catId: 'datacenter',
      badgeNum: '09',
      title: 'DATA CENTER POWER CORDS',
      img: '/assets/images/datacenter/datacenter_hero_main.webp?v=3',
      fallbackImg: '/assets/images/datacenter/datacenter_hero_main.webp?v=3',
      features: ['IEC C13, C19 options', 'High current capacity', 'Flame retardant', 'Reliable performance'],
      btnText: 'VIEW DETAILS',
      detailModal: { title: 'Data Center Power Cords', desc: 'IEC 60320 server rack PDU power cables with locking connectors and heavy copper conductors for high-reliability data center infrastructure.' }
    },
    {
      id: 'mobile_chargers',
      catId: 'mobile_chargers',
      badgeNum: '10',
      title: 'MOBILE CHARGERS (USB & TYPE-C PD)',
      isNew: true,
      img: '/assets/images/chargers/mobile_chargers_hero_main.webp?v=3',
      fallbackImg: '/assets/images/chargers/mobile_chargers_hero_main.webp?v=3',
      features: ['Fast PD & USB Charging', 'Multi-layer Overvoltage Protection', 'Compact & Durable Design', 'Universal Smartphone Support'],
      btnText: 'VIEW DETAILS',
      detailModal: { title: 'Mobile Chargers (USB & Type-C PD)', desc: 'High-speed smart mobile wall adapters and Type-C Power Delivery (PD) fast chargers engineered with intelligent IC power management and flame-retardant enclosures.' }
    },
    {
      id: 'battery_modules',
      catId: 'battery_modules',
      badgeNum: '11',
      title: 'SOLAR & INVERTER BATTERY OUTER MODULES',
      isNew: true,
      img: '/assets/images/battery/battery_hero_main.webp?v=3',
      fallbackImg: '/assets/images/battery/battery_hero_main.webp?v=3',
      features: ['Heavy-Duty Polymer Moulded', 'Shockproof & Flame Retardant', 'UV & Thermal Resistant', 'Custom Fit for Solar/Inverter Batteries'],
      btnText: 'VIEW DETAILS',
      detailModal: { title: 'Solar & Inverter Battery Outer Modules', desc: 'Precision-moulded polymer outer covers, handles, and battery casing modules engineered for solar PV battery storage, home inverters, and industrial energy storage.' }
    },
    {
      id: 'ev',
      catId: 'ev',
      badgeNum: '12',
      title: '2 WHEELER EV CHARGERS',
      img: '/assets/images/ev/ev_hero_main.webp?v=3',
      fallbackImg: '/assets/images/ev/ev_hero_main.webp?v=3',
      features: ['Safe & smart charging', 'Overload protection', 'Compact & portable', 'Compatible with multiple EVs'],
      btnText: 'VIEW DETAILS',
      detailModal: { title: '2 Wheeler EV Chargers', desc: 'Smart AC wallbox chargers for electric two-wheelers with RFID security, flame-retardant gun holster, auto cut-off, and weatherproofing.' }
    },
    {
      id: 'moulded',
      catId: 'moulded',
      badgeNum: '13',
      title: 'LARGE INJECTION MOULDED COMPONENTS',
      img: '/assets/images/moulded/moulded_hero_main.webp?v=3',
      fallbackImg: '/assets/images/moulded/moulded_hero_main.webp?v=3',
      features: ['For AC, Coolers & Appliances', 'Precision moulded', 'High strength', 'Customised solutions'],
      btnText: 'VIEW DETAILS',
      detailModal: { title: 'Large Injection Moulded Components', desc: 'High-tonnage CNC plastic injection moulding, bespoke component tooling, and custom electrical enclosures engineered to customer CAD drawings.' }
    }
  ];

  // 10 Dedicated Wires & Cables Products
  const wireProducts = [
    { badge: '01', title: 'HOUSE WIRING CABLES', img: '/assets/images/wires/wire_01_house_wiring.webp', features: ['PVC insulated', 'Single & multi-core', '0.5 Sq.mm to 6 Sq.mm', 'IS: 694 Compliant'], desc: 'Flame Retardant (FR/FRLS) 100% pure electrolytic copper single core and multi core cables engineered for residential, commercial and architectural wiring.' },
    { badge: '02', title: 'FLEXIBLE CABLES', img: '/assets/images/wires/wire_02_flexible.webp', features: ['High flexibility', 'Tinned / Annealed copper', '0.5 Sq.mm to 50 Sq.mm', 'IS: 694 Compliant'], desc: 'Multi-strand annealed and tinned electrolytic copper flexible conductors with high thermal insulation for switchgear panels, appliances, and industrial conduit wiring.' },
    { badge: '03', title: 'MULTI CORE CABLES', img: '/assets/images/wires/wire_03_multicore.webp?v=6', features: ['2 Core to 61 Core', 'Control & power applications', 'PVC / FR / FRLS options', 'IS: 1554 (Part 1)'], desc: 'Heavy-duty industrial round PVC sheathed multi-core power and control cables engineered with color-coded cores and high current endurance.' },
    { badge: '04', title: 'ARMOURED CABLES', img: '/assets/images/wires/wire_04_armoured.webp?v=6', features: ['Robust & mechanical protection', 'Power & control applications', 'PVC / XLPE insulation', 'IS: 7098 (Part 1)'], desc: 'Galvanized steel wire and strip armoured cables providing extreme mechanical protection against crushing and underground harsh environment for power utilities.' },
    { badge: '05', title: 'SIGNAL & CONTROL CABLES', img: '/assets/images/wires/wire_05_signal_control.webp', features: ['Shielded / Unshielded', 'Excellent signal transmission', 'Industrial & automation use', 'IS: 1554 (Part 1)'], desc: 'Aluminium mylar tape and tinned copper braid shielded multi-pair instrumentation cables preventing electromagnetic interference (EMI) in industrial automation.' },
    { badge: '06', title: 'FLAT CABLES', img: '/assets/images/wires/wire_06_flat.webp', features: ['Space saving design', 'Easy installation', '2 Core to 24 Core', 'IS: 694 Compliant'], desc: 'Parallel flat flexible multicore cables engineered for space-constrained industrial cable drag chains, elevators, and automated machinery routing.' },
    { badge: '07', title: 'SUBMERSIBLE CABLES', img: '/assets/images/wires/wire_07_submersible.webp', features: ['Suitable for submersible pumps', 'Water & moisture resistant', 'PVC / FR options', 'IS: 694 Compliant'], desc: '3-Core flat waterproof PVC jacketed cables engineered specifically for deep-well submersible pumps with high hydrostatic pressure resistance.' },
    { badge: '08', title: 'SOLAR CABLES', img: '/assets/images/wires/wire_08_solar.webp', features: ['UV & weather resistant', 'Tinned copper conductor', 'DC applications', 'IS: 694 Compliant'], desc: 'Cross-linked polyolefin (XLPO) insulated and sheathed solar DC cables with 25+ years UV, ozone and weather resistance for solar photovoltaic installations.' },
    { badge: '09', title: 'COAXIAL CABLES', img: '/assets/images/wires/wire_09_coaxial.webp', features: ['Low signal loss', 'High frequency performance', 'CCTV, Antenna & Communication', 'IS Compliant'], desc: 'High-bandwidth RG6 and RG11 coaxial communication cables featuring foam dielectric, bonded aluminium foil and dense copper shielding for minimal signal attenuation.' },
    { badge: '10', title: 'SPECIAL CABLES', img: '/assets/images/wires/wire_10_special.webp', features: ['Customized solutions', 'Special insulation & sheathing', 'Industrial applications', 'As per customer requirement'], desc: 'Bespoke high-temperature silicone, zero-halogen flame-retardant (ZHFR), and customized composite cables tailored to strict industrial engineering specifications.' }
  ];

  // 4 Dedicated Wiring Harness & Battery Cable Products
  const harnessProducts = [
    { 
      badge: '01', 
      group: 'WIRING HARNESSES',
      title: 'For AC – IDU (Indoor Unit)', 
      img: '/assets/images/harness/harness_ac_idu.webp', 
      features: ['Flame retardant insulation', 'Custom OEM connectors', 'High thermal resistance', 'Safe & efficient performance'], 
      desc: 'Reliable wiring harness solutions for indoor units ensuring safe, secure and efficient performance.' 
    },
    { 
      badge: '02', 
      group: 'WIRING HARNESSES',
      title: 'For AC – ODU (Outdoor Unit)', 
      img: '/assets/images/harness/harness_ac_odu.webp', 
      features: ['Weatherproof sheathing', 'Ring & spade terminals', 'High durability design', 'Vibration proof locking'], 
      desc: 'Built to withstand tough outdoor conditions with high durability and weather resistance.' 
    },
    { 
      badge: '03', 
      group: 'WIRING HARNESSES',
      title: 'For Home Appliances', 
      img: '/assets/images/harness/harness_home_appliances.webp', 
      features: ['Custom multi-color code', 'Precision crimped terminals', 'Long life endurance', 'RoHS & REACH compliant'], 
      desc: 'Custom wiring harnesses for a wide range of home appliances ensuring safety, efficiency and long life.' 
    },
    { 
      badge: '04', 
      group: 'BATTERY CABLES',
      title: 'For Earth Movers & Heavy Equipment', 
      img: '/assets/images/harness/battery_cables_earth_movers.webp', 
      features: ['Upto 90 Sq mm conductor', 'High electrical conductivity', 'Flexible & durable insulation', 'Heat & abrasion resistant'], 
      desc: 'High performance battery cables for earth movers and heavy equipment applications.' 
    }
  ];

  // Modular Switches Types
  const modularSwitchTypes = [
    {
      id: 'type-1',
      title: '6 AMP CIRCUIT BOARD (WITH SWITCH)',
      variants: [
        { badge: '01', title: '2 MODULE', img: '/assets/images/products/mod_switch_2.jpg?v=2', desc: 'Ideal for small spaces', specs: { 'Rating': '6A', 'Voltage': '240V~ 50Hz', 'Max. Load': '1380W', 'Switch': '1 Way', 'Size (mm)': '86 x 86', 'Color': 'White' } },
        { badge: '02', title: '3 MODULE', img: '/assets/images/products/mod_switch_4.jpg?v=2', desc: 'Ideal for compact applications', specs: { 'Rating': '6A', 'Voltage': '240V~ 50Hz', 'Max. Load': '1380W', 'Switch': '1 Way', 'Size (mm)': '118 x 86', 'Color': 'White' } },
        { badge: '03', title: '4 MODULE', img: '/assets/images/products/mod_switch_4.jpg?v=2', desc: 'Ideal for residential use', specs: { 'Rating': '6A', 'Voltage': '240V~ 50Hz', 'Max. Load': '1380W', 'Switch': '1 Way', 'Size (mm)': '146 x 86', 'Color': 'White' } },
        { badge: '04', title: '6 MODULE', img: '/assets/images/products/mod_switch_6.jpg?v=2', desc: 'Ideal for large control requirements', specs: { 'Rating': '6A', 'Voltage': '240V~ 50Hz', 'Max. Load': '1380W', 'Switch': '1 Way', 'Size (mm)': '202 x 86', 'Color': 'White' } },
        { badge: '05', title: '8 MODULE', img: '/assets/images/products/mod_switch_8.jpg?v=2', desc: 'Ideal for multi point control', specs: { 'Rating': '6A', 'Voltage': '240V~ 50Hz', 'Max. Load': '1380W', 'Switch': '1 Way', 'Size (mm)': '258 x 86', 'Color': 'White' } }
      ]
    },
    {
      id: 'type-2',
      title: '16 AMP CIRCUIT BOARD (WITH SWITCH)',
      variants: [
        { badge: '06', title: '2 MODULE', img: '/assets/images/products/mod_switch_2.jpg?v=2', desc: 'Heavy duty, ideal for AC/Heater', specs: { 'Rating': '16A', 'Voltage': '240V~ 50Hz', 'Max. Load': '3680W', 'Switch': '1 Way', 'Size (mm)': '86 x 86', 'Color': 'White' } },
        { badge: '07', title: '3 MODULE', img: '/assets/images/products/mod_switch_4.jpg?v=2', desc: 'Heavy duty, compact design', specs: { 'Rating': '16A', 'Voltage': '240V~ 50Hz', 'Max. Load': '3680W', 'Switch': '1 Way', 'Size (mm)': '118 x 86', 'Color': 'White' } },
        { badge: '08', title: '4 MODULE', img: '/assets/images/products/mod_switch_4.jpg?v=2', desc: 'Heavy duty residential use', specs: { 'Rating': '16A', 'Voltage': '240V~ 50Hz', 'Max. Load': '3680W', 'Switch': '1 Way', 'Size (mm)': '146 x 86', 'Color': 'White' } },
        { badge: '09', title: '6 MODULE', img: '/assets/images/products/mod_switch_6.jpg?v=2', desc: 'Heavy duty large controls', specs: { 'Rating': '16A', 'Voltage': '240V~ 50Hz', 'Max. Load': '3680W', 'Switch': '1 Way', 'Size (mm)': '202 x 86', 'Color': 'White' } },
        { badge: '10', title: '8 MODULE', img: '/assets/images/products/mod_switch_8.jpg?v=2', desc: 'Heavy duty multi point', specs: { 'Rating': '16A', 'Voltage': '240V~ 50Hz', 'Max. Load': '3680W', 'Switch': '1 Way', 'Size (mm)': '258 x 86', 'Color': 'White' } }
      ]
    },
    {
      id: 'type-3',
      title: 'MODULAR SWITCH TYPES (6A)',
      smallCards: true,
      variants: [
        { badge: '11', title: 'BELL PUSH SWITCH (6A)', img: '/assets/images/products/1.png?v=2', desc: 'Ideal for door bell applications', specs: {} },
        { badge: '12', title: 'INDICATOR SWITCH (6A)', img: '/assets/images/products/2.png?v=2', desc: 'Indicator light for power status', specs: {} },
        { badge: '13', title: 'FAN REGULATOR (6A)', img: '/assets/images/products/3.png?v=2', desc: 'Smooth speed control for fans', specs: {} },
        { badge: '14', title: 'DIMMER SWITCH (400W)', img: '/assets/images/products/4.png?v=2', desc: 'For dimming lights with smooth control', specs: {} },
        { badge: '15', title: '6A DP SWITCH', img: '/assets/images/products/5.png?v=2', desc: 'Double pole switch for extra safety', specs: {} },
        { badge: '16', title: '16A DP SWITCH', img: '/assets/images/products/6.png?v=2', desc: 'Heavy duty switch for high load applications', specs: {} }
      ]
    },
    {
      id: 'type-4',
      title: 'OUTER PLATE OPTIONS – COLORS & FINISHES',
      smallCards: true,
      variants: [
        { badge: '17', title: 'White', img: '/assets/images/products/type4/1.jpg', desc: '', specs: {} },
        { badge: '18', title: 'Ivory', img: '/assets/images/products/type4/2.jpg', desc: '', specs: {} },
        { badge: '19', title: 'Grey', img: '/assets/images/products/type4/3.jpg', desc: '', specs: {} },
        { badge: '20', title: 'Black', img: '/assets/images/products/type4/4.jpg', desc: '', specs: {} },
        { badge: '21', title: 'Gold', img: '/assets/images/products/type4/5.jpg', desc: '', specs: {} },
        { badge: '22', title: 'Silver', img: '/assets/images/products/type4/6.jpg', desc: '', specs: {} },
        { badge: '23', title: 'Wood Finish', img: '/assets/images/products/type4/7.jpg', desc: '', specs: {} },
        { badge: '24', title: 'Champagne', img: '/assets/images/products/type4/8.jpg', desc: '', specs: {} }
      ]
    }
  ];

  // 6 Dedicated Extension Board Products
  const extensionBoardProducts = [
    { 
      badge: '01', 
      title: 'BASIC EXTENSION BOARDS', 
      img: '/assets/images/extension/board_01_basic.webp?v=4', 
      features: ['Multiple socket options (3/4/5/6)', '6A rating', 'Indicator with ON/OFF switch', 'Safe for home & office use'], 
      desc: 'High-durability 6A basic extension boards with ergonomic sockets and master ON/OFF switch indicator for safe everyday home & office power needs.' 
    },
    { 
      badge: '02', 
      title: 'MULTI SOCKET EXTENSION BOARDS', 
      img: '/assets/images/extension/board_02_multisocket.webp?v=4', 
      features: ['6A / 16A rating options', 'Multiple universal sockets', 'Individual switches', 'Ideal for home & office'], 
      desc: 'Multi-socket extension boards featuring individual neon switches and multi-plug universal sockets for versatile appliance connectivity.' 
    },
    { 
      badge: '03', 
      title: 'EXTENSION BOARDS WITH USB PORTS', 
      img: '/assets/images/extension/board_03_usb.webp?v=4', 
      features: ['2 / 4 USB ports (2.4A)', 'Smart IC for fast charging', 'Overload & surge protection', 'Charge multiple devices'], 
      desc: 'Smart power strips integrated with dual/quad 2.4A USB fast charging ports and intelligent IC chip overload protection for modern devices.' 
    },
    { 
      badge: '04', 
      title: 'SPIKE GUARD EXTENSION BOARDS', 
      img: '/assets/images/extension/board_04_spikeguard.webp?v=4', 
      features: ['Built-in spike & surge protection', 'Overload protection', 'Indicator for power & spike', 'Protects your appliances'], 
      desc: 'Advanced surge and spike guard extension boards engineered with heavy-duty metal oxide varistors (MOV) to safeguard sensitive electronic equipment.' 
    },
    { 
      badge: '05', 
      title: 'POWER STRIPS (SLIM DESIGN)', 
      img: '/assets/images/extension/board_05_powerstrip.webp?v=4', 
      features: ['Slim & compact design', '3/4/5 socket options', 'Easy to mount & carry', 'Perfect for modern spaces'], 
      desc: 'Sleek, ultra-slim space-saving power distribution strips designed for clean aesthetic desk setups, wall mounting, and easy portability.' 
    },
    { 
      badge: '06', 
      title: 'HEAVY DUTY EXTENSION BOARDS', 
      img: '/assets/images/extension/board_06_heavyduty.webp?v=4', 
      features: ['16A heavy duty rating', 'High quality thick cable', 'Suitable for AC, Coolers & high power appliances'], 
      desc: 'Robust 16A heavy-duty industrial extension cords with high-capacity thick copper wiring, fire-retardant casing, and high current load bearing for ACs, refrigerators, and coolers.' 
    }
  ];

  // 5 Dedicated Laptop Charger Products
  const laptopChargerProducts = [
    { 
      badge: '01', 
      title: 'STANDARD LAPTOP CHARGERS',
      rating: '65W – 90W',
      img: '/assets/images/laptop/charger_01_standard.webp?v=6', 
      features: ['Stable & efficient power output', 'Multiple connector options', 'Ideal for everyday use'], 
      desc: 'High-reliability standard replacement laptop power adapters delivering stable DC voltage output with multiple connector plug options for everyday home and office use.' 
    },
    { 
      badge: '02', 
      title: 'PREMIUM LAPTOP CHARGERS',
      rating: '90W – 120W',
      img: '/assets/images/laptop/charger_02_premium.webp?v=6', 
      features: ['High efficiency & low power loss', 'Advanced safety protection', 'Durable & compact design'], 
      desc: 'High-efficiency premium power adapters featuring advanced thermal dissipation, heavy-duty strain relief DC cables, and multi-layer circuit protection.' 
    },
    { 
      badge: '03', 
      title: 'FAST CHARGE LAPTOP CHARGERS (PD)',
      rating: '65W – 100W',
      img: '/assets/images/laptop/charger_03_fastcharge.webp?v=6', 
      features: ['USB-C Power Delivery (PD)', 'Fast & intelligent charging', 'Compatible with latest laptops'], 
      desc: 'Smart Type-C Power Delivery (PD 3.0) fast chargers engineered with intelligent IC power distribution for ultrabooks, MacBooks, and modern Type-C laptops.' 
    },
    { 
      badge: '04', 
      title: 'UNIVERSAL LAPTOP CHARGERS',
      rating: '120W – 150W',
      img: '/assets/images/laptop/charger_04_universal.webp?v=6', 
      features: ['Universal compatibility', 'Multiple DC tips included', 'Perfect for multi-device use'], 
      desc: 'High-power universal laptop power supplies equipped with interchangeable precision DC tips supporting leading laptop brands and multi-device environments.' 
    },
    { 
      badge: '05', 
      title: 'TYPE-C PD CHARGERS',
      rating: '45W – 100W',
      img: '/assets/images/laptop/charger_05_typec.webp?v=6', 
      features: ['Compact & travel friendly', 'PD 3.0/PPS support', 'Smart chip for device protection'], 
      desc: 'Ultra-compact, travel-ready Type-C Power Delivery & Programmable Power Supply (PPS) smart chargers providing maximum power conversion in a lightweight form factor.' 
    }
  ];

  // 7 Dedicated AC Grills & Fans Products
  const acProducts = [
    { 
      badge: '01', 
      title: 'AC OUTDOOR UNIT GRILLS', 
      img: '/assets/images/ac/ac_01_outdoor_grill.webp?v=1', 
      features: ['Robust & UV Resistant', 'High Air Flow Design', 'Aesthetic Finish'], 
      desc: 'High-impact UV-resistant plastic injection moulded grills for split AC outdoor units engineered for high airflow efficiency and all-weather durability.' 
    },
    { 
      badge: '02', 
      title: 'AC FAN BLADES', 
      img: '/assets/images/ac/ac_02_fan_blades.webp?v=2', 
      features: ['Aerodynamic Design', 'High Air Delivery', 'Low Noise Operation'], 
      desc: 'Aerodynamically balanced 3-blade axial fan impellers designed for high air displacement, minimal operational noise, and thermal endurance.' 
    },
    { 
      badge: '03', 
      title: 'AC LOUVERS & AIR OUTLETS', 
      img: '/assets/images/ac/ac_03_louvers.webp?v=1', 
      features: ['Uniform Air Distribution', 'High Strength Material', 'Easy Installation'], 
      desc: 'Precision-engineered ventilation louvers and directional air diffusers for uniform air distribution in residential split and commercial HVAC units.' 
    },
    { 
      badge: '04', 
      title: 'AC MOTOR COVERS & SUPPORTS', 
      img: '/assets/images/ac/ac_04_motor_covers.webp?v=1', 
      features: ['Precision Fit', 'Vibration & Heat Resistant', 'Long Lasting Performance'], 
      desc: 'Vibration-resistant plastic motor mounting shrouds and support rings providing high structural stability for AC outdoor fan motors.' 
    },
    { 
      badge: '05', 
      title: 'AC SIDE PANELS & CASING PARTS', 
      img: '/assets/images/ac/ac_05_side_panels.webp?v=1', 
      features: ['High Dimensional Accuracy', 'Strong & Durable', 'Corrosion Resistant'], 
      desc: 'High-tonnage injection moulded plastic side panels, housing frames, and electrical cabinet enclosures built for corrosion resistance and structural strength.' 
    },
    { 
      badge: '06', 
      title: 'AC BASE PANS', 
      img: '/assets/images/ac/ac_06_base_pans.webp?v=1', 
      features: ['Sturdy & Leak Resistant', 'Corrosion Protection', 'Customizable Options'], 
      desc: 'Heavy-duty leakproof plastic drain base pans engineered for split AC outdoor units with integrated condensate water drain ports.' 
    },
    { 
      badge: '07', 
      title: 'OTHER CUSTOM COMPONENTS', 
      img: '/assets/images/ac/ac_07_custom_components.webp?v=2', 
      features: ['Brackets, Clamps, Supports & More', 'As per OEM Requirement', 'Large Scale Supply'], 
      desc: 'Bespoke contract plastic injection moulded brackets, clamps, clip mounts, and custom components manufactured to strict OEM engineering blueprints.' 
    }
  ];

  // 8 Dedicated Coolers (Body & Fans) Products
  const coolerProducts = [
    { 
      badge: '01', 
      title: 'COOLER BODIES', 
      img: '/assets/images/coolers/cooler_01_body.webp?v=2', 
      features: ['Strong & Durable Body', 'Premium Finish', 'Customizable Designs'], 
      desc: 'High-impact UV-stabilized engineered plastic cooler bodies and tower shell enclosures built for severe summer endurance and modern aesthetics.' 
    },
    { 
      badge: '02', 
      title: 'FRONT GRILLS', 
      img: '/assets/images/coolers/cooler_02_front_grill.webp?v=3', 
      features: ['High Airflow Design', 'UV Resistant Material', 'Sturdy Construction'], 
      desc: 'High-airflow square front ventilation louver grates engineered for personal, window, and desert air coolers.' 
    },
    { 
      badge: '03', 
      title: 'FAN BLADES', 
      img: '/assets/images/coolers/cooler_03_fan_blades.webp?v=1', 
      features: ['Aerodynamic Design', 'Balanced & Low Noise', 'High Performance'], 
      desc: 'Aerodynamically balanced high-thrust axial plastic fan impellers designed for maximum air delivery and quiet operation.' 
    },
    { 
      badge: '04', 
      title: 'LOUVERS & AIR OUTLETS', 
      img: '/assets/images/coolers/cooler_04_louvers.webp?v=1', 
      features: ['Uniform Air Distribution', 'Smooth Operation', 'Easy Installation'], 
      desc: 'Smooth-operating horizontal and vertical directional louvers for uniform room air distribution in domestic air coolers.' 
    },
    { 
      badge: '05', 
      title: 'WATER TANKS', 
      img: '/assets/images/coolers/cooler_05_water_tank.webp?v=7', 
      features: ['Leak Proof Design', 'High Strength Material', 'Corrosion Resistant'], 
      desc: 'Heavy-duty leakproof molded polymer water reservoir tanks built for high water storage capacity and corrosion resistance.' 
    },
    { 
      badge: '06', 
      title: 'MOTOR COVERS', 
      img: '/assets/images/coolers/cooler_06_motor_cover.webp?v=6', 
      features: ['Precision Fit', 'Vibration & Heat Resistant', 'Long Lasting'], 
      desc: 'Precision-moulded protective shrouds and motor housing rings safeguarding cooler blower motors from water splashes and heat.' 
    },
    { 
      badge: '07', 
      title: 'CONTROL PANELS & KNOBS', 
      img: '/assets/images/coolers/cooler_07_control_panel.webp?v=2', 
      features: ['Smooth & Reliable Operation', 'Stylish Design', 'Durable Material'], 
      desc: 'Ergonomic air cooler switch control panels with smooth rotary dial knobs for multi-speed fan control and pump operation.' 
    },
    { 
      badge: '08', 
      title: 'OTHER CUSTOM PARTS', 
      img: '/assets/images/coolers/cooler_08_custom_parts.webp?v=9', 
      features: ['Custom Design', 'High Precision', 'Bulk Production', 'As per OEM Need'], 
      desc: 'Bespoke contract injection moulded plastic brackets, pump mounts, ice chamber covers, and custom cooler fittings engineered to OEM blueprints.' 
    }
  ];

  // 6 Power Cord Products
  const powerCordProducts = [
    { 
      badge: '01', 
      title: 'INDIA 3 PIN POWER CORDS', 
      img: '/assets/images/power_cords/power_cord_01_india.webp?v=2', 
      features: ['6A / 16A Options', '250V AC, 50Hz', 'ISI Certified'], 
      desc: 'Heavy duty 3 pin Indian standard power cords certified for high reliability and maximum safety.' 
    },
    { 
      badge: '02', 
      title: 'IEC C13 POWER CORDS', 
      img: '/assets/images/power_cords/power_cord_02_c13.webp?v=2', 
      features: ['For PCs, Monitors & UPS', '10A, 250V AC', 'Universal Compatibility'], 
      desc: 'Standard C13 coupler power cables designed for computers, monitors, UPS systems, and IT equipment.' 
    },
    { 
      badge: '03', 
      title: 'IEC C5 / C7 POWER CORDS', 
      img: '/assets/images/power_cords/power_cord_03_c5c7.webp?v=2', 
      features: ['For Laptops & Adapters', '2.5A / 6A Options', 'Compact & Reliable'], 
      desc: 'Molded C5 cloverleaf and C7 figure-8 connector cables for laptop power bricks and electronics adapters.' 
    },
    { 
      badge: '04', 
      title: 'EUROPEAN POWER CORDS', 
      img: '/assets/images/power_cords/power_cord_04_euro.webp?v=2', 
      features: ['VDE Approved', '16A, 250V AC', 'High Safety Standards'], 
      desc: 'VDE certified Schuko type European standard power cords engineered for high current appliance safety.' 
    },
    { 
      badge: '05', 
      title: 'USA 3 PIN POWER CORDS', 
      img: '/assets/images/power_cords/power_cord_05_usa.webp?v=2', 
      features: ['NEMA 5-15P', '10A, 125V AC', 'Heavy Duty Build'], 
      desc: 'NEMA 5-15P compliant US 3 pin grounded power cords for American appliances and industrial devices.' 
    },
    { 
      badge: '06', 
      title: 'CUSTOM POWER CORDS', 
      img: '/assets/images/power_cords/power_cord_06_custom.webp?v=2', 
      features: ['Custom Lengths', 'Custom Connectors', 'Branding & Packaging'], 
      desc: 'Bespoke OEM power cord solutions manufactured with custom wire lengths, specialized terminals, and custom branding.' 
    }
  ];

  // 6 Data Center Power Cord Products
  const dataCenterProducts = [
    { 
      badge: '01', 
      title: 'IEC C13 & C14 POWER CORDS', 
      img: '/assets/images/datacenter/datacenter_01_c13c14.webp?v=2', 
      features: ['10A / 16A Options', '250V AC, 50/60Hz', 'PDU & Server Compatible', 'Locking & Non-Locking'], 
      desc: 'High performance IEC C13 to C14 power cords designed for rack PDUs, servers, and enterprise data center power distribution.' 
    },
    { 
      badge: '02', 
      title: 'IEC C19 & C20 POWER CORDS', 
      img: '/assets/images/datacenter/datacenter_02_c19c20.webp?v=2', 
      features: ['16A / 20A Options', 'High Temperature Rating', 'PDU & UPS Compatible', 'Heavy Duty Performance'], 
      desc: 'Heavy duty high-current C19 and C20 power cords for blade servers, high-density UPS systems, and large power distribution units.' 
    },
    { 
      badge: '03', 
      title: 'PDU / UPS POWER CORDS', 
      img: '/assets/images/datacenter/datacenter_03_pdu_ups.webp?v=2', 
      features: ['Locking Connectors', 'Prevents Accidental Disconnection', 'High Retention Strength', 'Mission Critical Use'], 
      desc: 'Secure dual-locking PDU and UPS power cords engineered to prevent accidental disconnects in mission critical IT infrastructure.' 
    },
    { 
      badge: '04', 
      title: 'CORD SETS FOR RACK & SERVERS', 
      img: '/assets/images/datacenter/datacenter_04_rack_server.webp?v=2', 
      features: ['Custom Lengths', 'Tidy & Organized Cabling', 'Easy Identification', 'Velcro / Cable Tie Options'], 
      desc: 'Color-coded and custom length server rack power cord sets for organized airflow and clean server room cable management.' 
    },
    { 
      badge: '05', 
      title: 'UK BS 1363 POWER CORDS', 
      img: '/assets/images/datacenter/datacenter_05_uk_bs1363.webp?v=2', 
      features: ['13A / 250V AC', 'Fuse Protected', 'BS 1363 Certified', 'Data Center Grade'], 
      desc: 'UK standard 13A fused power cords compliant with BS 1363 safety standards for British and international data center deployments.' 
    },
    { 
      badge: '06', 
      title: 'CUSTOM DATA CENTER POWER SOLUTIONS', 
      img: '/assets/images/datacenter/datacenter_06_custom.webp?v=2', 
      features: ['Custom Connectors', 'Custom Lengths', 'Private Labeling', 'Bulk Production Capacity'], 
      desc: 'Bespoke OEM data center power cabling solutions engineered to exact client specifications, custom wire gauges, and branding.' 
    }
  ];

  // 4 Mobile Charger Products (USB & Type-C PD)
  const mobileChargerProducts = [
    { 
      badge: '01', 
      title: 'MULTI PORT USB CHARGER', 
      rating: '12W – 24W',
      img: '/assets/images/chargers/mobile_charger_01_multi_usb.webp?v=4', 
      features: [
        'Dual USB-A ports',
        'Smart IC for optimal output',
        'Compact & lightweight',
        'Ideal for everyday use'
      ], 
      desc: 'Multi-port USB wall charger featuring smart IC technology for optimal charging output across everyday devices.' 
    },
    { 
      badge: '02', 
      title: 'DUAL TYPE-C (PD) CHARGER', 
      rating: '20W – 65W',
      img: '/assets/images/chargers/mobile_charger_02_dual_typec.webp?v=4', 
      features: [
        'Dual Type-C ports',
        'Power Delivery (PD) support',
        'Fast & intelligent charging',
        'Compatible with latest devices'
      ], 
      desc: 'High-speed Power Delivery dual Type-C wall charger designed for fast and intelligent charging.' 
    },
    { 
      badge: '03', 
      title: 'USB + TYPE-C CHARGER', 
      rating: '18W – 45W',
      img: '/assets/images/chargers/mobile_charger_03_usb_typec.webp?v=4', 
      features: [
        'USB-A + Type-C port',
        'Charge two devices simultaneously',
        'Smart & safe charging',
        'Perfect for all device users'
      ], 
      desc: 'Versatile dual port charger featuring USB-A and USB Type-C output for multi-device charging.' 
    },
    { 
      badge: '04', 
      title: 'PREMIUM PD CHARGER', 
      rating: '30W – 65W',
      img: '/assets/images/chargers/mobile_charger_04_premium_pd.webp?v=4', 
      features: [
        'High-power PD charging',
        'Dual Type-C for maximum speed',
        'Advanced safety protection',
        'Ideal for laptops, tablets & phones'
      ], 
      desc: 'Heavy-duty premium Power Delivery fast charger with advanced safety protection for phones, tablets & laptops.' 
    }
  ];

  // 5 Solar & Inverter Battery Outer Module Products
  const batteryModuleProducts = [
    { 
      badge: '01', 
      title: 'TALL TUBULAR BATTERY MODULE', 
      rating: 'HTBM Series | 100Ah – 300Ah | PP / HIPS',
      img: '/assets/images/battery/battery_01_tall_tubular.webp?v=2', 
      features: [
        'High Strength PP / HIPS Polymer',
        'Deep Rib Heavy Duty Design',
        'Heat & UV Resistant Body',
        'White/Grey Body with Blue/Black Lid'
      ], 
      desc: 'Tall tubular battery module engineered with deep rib high-strength PP/HIPS polymer for 100Ah – 300Ah solar and inverter applications.' 
    },
    { 
      badge: '02', 
      title: 'SHORT TUBULAR BATTERY MODULE', 
      rating: 'STBM Series | 80Ah – 200Ah | PP / HIPS',
      img: '/assets/images/battery/battery_02_short_tubular.webp?v=2', 
      features: [
        'Compact Space-Saving Design',
        'Easy Handling & Installation',
        'High Mechanical Durability',
        'White/Grey Body with Blue/Black Lid'
      ], 
      desc: 'Compact short tubular battery outer casing for 80Ah – 200Ah battery assemblies with high durability and easy handling.' 
    },
    { 
      badge: '03', 
      title: 'SMF / VRLA BATTERY MODULE', 
      rating: 'SMF Series | 26Ah – 200Ah | PP / ABS (FR Grade)',
      img: '/assets/images/battery/battery_03_smf_vrla.webp?v=2', 
      features: [
        'Flame Retardant ABS FR Grade Resin',
        'Sealed Leakproof Construction',
        'Low Maintenance Structure',
        'White/Grey Body with Black Lid'
      ], 
      desc: 'Sealed flame-retardant SMF/VRLA battery enclosure built for 26Ah – 200Ah UPS and standby power backup systems.' 
    },
    { 
      badge: '04', 
      title: 'INVERTER BATTERY MODULE', 
      rating: 'IB Series | 100Ah – 250Ah | PP / HIPS',
      img: '/assets/images/battery/battery_04_inverter_module.webp?v=2', 
      features: [
        'Heavy Duty Inverter Casing Design',
        'High Thermal & Heat Resistance',
        'Vibration Resistant Structure',
        'White/Grey Body with Blue/Black Lid'
      ], 
      desc: 'Heavy-duty IB series inverter battery module casing engineered for high heat resistance and 100Ah – 250Ah power storage.' 
    },
    { 
      badge: '05', 
      title: 'FRONT TERMINAL BATTERY MODULE', 
      rating: 'FT Series | 100Ah – 200Ah | PP / HIPS',
      img: '/assets/images/battery/battery_05_front_terminal.webp?v=2', 
      features: [
        'Front Terminal Direct Access',
        'Space-Saving Rack Cabinet Design',
        'Easy Installation & Wiring',
        'White/Grey Body with Blue/Black Lid'
      ], 
      desc: 'Front terminal FT series battery module designed for 100Ah – 200Ah telecom racks and space-saving battery cabinets.' 
    }
  ];

  // 4 2 Wheeler EV Charger Products
  const evProducts = [
    { 
      badge: '01', 
      title: 'STANDARD CHARGER', 
      rating: '2A / 4A Options',
      img: '/assets/images/ev/ev_charger_01_standard.webp?v=2', 
      features: [
        'Compact & Lightweight',
        '2A / 4A Power Options',
        'Easy Plug & Play System',
        'Built for Daily Charging'
      ], 
      desc: 'Standard 2A/4A compact two-wheeler electric vehicle charger designed for efficient and reliable everyday battery replenishment.' 
    },
    { 
      badge: '02', 
      title: 'FAST CHARGER', 
      rating: '4A – 8A Options',
      img: '/assets/images/ev/ev_charger_02_fast.webp?v=2', 
      features: [
        'Faster High-Current Charging',
        'High Power Conversion Efficiency',
        'Auto Cut-Off Overcharge Protection',
        'Intelligent Thermal Control'
      ], 
      desc: 'High-speed 4A-8A EV fast charger featuring auto cut-off protection and advanced thermal management for quick turnaround.' 
    },
    { 
      badge: '03', 
      title: 'SMART CHARGER (WITH INDICATORS)', 
      rating: 'LED Status & Protection',
      img: '/assets/images/ev/ev_charger_03_smart.webp?v=2', 
      features: [
        'LED Status Indication Light',
        'Multi-Layer Overcharge Protection',
        'Wide AC Input Voltage Range',
        'Smart Microcontroller IC Protection'
      ], 
      desc: 'Smart two-wheeler EV charger equipped with LED status diagnostic lights and full overcharge and surge protection.' 
    },
    { 
      badge: '04', 
      title: 'WEATHER PROOF CHARGER', 
      rating: 'IP65 Weatherproof Sealed',
      img: '/assets/images/ev/ev_charger_04_weatherproof.webp?v=2', 
      features: [
        'IP65 Weatherproof Sealed Casing',
        'Dust & Water Splash Resistant',
        'Built for All Climate Conditions',
        'Heavy-Duty Outdoor Reliability'
      ], 
      desc: 'Heavy-duty IP65 rated weatherproof two-wheeler charger built to withstand outdoor rain, dust, and harsh climate conditions.' 
    }
  ];

  // 5 Large Injection Moulded Products
  const mouldedProducts = [
    { 
      badge: '01', 
      title: 'INVERTER BATTERY MOULDED CASE', 
      rating: 'Heavy Duty | Long Life | Robust Design',
      img: '/assets/images/moulded/moulded_01_inverter.png?v=2', 
      features: [
        'Heavy Duty Construction',
        'Long Operating Life',
        'Robust Impact-Resistant Design',
        'High Thermal Stability'
      ], 
      desc: 'Heavy-duty precision injection moulded inverter battery case engineered for long life and maximum structural integrity.' 
    },
    { 
      badge: '02', 
      title: 'SOLAR BATTERY MOULDED CASE', 
      rating: 'UV Stabilized | High Strength | Durable',
      img: '/assets/images/moulded/moulded_02_solar.png?v=2', 
      features: [
        'UV Stabilized Outer Shell',
        'High Tensile & Impact Strength',
        'Weather & Outdoor Durable',
        'Acid & Chemical Resistant'
      ], 
      desc: 'UV-stabilized high-strength polymer solar battery outer module casing designed for outdoor solar storage reliability.' 
    },
    { 
      badge: '03', 
      title: 'UPS BATTERY MOULDED CASE', 
      rating: 'Flame Retardant | Impact Resistant',
      img: '/assets/images/moulded/moulded_03_ups.png?v=2', 
      features: [
        'Flame Retardant Resin',
        'High Impact Resistant Build',
        'Precision Moulded Fit',
        'Vibration-Proof Structure'
      ], 
      desc: 'Flame-retardant impact-resistant polymer UPS battery enclosure for high performance standby power systems.' 
    },
    { 
      badge: '04', 
      title: 'AUTOMOTIVE BATTERY MOULDED CASE', 
      rating: 'Vibration Resistant | Leak Proof',
      img: '/assets/images/moulded/moulded_04_automotive.png?v=2', 
      features: [
        'Vibration Resistant Casing',
        '100% Leak Proof Construction',
        'Heat & Acid Resistant Polymer',
        'Heavy Duty Vehicle Use'
      ], 
      desc: 'High durability automotive battery case built to withstand intense vehicle vibration, thermal stress, and acid corrosion.' 
    },
    { 
      badge: '05', 
      title: 'TELECOM & POWER ENCLOSURES', 
      rating: 'Weatherproof | Precision | Reliable',
      img: '/assets/images/moulded/moulded_05_telecom.png?v=2', 
      features: [
        'Weatherproof Outdoor Housing',
        'High Precision Injection Moulding',
        'Reliable Equipment Protection',
        'Industrial Polymer Shell'
      ], 
      desc: 'High precision weatherproof polymer enclosures engineered for telecom, industrial power banks, and equipment protection.' 
    }
  ];

  return (
    <div className="products-page">
      
      {/* =========================================================================
           1. Dynamic Top Hero Banner (Matching products.html 100%)
           ========================================================================= */}
      {activeCategory === 'all' && (
        <section className="products-hero-bar" id="topBannerAll">
          <div className="container">
            <div className="products-hero-flex">
              <div className="products-hero-intro">
                <h1 className="products-page-title">PRODUCTS</h1>
                <h2 className="products-page-tagline">
                  POWERING CONNECTIONS.<br />
                  <span>ENERGIZING FUTURES.</span>
                </h2>
                <p className="products-page-desc">
                  A wide range of high-quality electrical solutions designed for safety, reliability and performance. Built to power every connection, every day.
                </p>
              </div>

              <div className="products-hero-circuit"></div>

              <div className="products-hero-badges">
                <div className="p-badge-item"><ShieldCheck className="p-badge-icon" size={20} /><div className="p-badge-text">SAFE &amp;<br />RELIABLE</div></div>
                <div className="p-badge-item"><Gem className="p-badge-icon" size={20} /><div className="p-badge-text">PREMIUM<br />QUALITY</div></div>
                <div className="p-badge-item"><Leaf className="p-badge-icon" size={20} /><div className="p-badge-text">FUTURE<br />READY</div></div>
                <div className="p-badge-item"><MapPin className="p-badge-icon" size={20} /><div className="p-badge-text">MADE IN<br />INDIA</div></div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeCategory === 'wires' && (
        <section className="wires-hero-banner-section" id="topBannerWires">
          <div className="container">
            <div className="category-breadcrumb-bar">
              <div className="breadcrumb-trail">
                <Link to="/">Home</Link> <span>&gt;</span>
                <Link to="/products">Products</Link> <span>&gt;</span>
                <span className="trail-current">Wires &amp; Cables Range</span>
              </div>
            </div>
            <div className="wires-hero-grid">
              <div className="wires-hero-content">
                <h1 className="wires-hero-title">WIRES &amp; CABLES</h1>
                <h2 className="wires-hero-subtitle">PREMIUM QUALITY. MAXIMUM SAFETY. SUPERIOR PERFORMANCE.</h2>
                <p className="wires-hero-desc">
                  Our wires and cables are manufactured using high-grade raw materials and advanced technology to ensure durability, reliability and consistent performance for every connection.
                </p>
              </div>
              <div className="wires-hero-visual">
                <img src="/assets/images/wires/wire_hero_banner.webp" alt="Wires & Cables Spool" className="wires-drum-img" onError={(e) => { e.target.src = '/assets/images/wires_cables_mockup.webp'; }} />
              </div>
              <div className="wires-hero-badges-col">
                <div className="p-badge-item"><ShieldCheck className="p-badge-icon" size={18} /><div className="p-badge-text">SAFE &amp; RELIABLE</div></div>
                <div className="p-badge-item"><Gem className="p-badge-icon" size={18} /><div className="p-badge-text">PREMIUM QUALITY</div></div>
                <div className="p-badge-item"><Leaf className="p-badge-icon" size={18} /><div className="p-badge-text">FUTURE READY</div></div>
                <div className="p-badge-item"><MapPin className="p-badge-icon" size={18} /><div className="p-badge-text">MADE IN INDIA</div></div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeCategory === 'harness' && (
        <section className="wires-hero-banner-section harness-hero-banner-section" id="topBannerHarness">
          <div className="container">
            <div className="category-breadcrumb-bar">
              <div className="breadcrumb-trail">
                <Link to="/">Home</Link> <span>&gt;</span>
                <Link to="/products">Products</Link> <span>&gt;</span>
                <span className="trail-current">Wiring Harness &amp; Battery Cable</span>
              </div>
            </div>
            <div className="harness-hero-grid">
              <div className="harness-hero-content">
                <span className="harness-hero-tag">PREMIUM OEM MANUFACTURING</span>
                <h1 className="harness-hero-title">WIRING HARNESS &amp;<br /><span>BATTERY CABLES</span></h1>
                <h2 className="harness-hero-subtitle">Engineered for Performance. Built for Reliability.</h2>
                <p className="harness-hero-desc">
                  Our wiring harnesses and battery cables deliver safe, efficient and long-lasting connections for critical applications.
                </p>
              </div>
              <div className="harness-hero-visual">
                <img src="/assets/images/harness/harness_hero_main.webp" alt="Wiring Harness Studio" className="harness-hero-img" onError={(e) => { e.target.src = '/assets/images/wiring_harness.webp'; }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {activeCategory === 'switches' && (
        <section className="wires-hero-banner-section extension-hero-banner-section" id="topBannerSwitches">
          <div className="container">
            <div className="category-breadcrumb-bar">
              <div className="breadcrumb-trail">
                <Link to="/">Home</Link> <span>&gt;</span>
                <Link to="/products">Products</Link> <span>&gt;</span>
                <span className="trail-current">Modular Switches</span>
              </div>
            </div>
            <div className="extension-hero-grid">
              <div className="extension-hero-content">
                <span className="extension-hero-tag">ELECTRICAL</span>
                <h1 className="extension-hero-title">MODULAR SWITCHES</h1>
                <h2 className="extension-hero-slogan">Elegant Design. Superior Performance.</h2>
                <p className="extension-hero-desc">
                  <strong>Architectural switch panels for modern living.</strong><br />
                  Engineered with high-conductive brass terminals, silver contact tips, and smooth ergonomic rocker switches tested for 100,000+ switching operations.
                </p>
                <div className="extension-hero-badges-row">
                  <div className="ext-badge-item"><div className="ext-badge-circle"><ShieldCheck size={20} /></div><div className="ext-badge-label">Premium<br />Finish</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Zap size={20} /></div><div className="ext-badge-label">Long Life<br />Performance</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><ShieldAlert size={20} /></div><div className="ext-badge-label">Safe &amp;<br />Reliable</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Layers size={20} /></div><div className="ext-badge-label">Modular<br />Design</div></div>
                </div>
              </div>
              <div className="extension-hero-visual">
                <img src="/assets/images/products/modular_switches_sheet.webp" alt="Hadrons Modular Switches" className="extension-hero-img" onError={(e) => { e.target.src = '/assets/images/product_page/prod_04_switches.webp'; }} />
              </div>
            </div>
          </div>
        </section>
      )}


      {activeCategory === 'extension' && (
        <section className="wires-hero-banner-section extension-hero-banner-section" id="topBannerExtension">
          <div className="container">
            <div className="category-breadcrumb-bar">
              <div className="breadcrumb-trail">
                <Link to="/">Home</Link> <span>&gt;</span>
                <Link to="/products">Products</Link> <span>&gt;</span>
                <span className="trail-current">Extension Boards</span>
              </div>
            </div>
            <div className="extension-hero-grid">
              <div className="extension-hero-content">
                <span className="extension-hero-tag">ELECTRICAL</span>
                <h1 className="extension-hero-title">EXTENSION BOARDS</h1>
                <h2 className="extension-hero-slogan">Hadrons wires &ldquo;Power Flows without fire&rdquo;</h2>
                <p className="extension-hero-desc">
                  <strong>Safe connections. Smart design. Superior performance.</strong><br />
                  Our extension boards are designed using high quality materials, advanced technology and strict quality standards to ensure maximum safety for your everyday needs.
                </p>
                <div className="extension-hero-badges-row">
                  <div className="ext-badge-item"><div className="ext-badge-circle"><ShieldCheck size={20} /></div><div className="ext-badge-label">Safe &amp;<br />Reliable</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Flame size={20} /></div><div className="ext-badge-label">Fire<br />Retardant</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><ShieldAlert size={20} /></div><div className="ext-badge-label">Overload<br />Protection</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><LinkIcon size={20} /></div><div className="ext-badge-label">Durable<br />&amp; Long Lasting</div></div>
                </div>
              </div>
              <div className="extension-hero-visual">
                <img src="/assets/images/extension/extension_hero_main.webp" alt="Hadrons Electrical Extension Boards" className="extension-hero-img" onError={(e) => { e.target.src = '/extension_boards.jpg'; }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {activeCategory === 'chargers' && (
        <section className="wires-hero-banner-section laptop-hero-banner-section" id="topBannerLaptop">
          <div className="container">
            <div className="category-breadcrumb-bar">
              <div className="breadcrumb-trail">
                <Link to="/">Home</Link> <span>&gt;</span>
                <Link to="/products">Products</Link> <span>&gt;</span>
                <span className="trail-current">Laptop Chargers</span>
              </div>
            </div>
            <div className="laptop-hero-grid">
              <div className="laptop-hero-content">
                <h1 className="laptop-hero-title">LAPTOP<br />CHARGERS</h1>
                <h2 className="laptop-hero-slogan">Powering Productivity. Delivering Trust.</h2>
                <p className="laptop-hero-desc">
                  <strong>Engineered for performance. Built for safety.</strong><br />
                  Hadrons Laptop Chargers deliver intelligent power, maximum efficiency and uncompromised reliability for your laptops, every time.
                </p>
                <div className="laptop-hero-badges-row">
                  <div className="ext-badge-item"><div className="ext-badge-circle"><ShieldCheck size={20} /></div><div className="ext-badge-label">Safe &amp;<br />Reliable</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><ShieldAlert size={20} /></div><div className="ext-badge-label">Overload<br />Protection</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Thermometer size={20} /></div><div className="ext-badge-label">Heat<br />Resistant</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Zap size={20} /></div><div className="ext-badge-label">Energy<br />Efficient</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Leaf size={20} /></div><div className="ext-badge-label">Eco<br />Friendly</div></div>
                </div>
              </div>
              <div className="laptop-hero-visual">
                <img src="/assets/images/laptop/laptop_hero_main.webp" alt="Hadrons Laptop Chargers" className="laptop-hero-img" onError={(e) => { e.target.src = '/assets/images/chargers_cables.webp'; }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {activeCategory === 'mobile_chargers' && (
        <section className="wires-hero-banner-section mobile-hero-banner-section" id="topBannerMobileChargers">
          <div className="container">
            <div className="category-breadcrumb-bar">
              <div className="breadcrumb-trail">
                <Link to="/">Home</Link> <span>&gt;</span>
                <Link to="/products">Products</Link> <span>&gt;</span>
                <span className="trail-current">Mobile Chargers</span>
              </div>
            </div>
            <div className="mobile-hero-grid">
              <div className="mobile-hero-content">
                <h1 className="mobile-hero-title">MOBILE CHARGERS</h1>
                <h2 className="mobile-hero-subtitle">Powering Life. Every Moment.</h2>
                <div className="mobile-hero-pill-badge">
                  <Zap size={14} style={{ marginRight: '6px' }} />
                  <span>FROM USB TO PD – WE POWER IT ALL</span>
                </div>
                <p className="mobile-hero-desc">
                  Hadrons Mobile Chargers are designed to deliver fast, safe and intelligent charging for every device you use.
                </p>
                <div className="mobile-hero-badges-row">
                  <div className="ext-badge-item">
                    <div className="ext-badge-circle"><ShieldCheck size={20} /></div>
                    <div className="ext-badge-label">Safe &amp;<br />Reliable</div>
                  </div>
                  <div className="ext-badge-item">
                    <div className="ext-badge-circle"><Cpu size={20} /></div>
                    <div className="ext-badge-label">Smart IC<br />Protection</div>
                  </div>
                  <div className="ext-badge-item">
                    <div className="ext-badge-circle"><Zap size={20} /></div>
                    <div className="ext-badge-label">Fast &amp; Efficient<br />Charging</div>
                  </div>
                  <div className="ext-badge-item">
                    <div className="ext-badge-circle"><Globe size={20} /></div>
                    <div className="ext-badge-label">Wide Device<br />Compatibility</div>
                  </div>
                  <div className="ext-badge-item">
                    <div className="ext-badge-circle"><Leaf size={20} /></div>
                    <div className="ext-badge-label">Energy<br />Efficient</div>
                  </div>
                </div>

                <div className="ideal-for-bar">
                  <span className="ideal-for-title">IDEAL FOR:</span>
                  <div className="ideal-for-tags">
                    <span className="ideal-tag">Work</span>
                    <span className="ideal-sep">|</span>
                    <span className="ideal-tag">Study</span>
                    <span className="ideal-sep">|</span>
                    <span className="ideal-tag">Travel</span>
                    <span className="ideal-sep">|</span>
                    <span className="ideal-tag">Home</span>
                    <span className="ideal-sep">|</span>
                    <span className="ideal-tag">Gaming</span>
                  </div>
                </div>
              </div>
              <div className="mobile-hero-visual-wrap">
                <img 
                  src="/assets/images/chargers/mobile_chargers_hero_main.webp?v=3" 
                  alt="Hadrons Mobile Chargers" 
                  className="mobile-hero-img" 
                  onError={(e) => { e.target.src = '/assets/images/chargers_cables.webp'; }} 
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {activeCategory === 'fans' && (
        <section className="wires-hero-banner-section ac-hero-banner-section" id="topBannerAC">
          <div className="container">
            <div className="category-breadcrumb-bar">
              <div className="breadcrumb-trail">
                <Link to="/">Home</Link> <span>&gt;</span>
                <Link to="/products">Products</Link> <span>&gt;</span>
                <span className="trail-current">AC Grills &amp; Fans</span>
              </div>
            </div>
            <div className="ac-hero-grid">
              <div className="ac-hero-content">
                <h1 className="ac-hero-title">AC GRILLS &amp; FANS<br /><span className="ac-title-subline">WITH OTHER AC COMPONENTS</span></h1>
                <h2 className="ac-hero-subtitle">Engineered for Efficiency. Built for Scale.</h2>
                <div className="ac-hero-pill-badge"><span>POWERING PERFORMANCE EVERY TIME</span></div>
                <p className="ac-hero-desc">Precision engineered AC components designed for superior airflow, durability and aesthetics. Trusted by leading AC brands for quality, consistency and large scale performance.</p>
                <div className="ac-hero-badges-row">
                  <div className="ext-badge-item"><div className="ext-badge-circle"><ShieldCheck size={20} /></div><div className="ext-badge-label">Premium<br />Quality</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Fan size={20} /></div><div className="ext-badge-label">High Airflow<br />Efficiency</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><LinkIcon size={20} /></div><div className="ext-badge-label">Strong &amp;<br />Durable</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Compass size={20} /></div><div className="ext-badge-label">Precision<br />Manufacturing</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Settings size={20} /></div><div className="ext-badge-label">OEM Grade<br />Excellence</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Leaf size={20} /></div><div className="ext-badge-label">Sustainable<br />Solutions</div></div>
                </div>
              </div>
              <div className="ac-hero-visual-wrap">
                <img src="/assets/images/ac/ac_hero_main.webp" alt="Hadrons AC Grills and Fans" className="ac-hero-img" onError={(e) => { e.target.src = '/ac_components.jpg'; }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {activeCategory === 'coolers' && (
        <section className="wires-hero-banner-section cooler-hero-banner-section" id="topBannerCoolers">
          <div className="container">
            <div className="category-breadcrumb-bar">
              <div className="breadcrumb-trail">
                <Link to="/">Home</Link> <span>&gt;</span>
                <Link to="/products">Products</Link> <span>&gt;</span>
                <span className="trail-current">Coolers (Body &amp; Fans)</span>
              </div>
            </div>
            <div className="cooler-hero-grid">
              <div className="cooler-hero-content">
                <h1 className="cooler-hero-title">COOLER PARTS</h1>
                <h2 className="cooler-hero-subtitle">ENGINEERED FOR COMFORT.<br />BUILT FOR PERFORMANCE.</h2>
                <div className="cooler-hero-pill-badge"><Zap size={14} style={{ marginRight: '6px' }} /><span>POWERING PERFORMANCE EVERY TIME</span></div>
                <p className="cooler-hero-desc">High quality cooler parts and bodies, precision engineered for superior airflow, durability and aesthetics. Trusted by leading cooler manufacturers and OEMs across India.</p>
                <div className="cooler-hero-badges-row">
                  <div className="ext-badge-item"><div className="ext-badge-circle"><ShieldCheck size={20} /></div><div className="ext-badge-label">Premium<br />Quality</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Fan size={20} /></div><div className="ext-badge-label">High Airflow<br />Efficiency</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><LinkIcon size={20} /></div><div className="ext-badge-label">Strong &amp;<br />Durable</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Compass size={20} /></div><div className="ext-badge-label">Precision<br />Manufacturing</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Award size={20} /></div><div className="ext-badge-label">OEM Grade<br />Excellence</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Leaf size={20} /></div><div className="ext-badge-label">Sustainable<br />Solutions</div></div>
                </div>
              </div>
              <div className="cooler-hero-visual-wrap">
                <img src="/assets/images/coolers/cooler_hero_main.webp" alt="Hadrons Cooler Parts" className="cooler-hero-img" onError={(e) => { e.target.src = '/ac_components.jpg'; }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {activeCategory === 'powercord' && (
        <section className="wires-hero-banner-section powercord-hero-banner-section" id="topBannerPowerCord">
          <div className="container">
            <div className="category-breadcrumb-bar">
              <div className="breadcrumb-trail">
                <Link to="/">Home</Link> <span>&gt;</span>
                <Link to="/products">Products</Link> <span>&gt;</span>
                <span className="trail-current">Power Cord (6A &amp; 16A)</span>
              </div>
            </div>
            <div className="cooler-hero-grid powercord-hero-grid">
              <div className="cooler-hero-content">
                <h1 className="cooler-hero-title">POWER CORDS</h1>
                <h2 className="cooler-hero-subtitle">BUILT TO CONNECT.<br />BUILT TO PERFORM.</h2>
                <div className="cooler-hero-pill-badge"><Zap size={14} style={{ marginRight: '6px' }} /><span>POWERING PERFORMANCE EVERY TIME</span></div>
                <p className="cooler-hero-desc">High performance power cords designed for safety, durability and long lasting reliability. Trusted by leading OEMs across India and around the world.</p>
                <div className="cooler-hero-badges-row">
                  <div className="ext-badge-item"><div className="ext-badge-circle"><ShieldCheck size={20} /></div><div className="ext-badge-label">Safe &amp;<br />Reliable</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Zap size={20} /></div><div className="ext-badge-label">High Current<br />Capacity</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Flame size={20} /></div><div className="ext-badge-label">Flame<br />Retardant</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><LinkIcon size={20} /></div><div className="ext-badge-label">Flexible &amp;<br />Durable</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Leaf size={20} /></div><div className="ext-badge-label">RoHS<br />Compliant</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Award size={20} /></div><div className="ext-badge-label">OEM Grade<br />Quality</div></div>
                </div>
              </div>
              <div className="cooler-hero-visual-wrap powercord-visual-wrap">
                <img src="/assets/images/power_cords/power_cords_hero_main.webp?v=4" alt="Hadrons Power Cords" className="powercord-hero-img" onError={(e) => { e.target.src = '/power_cords.jpg'; }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {activeCategory === 'datacenter' && (
        <section className="wires-hero-banner-section datacenter-hero-banner-section" id="topBannerDataCenter">
          <div className="container">
            <div className="category-breadcrumb-bar">
              <div className="breadcrumb-trail">
                <Link to="/">Home</Link> <span>&gt;</span>
                <Link to="/products">Products</Link> <span>&gt;</span>
                <span className="trail-current">Data Center Power Cords</span>
              </div>
            </div>
            <div className="cooler-hero-grid datacenter-hero-grid">
              <div className="cooler-hero-content">
                <h1 className="cooler-hero-title">DATA CENTER<br />POWER CORDS</h1>
                <h2 className="cooler-hero-subtitle">BUILT FOR RELIABILITY.<br />ENGINEERED FOR UPTIME.</h2>
                <div className="cooler-hero-pill-badge"><Zap size={14} style={{ marginRight: '6px' }} /><span>POWERING PERFORMANCE EVERY TIME</span></div>
                <p className="cooler-hero-desc">High performance power cords specifically designed for data centers and mission critical environments. Built for safety, efficiency and continuous performance.</p>
                <div className="cooler-hero-badges-row">
                  <div className="ext-badge-item"><div className="ext-badge-circle"><ShieldCheck size={20} /></div><div className="ext-badge-label">Safe &amp;<br />Reliable</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Zap size={20} /></div><div className="ext-badge-label">High Current<br />Capacity</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Lock size={20} /></div><div className="ext-badge-label">Secure<br />Connections</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Thermometer size={20} /></div><div className="ext-badge-label">Heat<br />Resistant</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Leaf size={20} /></div><div className="ext-badge-label">RoHS<br />Compliant</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Award size={20} /></div><div className="ext-badge-label">Tested for<br />Excellence</div></div>
                </div>
              </div>
              <div className="cooler-hero-visual-wrap datacenter-visual-wrap">
                <img src="/assets/images/datacenter/datacenter_hero_main.webp?v=2" alt="Hadrons Data Center Power Cords" className="datacenter-hero-img" onError={(e) => { e.target.src = '/power_cords.jpg'; }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {activeCategory === 'ev' && (
        <section className="wires-hero-banner-section ev-hero-banner-section" id="topBannerEV">
          <div className="container">
            <div className="category-breadcrumb-bar">
              <div className="breadcrumb-trail">
                <Link to="/">Home</Link> <span>&gt;</span>
                <Link to="/products">Products</Link> <span>&gt;</span>
                <span className="trail-current">2 Wheeler Electric Charger</span>
              </div>
            </div>
            <div className="cooler-hero-grid ev-hero-grid">
              <div className="cooler-hero-content">
                <h1 className="cooler-hero-title">2 WHEELER<br />ELECTRIC CHARGER</h1>
                <h2 className="cooler-hero-subtitle">BUILT TO CHARGE.<br />BUILT TO PERFORM.</h2>
                <div className="cooler-hero-pill-badge"><Zap size={14} style={{ marginRight: '6px' }} /><span>POWERING PERFORMANCE EVERY TIME</span></div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 20px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', fontWeight: 500 }}><Check size={18} style={{ color: '#0066FF', strokeWidth: 3 }} /><span>High efficiency, safe &amp; reliable charger with 3 pin 6A power cord.</span></li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', fontWeight: 500 }}><Check size={18} style={{ color: '#0066FF', strokeWidth: 3 }} /><span>Engineered for today's electric two wheelers.</span></li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', fontWeight: 500 }}><Check size={18} style={{ color: '#0066FF', strokeWidth: 3 }} /><span>Built for durability, compactness and consistent performance.</span></li>
                </ul>
                <div className="cooler-hero-badges-row">
                  <div className="ext-badge-item"><div className="ext-badge-circle"><ShieldCheck size={20} /></div><div className="ext-badge-label">Safe &amp;<br />Reliable</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Zap size={20} /></div><div className="ext-badge-label">Fast &amp; Efficient<br />Charging</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Thermometer size={20} /></div><div className="ext-badge-label">Overheat<br />Protection</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><ShieldAlert size={20} /></div><div className="ext-badge-label">Short Circuit<br />Protection</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Leaf size={20} /></div><div className="ext-badge-label">RoHS<br />Compliant</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Award size={20} /></div><div className="ext-badge-label">Tested for<br />Excellence</div></div>
                </div>
              </div>
              <div className="cooler-hero-visual-wrap ev-visual-wrap">
                <img src="/assets/images/ev/ev_hero_main.webp" alt="Hadrons 2 Wheeler EV Charger" className="ev-hero-img" onError={(e) => { e.target.src = '/assets/images/ev_chargers.webp'; }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {activeCategory === 'moulded' && (
        <section className="wires-hero-banner-section moulded-hero-banner-section" id="topBannerMoulded">
          <div className="container">
            <div className="category-breadcrumb-bar">
              <div className="breadcrumb-trail">
                <Link to="/">Home</Link> <span>&gt;</span>
                <Link to="/products">Products</Link> <span>&gt;</span>
                <span className="trail-current">Large Injection Moulded Components</span>
              </div>
            </div>
            <div className="cooler-hero-grid moulded-hero-grid">
              <div className="cooler-hero-content">
                <h1 className="cooler-hero-title">LARGE INJECTION<br />MOULD PARTS</h1>
                <h2 className="cooler-hero-subtitle">PRECISION ENGINEERED.<br />BUILT TO PERFORM.</h2>
                <div className="cooler-hero-pill-badge"><Settings size={14} style={{ marginRight: '6px' }} /><span>HIGH STRENGTH. LONG LIFE. ZERO COMPROMISE.</span></div>
                <p className="cooler-hero-desc">We manufacture high-quality, large-size injection moulded parts for power, energy storage and industrial applications using advanced technology and high tonnage machines.</p>
                <div className="cooler-hero-badges-row" style={{ flexWrap: 'wrap' }}>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Target size={20} /></div><div className="ext-badge-label">High Dimensional<br />Accuracy</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><ShieldCheck size={20} /></div><div className="ext-badge-label">Strong &amp;<br />Impact Resistant</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Layers size={20} /></div><div className="ext-badge-label">High Quality<br />Engineering Plastics</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Thermometer size={20} /></div><div className="ext-badge-label">Heat &amp; Weather<br />Resistant</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Feather size={20} /></div><div className="ext-badge-label">Lightweight<br />&amp; Durable</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><RefreshCw size={20} /></div><div className="ext-badge-label">Corrosion<br />Resistant</div></div>
                </div>
              </div>
              <div className="cooler-hero-visual-wrap moulded-visual-wrap">
                <img src="/assets/images/moulded/moulded_hero_main.webp" alt="Hadrons Large Injection Moulded Components" className="moulded-hero-img" onError={(e) => { e.target.src = '/assets/images/moulded_parts.webp'; }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {activeCategory === 'battery_modules' && (
        <section className="wires-hero-banner-section battery-hero-banner-section" id="topBannerBattery">
          <div className="container">
            <div className="category-breadcrumb-bar">
              <div className="breadcrumb-trail">
                <Link to="/">Home</Link> <span>&gt;</span>
                <Link to="/products">Products</Link> <span>&gt;</span>
                <span className="trail-current">Solar &amp; Inverter Battery Outer Modules</span>
              </div>
            </div>
            <div className="cooler-hero-grid battery-hero-grid">
              <div className="cooler-hero-content">
                <h1 className="cooler-hero-title">SOLAR &amp; INVERTER<br />BATTERY MODULES</h1>
                <h2 className="cooler-hero-subtitle">HEAVY-DUTY POLYMER.<br />BUILT TO PROTECT.</h2>
                <div className="cooler-hero-pill-badge">
                  <Zap size={14} style={{ marginRight: '6px' }} />
                  <span>SHOCKPROOF • UV &amp; THERMAL RESISTANT • FLAME RETARDANT</span>
                </div>
                <p className="cooler-hero-desc">
                  High strength precision injection-moulded outer battery enclosures and module covers designed for solar, inverter, and industrial energy storage applications.
                </p>
                <div className="cooler-hero-badges-row">
                  <div className="ext-badge-item"><div className="ext-badge-circle"><ShieldCheck size={20} /></div><div className="ext-badge-label">Heavy-Duty<br />Polymer</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Flame size={20} /></div><div className="ext-badge-label">Shockproof &amp;<br />Flame Retardant</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Thermometer size={20} /></div><div className="ext-badge-label">UV &amp; Thermal<br />Resistant</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Settings size={20} /></div><div className="ext-badge-label">Custom OEM<br />Fit</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><ShieldAlert size={20} /></div><div className="ext-badge-label">Impact<br />Resistant</div></div>
                  <div className="ext-badge-item"><div className="ext-badge-circle"><Award size={20} /></div><div className="ext-badge-label">Tested for<br />Durability</div></div>
                </div>
              </div>
              <div className="cooler-hero-visual-wrap battery-visual-wrap">
                <img 
                  src="/assets/images/battery/battery_hero_main.webp?v=3" 
                  alt="Hadrons Solar & Inverter Battery Outer Modules" 
                  className="battery-hero-img" 
                  onError={(e) => { e.target.src = '/assets/images/products/solar_battery_modules.webp'; }} 
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
           2. Horizontal Category Filter Track (Scrollable Bar)
           ========================================================================= */}
      <section className="category-filter-section" style={{ padding: '30px 0 10px 0' }}>
        <div className="container">
          <FilterTrack 
            categories={PRODUCT_CATEGORIES} 
            activeCategory={activeCategory} 
            onCategoryChange={handleCategoryChange} 
          />
        </div>
      </section>

      {/* =========================================================================
           3. Main Two-Column Layout (Sidebar + Product Cards Area)
           ========================================================================= */}
      <section className="products-catalog-section" style={{ padding: '20px 0 60px 0' }}>
        <div className="container">
          <div className="products-catalog-layout">
            
            {/* Left Sidebar: Category Menu & Custom Box */}
            <aside className="products-sidebar">
              
              <div className="sidebar-categories-card">
                <div className="sidebar-header">
                  <Layers size={18} />
                  <h3>PRODUCT CATEGORIES</h3>
                </div>

                <div className="sidebar-menu-list">
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      className={`sidebar-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                      onClick={() => handleCategoryChange(cat.id)}
                    >
                      <div className="cat-btn-left">
                        {CAT_ICONS[cat.id] || <Grid size={16} />}
                        <span>{cat.label}</span>
                      </div>
                      {cat.id === 'harness' && <span className="cat-badge-new">NEW</span>}
                      <ChevronRight className="cat-chevron" size={16} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Engineering Box */}
              <div className="sidebar-custom-card">
                <h4>LOOKING FOR CUSTOM SOLUTIONS?</h4>
                <p>We provide OEM &amp; Custom contract solutions tailored to your client blueprints.</p>
                <Link to="/contact" className="btn-sidebar-enquire">
                  <span>ENQUIRE NOW</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

            </aside>

            {/* Right Main Cards Area */}
            <main className="products-cards-area">
              
              {/* View 1: All Ecosystem Products (Default) */}
              {activeCategory === 'all' && (
                <div id="viewAllProducts">
                  <div className="catalog-row catalog-row-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '20px' }}>
                    {flagshipProducts.map((p) => (
                      <div key={p.id} className="catalog-item-card" style={{ cursor: 'pointer' }} onClick={() => handleCategoryChange(p.catId || p.id)}>
                        <div className="card-top-header">
                          <span className="card-num-badge">{p.badgeNum}</span>
                          <h4 className="card-header-title">
                            {p.title} {p.isNew && <span className="badge-new-pill">NEW</span>}
                          </h4>
                        </div>
                        <div 
                          className="card-product-img-wrap" 
                          style={{ height: '210px', padding: '10px', margin: '0' }}
                          onClick={() => handleCategoryChange(p.catId || p.id)}
                          title={`Click to view ${p.title} details`}
                        >
                          <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} onError={(e) => { e.target.src = p.fallbackImg; }} />
                        </div>
                        <button 
                          className="card-details-btn" 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCategoryChange(p.catId || p.id);
                          }}
                        >
                          <span>VIEW DETAILS</span> <ArrowRight size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* View 2: 10 Dedicated Wires & Cables Products */}
              {activeCategory === 'wires' && (
                <div id="viewWiresCables" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div className="catalog-row catalog-row-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                    {wireProducts.map((p) => (
                      <div key={p.badge} className="catalog-item-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/product-details?id=wires')}>
                        <div className="card-top-header">
                          <span className="card-num-badge">{p.badge}</span>
                          <h4 className="card-header-title">{p.title}</h4>
                        </div>
                        <div 
                          className="card-product-img-wrap" 
                          style={{ height: '155px', padding: '6px', margin: '0 0 10px 0' }}
                          onClick={() => navigate('/product-details?id=wires')}
                          title={`Click to view ${p.title} details`}
                        >
                          <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} onError={(e) => { e.target.src = '/assets/images/wires_cables.webp'; }} />
                        </div>
                        <ul className="card-features-list">
                          {p.features.map((f, idx) => (
                            <li key={idx}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* View 2.5: 4 Dedicated Wiring Harness & Battery Cable Products */}
              {activeCategory === 'harness' && (
                <div id="viewHarnessCables" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="catalog-row catalog-row-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                    {harnessProducts.map((p) => (
                      <div key={p.badge} className="catalog-item-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/product-details?id=harness')}>
                        <div className="card-top-header">
                          <span className="card-num-badge">{p.badge}</span>
                          <h4 className="card-header-title">{p.title}</h4>
                        </div>
                        <div 
                          className="card-product-img-wrap" 
                          style={{ height: '155px', padding: '6px', margin: '0 0 10px 0' }}
                          onClick={() => navigate('/product-details?id=harness')}
                          title={`Click to view ${p.title} details`}
                        >
                          <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} onError={(e) => { e.target.src = '/assets/images/harness/harness_hero_main.webp'; }} />
                        </div>
                        <ul className="card-features-list">
                          {p.features.map((f, idx) => (
                            <li key={idx}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* View 2.55: Modular Switches */}
              {activeCategory === 'switches' && (
                <div id="viewModularSwitches" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                  {modularSwitchTypes.map((type) => (
                    <div key={type.id} className="switch-type-group" style={{ background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-card)' }}>
                      <h3 style={{ fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '20px', borderBottom: '2px solid var(--hadrons-primary)', paddingBottom: '10px', display: 'inline-block' }}>{type.title}</h3>
                      <div className="catalog-row" style={{ display: 'grid', gridTemplateColumns: type.smallCards ? 'repeat(auto-fit, minmax(180px, 1fr))' : 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                        {type.variants.map((v) => (
                          <div key={v.badge} className="catalog-item-card" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }} onClick={() => setSelectedProduct({ title: `${type.title} - ${v.title}`, desc: v.desc, features: Object.entries(v.specs).map(([k, val]) => `${k}: ${val}`), img: v.img })}>
                            <div className="card-top-header">
                              <span className="card-num-badge">{v.badge}</span>
                              <h4 className="card-header-title" style={{ fontSize: type.smallCards ? '0.8rem' : '1rem' }}>{v.title}</h4>
                            </div>
                            <div 
                              className="card-product-img-wrap" 
                              style={{ 
                                height: (type.id === 'type-4' || type.id === 'type-3') ? '220px' : '190px', 
                                padding: (type.id === 'type-4' || type.id === 'type-3') ? '4px' : '6px', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                marginBottom: (type.id === 'type-4' || type.id === 'type-3') ? '4px' : '10px'
                              }}
                            >
                              <img 
                                src={v.img} 
                                alt={v.title} 
                                style={{ 
                                  maxWidth: '100%', 
                                  maxHeight: '100%', 
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'contain' 
                                }} 
                                onError={(e) => { e.target.src = '/assets/images/product_page/prod_04_switches.webp'; }} 
                              />
                            </div>
                            <div style={{ padding: '0 16px', flexGrow: 1 }}>
                              {v.desc && (
                                <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: Object.keys(v.specs).length > 0 ? '12px' : '16px', fontStyle: 'italic' }}>{v.desc}</p>
                              )}
                              {Object.keys(v.specs).length > 0 && (
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '0.8rem', paddingBottom: '16px' }}>
                                  {Object.entries(v.specs).map(([key, val]) => (
                                    <div key={key} style={{ background: '#f8f9fa', padding: '4px 8px', borderRadius: '4px', border: '1px solid #e9ecef' }}>
                                      <span style={{ color: '#888', display: 'block', fontSize: '0.7rem' }}>{key}</span>
                                      <span style={{ color: '#333', fontWeight: '500' }}>{val}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* View 2.6: 6 Dedicated Extension Board Products */}
              {activeCategory === 'extension' && (
                <div id="viewExtensionBoards" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="catalog-row catalog-row-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '20px' }}>
                    {extensionBoardProducts.map((p) => (
                      <div key={p.badge} className="catalog-item-card" style={{ cursor: 'pointer' }} onClick={() => setSelectedProduct({ title: p.title, desc: p.desc, features: p.features, img: p.img })}>
                        <div className="card-top-header">
                          <span className="card-num-badge">{p.badge}</span>
                          <h4 className="card-header-title">{p.title}</h4>
                        </div>
                        <div 
                          className="card-product-img-wrap" 
                          style={{ height: '165px', width: '100%', padding: '6px', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
                          onClick={() => setSelectedProduct({ title: p.title, desc: p.desc, features: p.features, img: p.img })}
                          title={`Click to view ${p.title} details`}
                        >
                          <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.3s ease' }} onError={(e) => { e.target.src = '/assets/images/extension_boards.webp'; }} />
                        </div>
                        <ul className="card-features-list">
                          {p.features.map((f, idx) => (
                            <li key={idx}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* View 2.7: 5 Dedicated Laptop Charger Products */}
              {activeCategory === 'chargers' && (
                <div id="viewLaptopChargers" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="catalog-row catalog-row-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                    {laptopChargerProducts.map((p) => {
                      const isStandardCharger = p.badge === '01';
                      return (
                        <div 
                          key={p.badge} 
                          className="catalog-item-card" 
                          style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }} 
                          onClick={() => {
                            if (isStandardCharger) {
                              navigate('/laptop-chargers');
                            } else {
                              setSelectedProduct({ title: p.title, desc: p.desc, features: p.features, img: p.img });
                            }
                          }}
                        >
                          <div className="card-top-header" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
                              <span className="card-num-badge">{p.badge}</span>
                              <h4 className="card-header-title" style={{ fontSize: '0.88rem', lineHeight: '1.25' }}>{p.title}</h4>
                            </div>
                            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--hadrons-blue-electric)', marginLeft: '34px' }}>{p.rating}</span>
                          </div>
                          <div 
                            className="card-product-img-wrap" 
                            style={{ height: '195px', width: '100%', padding: '2px', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
                            title={isStandardCharger ? "Click to view 6 Charger models (45W – 180W)" : `Click to view ${p.title} details`}
                          >
                            <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(1.15)', transition: 'transform 0.3s ease' }} onError={(e) => { e.target.src = '/assets/images/chargers_cables.webp'; }} />
                          </div>
                          <ul className="card-features-list" style={{ flexGrow: 1 }}>
                            {p.features.map((f, idx) => (
                              <li key={idx}>{f}</li>
                            ))}
                          </ul>
                          {isStandardCharger && (
                            <div style={{ marginTop: 'auto', paddingTop: '10px', borderTop: '1px dashed #d5e4f7' }}>
                              <span style={{ display: 'block', textAlign: 'center', background: '#0b3e8c', color: '#fff', padding: '6px 10px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: '800', letterSpacing: '0.3px' }}>
                                EXPLORE 6 MODELS (45W – 180W) →
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Compatible Brands Strip matching Catalog Sheet */}
                  <div 
                    style={{ 
                      marginTop: '12px', 
                      background: '#ffffff', 
                      border: '1.5px solid #d5e4f7', 
                      borderRadius: '12px', 
                      padding: '16px 24px',
                      boxShadow: '0 2px 10px rgba(10, 30, 74, 0.04)'
                    }}
                  >
                    <div style={{ marginBottom: '14px' }}>
                      <span style={{ 
                        fontSize: '0.78rem', 
                        fontWeight: '900', 
                        color: '#0b3e8c', 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.5px' 
                      }}>
                        COMPATIBLE BRANDS
                      </span>
                    </div>

                    <div 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between', 
                        flexWrap: 'wrap', 
                        gap: '16px 24px',
                        padding: '4px 0'
                      }}
                    >
                      {/* HP */}
                      <div style={{ display: 'flex', alignItems: 'center', height: '34px' }} title="HP">
                        <img src="/assets/images/brands/hp.svg?v=2" alt="HP" style={{ height: '30px', width: 'auto', objectFit: 'contain' }} />
                      </div>

                      {/* DELL */}
                      <div style={{ display: 'flex', alignItems: 'center', height: '34px' }} title="Dell">
                        <img src="/assets/images/brands/dell.svg?v=2" alt="Dell" style={{ height: '28px', width: 'auto', objectFit: 'contain' }} />
                      </div>

                      {/* Lenovo */}
                      <div style={{ display: 'flex', alignItems: 'center', height: '34px' }} title="Lenovo">
                        <img src="/assets/images/brands/lenovo.svg?v=2" alt="Lenovo" style={{ height: '22px', width: 'auto', objectFit: 'contain' }} />
                      </div>

                      {/* Acer */}
                      <div style={{ display: 'flex', alignItems: 'center', height: '34px' }} title="Acer">
                        <img src="/assets/images/brands/acer.svg?v=2" alt="Acer" style={{ height: '22px', width: 'auto', objectFit: 'contain' }} />
                      </div>

                      {/* ASUS */}
                      <div style={{ display: 'flex', alignItems: 'center', height: '34px' }} title="ASUS">
                        <img src="/assets/images/brands/asus.svg?v=2" alt="ASUS" style={{ height: '22px', width: 'auto', objectFit: 'contain' }} />
                      </div>

                      {/* Toshiba */}
                      <div style={{ display: 'flex', alignItems: 'center', height: '34px' }} title="Toshiba">
                        <img src="/assets/images/brands/toshiba.svg?v=2" alt="Toshiba" style={{ height: '20px', width: 'auto', objectFit: 'contain' }} />
                      </div>

                      {/* Samsung */}
                      <div style={{ display: 'flex', alignItems: 'center', height: '34px' }} title="Samsung">
                        <img src="/assets/images/brands/samsung.svg?v=2" alt="Samsung" style={{ height: '26px', width: 'auto', objectFit: 'contain' }} />
                      </div>

                      {/* Microsoft */}
                      <div style={{ display: 'flex', alignItems: 'center', height: '34px' }} title="Microsoft">
                        <img src="/assets/images/brands/microsoft.svg?v=2" alt="Microsoft" style={{ height: '22px', width: 'auto', objectFit: 'contain' }} />
                      </div>

                      {/* Xiaomi */}
                      <div style={{ display: 'flex', alignItems: 'center', height: '34px' }} title="Xiaomi">
                        <img src="/assets/images/brands/xiaomi.svg?v=2" alt="Xiaomi" style={{ height: '26px', width: '26px', objectFit: 'contain' }} />
                      </div>

                      {/* and more... */}
                      <span style={{ 
                        fontSize: '0.85rem', 
                        fontWeight: '700', 
                        color: '#64748b', 
                        fontStyle: 'italic',
                        whiteSpace: 'nowrap'
                      }}>
                        and more...
                      </span>
                    </div>
                  </div>

                  {/* Construction Details, Quality Gates, Safety & Packaging (from Catalog Sheet) */}
                  <LaptopChargerSpecsSection onOpenLightbox={(data) => setLightboxImage(data)} />
                </div>
              )}

              {/* View 2.8: 7 Dedicated AC Grills & Fans Products */}
              {activeCategory === 'fans' && (
                <div id="viewAcProducts" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="catalog-row catalog-row-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                    {acProducts.map((p) => (
                      <div key={p.badge} className="catalog-item-card" style={{ cursor: 'pointer' }} onClick={() => setSelectedProduct({ title: p.title, desc: p.desc, features: p.features, img: p.img })}>
                        <div className="card-top-header">
                          <span className="card-num-badge">{p.badge}</span>
                          <h4 className="card-header-title">{p.title}</h4>
                        </div>
                        <div 
                          className="card-product-img-wrap" 
                          style={{ height: '165px', width: '100%', padding: '6px', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
                          onClick={() => setSelectedProduct({ title: p.title, desc: p.desc, features: p.features, img: p.img })}
                          title={`Click to view ${p.title} details`}
                        >
                          <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.3s ease' }} onError={(e) => { e.target.src = '/assets/images/ac_components.webp'; }} />
                        </div>
                        <ul className="card-features-list">
                          {p.features.map((f, idx) => (
                            <li key={idx}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* View 2.9: 8 Dedicated Coolers (Body & Fans) Products */}
              {activeCategory === 'coolers' && (
                <div id="viewCoolerProducts" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="catalog-row catalog-row-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                    {coolerProducts.map((p) => {
                      const isCoolerBody = p.badge === '01';
                      const isFanBlades = p.badge === '03';
                      return (
                        <div 
                          key={p.badge} 
                          className="catalog-item-card" 
                          style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }} 
                          onClick={() => {
                            if (isCoolerBody) {
                              navigate('/cooler-bodies');
                            } else if (isFanBlades) {
                              navigate('/cooler-fans');
                            } else {
                              setSelectedProduct({ title: p.title, desc: p.desc, features: p.features, img: p.img });
                            }
                          }}
                        >
                          <div className="card-top-header">
                            <span className="card-num-badge">{p.badge}</span>
                            <h4 className="card-header-title">{p.title}</h4>
                          </div>
                          <div 
                            className="card-product-img-wrap" 
                            style={{ height: '165px', width: '100%', padding: '6px', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
                            title={isCoolerBody ? "Click to view 5 Cooler Body capacities" : (isFanBlades ? "Click to view 5 Fan Sweep sizes" : `Click to view ${p.title} details`)}
                          >
                            <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.3s ease' }} onError={(e) => { e.target.src = '/assets/images/ac_components.webp'; }} />
                          </div>
                          <ul className="card-features-list" style={{ flexGrow: 1 }}>
                            {p.features.map((f, idx) => (
                              <li key={idx}>{f}</li>
                            ))}
                          </ul>
                          {isCoolerBody && (
                            <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px dashed #d5e4f7' }}>
                              <span style={{ display: 'block', textAlign: 'center', background: '#0b3e8c', color: '#fff', padding: '6px 10px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: '800' }}>
                                EXPLORE 5 CAPACITIES (35L – 120L) →
                              </span>
                            </div>
                          )}
                          {isFanBlades && (
                            <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px dashed #d5e4f7' }}>
                              <span style={{ display: 'block', textAlign: 'center', background: '#0b3e8c', color: '#fff', padding: '6px 10px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: '800' }}>
                                EXPLORE 5 SWEEP SIZES (12" – 20") →
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* View 2.10: 6 Dedicated Power Cord Products */}
              {activeCategory === 'powercord' && (
                <div id="viewPowerCordProducts" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="catalog-row catalog-row-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                    {powerCordProducts.map((p) => (
                      <div key={p.badge} className="catalog-item-card" style={{ cursor: 'pointer', overflow: 'visible', position: 'relative' }} onClick={() => setSelectedProduct({ title: p.title, desc: p.desc, features: p.features, img: p.img })}>
                        <div className="card-top-header" style={{ position: 'relative', zIndex: 2 }}>
                          <span className="card-num-badge">{p.badge}</span>
                          <h4 className="card-header-title">{p.title}</h4>
                        </div>
                        <div 
                          className="card-product-img-wrap" 
                          style={{ height: '165px', width: '100%', padding: '6px', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible', position: 'relative', zIndex: 5 }}
                          onClick={() => setSelectedProduct({ title: p.title, desc: p.desc, features: p.features, img: p.img })}
                          title={`Click to view ${p.title} details`}
                        >
                          <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(1.1) translateY(-6px)', position: 'relative', zIndex: 10, transition: 'transform 0.3s ease' }} onError={(e) => { e.target.src = '/assets/images/power_cords.webp'; }} />
                        </div>
                        <ul className="card-features-list">
                          {p.features.map((f, idx) => (
                            <li key={idx}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* View 2.11: 6 Dedicated Data Center Power Cord Products */}
              {activeCategory === 'datacenter' && (
                <div id="viewDataCenterProducts" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="catalog-row catalog-row-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                    {dataCenterProducts.map((p) => (
                      <div key={p.badge} className="catalog-item-card" style={{ cursor: 'pointer', overflow: 'visible', position: 'relative' }} onClick={() => setSelectedProduct({ title: p.title, desc: p.desc, features: p.features, img: p.img })}>
                        <div className="card-top-header" style={{ position: 'relative', zIndex: 2 }}>
                          <span className="card-num-badge">{p.badge}</span>
                          <h4 className="card-header-title">{p.title}</h4>
                        </div>
                        <div 
                          className="card-product-img-wrap" 
                          style={{ height: '165px', width: '100%', padding: '6px', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible', position: 'relative', zIndex: 5 }}
                          onClick={() => setSelectedProduct({ title: p.title, desc: p.desc, features: p.features, img: p.img })}
                          title={`Click to view ${p.title} details`}
                        >
                          <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(1.1) translateY(-6px)', position: 'relative', zIndex: 10, transition: 'transform 0.3s ease' }} onError={(e) => { e.target.src = '/assets/images/datacenter/datacenter_hero_main.webp'; }} />
                        </div>
                        <ul className="card-features-list">
                          {p.features.map((f, idx) => (
                            <li key={idx}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* View 2.12: 4 Dedicated Mobile Charger Products */}
              {activeCategory === 'mobile_chargers' && (
                <div id="viewMobileChargerProducts" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="catalog-row catalog-row-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                    {mobileChargerProducts.map((p) => (
                      <div key={p.badge} className="catalog-item-card" style={{ cursor: 'pointer', overflow: 'visible', position: 'relative' }} onClick={() => setSelectedProduct({ title: p.title, desc: p.desc, features: p.features, img: p.img })}>
                        <div className="card-top-header" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '4px', position: 'relative', zIndex: 2 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
                            <span className="card-num-badge">{p.badge}</span>
                            <h4 className="card-header-title" style={{ fontSize: '0.88rem', lineHeight: '1.25' }}>{p.title}</h4>
                          </div>
                          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--hadrons-blue-electric)', marginLeft: '34px' }}>{p.rating}</span>
                        </div>
                        <div 
                          className="card-product-img-wrap" 
                          style={{ height: '165px', width: '100%', padding: '6px', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible', position: 'relative', zIndex: 5 }}
                          onClick={() => setSelectedProduct({ title: p.title, desc: p.desc, features: p.features, img: p.img })}
                          title={`Click to view ${p.title} details`}
                        >
                          <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(1.08) translateY(-4px)', position: 'relative', zIndex: 10, transition: 'transform 0.3s ease' }} onError={(e) => { e.target.src = '/assets/images/chargers_cables.webp'; }} />
                        </div>
                        <ul className="card-features-list">
                          {p.features.map((f, idx) => (
                            <li key={idx}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* View 2.13: 5 Dedicated Solar & Inverter Battery Outer Module Products */}
              {activeCategory === 'battery_modules' && (
                <div id="viewBatteryModuleProducts" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="catalog-row catalog-row-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '18px' }}>
                    {batteryModuleProducts.map((p) => (
                      <div key={p.badge} className="catalog-item-card" style={{ cursor: 'pointer' }} onClick={() => setSelectedProduct({ title: p.title, desc: p.desc, features: p.features, img: p.img })}>
                        <div className="card-top-header" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
                            <span className="card-num-badge">{p.badge}</span>
                            <h4 className="card-header-title" style={{ fontSize: '0.86rem', lineHeight: '1.25' }}>{p.title}</h4>
                          </div>
                          <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--hadrons-blue-electric)', marginLeft: '34px' }}>{p.rating}</span>
                        </div>
                        <div 
                          className="card-product-img-wrap" 
                          style={{ height: '160px', width: '100%', padding: '6px', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
                          onClick={() => setSelectedProduct({ title: p.title, desc: p.desc, features: p.features, img: p.img })}
                          title={`Click to view ${p.title} details`}
                        >
                          <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.3s ease' }} onError={(e) => { e.target.src = '/assets/images/products/solar_battery_modules.webp'; }} />
                        </div>
                        <ul className="card-features-list">
                          {p.features.map((f, idx) => (
                            <li key={idx}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* View 2.14: 4 Dedicated 2 Wheeler EV Charger Products */}
              {activeCategory === 'ev' && (
                <div id="viewEvProducts" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="catalog-row catalog-row-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                    {evProducts.map((p) => (
                      <div key={p.badge} className="catalog-item-card" style={{ cursor: 'pointer' }} onClick={() => setSelectedProduct({ title: p.title, desc: p.desc, features: p.features, img: p.img })}>
                        <div className="card-top-header" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
                            <span className="card-num-badge">{p.badge}</span>
                            <h4 className="card-header-title" style={{ fontSize: '0.88rem', lineHeight: '1.25' }}>{p.title}</h4>
                          </div>
                          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--hadrons-blue-electric)', marginLeft: '34px' }}>{p.rating}</span>
                        </div>
                        <div 
                          className="card-product-img-wrap" 
                          style={{ height: '210px', width: '100%', padding: '4px', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
                          onClick={() => setSelectedProduct({ title: p.title, desc: p.desc, features: p.features, img: p.img })}
                          title={`Click to view ${p.title} details`}
                        >
                          <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(1.28)', transition: 'transform 0.3s ease' }} onError={(e) => { e.target.src = '/assets/images/ev_chargers.webp'; }} />
                        </div>
                        <ul className="card-features-list">
                          {p.features.map((f, idx) => (
                            <li key={idx}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* View 2.15: 5 Dedicated Large Injection Moulded Products */}
              {activeCategory === 'moulded' && (
                <div id="viewMouldedProducts" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="catalog-row catalog-row-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '18px' }}>
                    {mouldedProducts.map((p) => (
                      <div key={p.badge} className="catalog-item-card" style={{ cursor: 'pointer' }} onClick={() => setSelectedProduct({ title: p.title, desc: p.desc, features: p.features, img: p.img })}>
                        <div className="card-top-header" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
                            <span className="card-num-badge">{p.badge}</span>
                            <h4 className="card-header-title" style={{ fontSize: '0.86rem', lineHeight: '1.25' }}>{p.title}</h4>
                          </div>
                          <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--hadrons-blue-electric)', marginLeft: '34px' }}>{p.rating}</span>
                        </div>
                        <div 
                          className="card-product-img-wrap" 
                          style={{ height: '160px', width: '100%', padding: '6px', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
                          onClick={() => setSelectedProduct({ title: p.title, desc: p.desc, features: p.features, img: p.img })}
                          title={`Click to view ${p.title} details`}
                        >
                          <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.3s ease' }} onError={(e) => { e.target.src = '/assets/images/moulded_parts.webp'; }} />
                        </div>
                        <ul className="card-features-list">
                          {p.features.map((f, idx) => (
                            <li key={idx}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* View 3: Dedicated Category Fallback Cards */}
              {activeCategory !== 'all' && activeCategory !== 'wires' && activeCategory !== 'harness' && activeCategory !== 'extension' && activeCategory !== 'chargers' && activeCategory !== 'fans' && activeCategory !== 'coolers' && activeCategory !== 'powercord' && activeCategory !== 'datacenter' && activeCategory !== 'mobile_chargers' && activeCategory !== 'battery_modules' && activeCategory !== 'ev' && activeCategory !== 'moulded' && (
                <div id="viewCategorySelected">
                  <div className="catalog-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 320px))', gap: '24px' }}>
                    {flagshipProducts.filter(p => p.catId === activeCategory || activeCategory.includes(p.catId)).map((p) => (
                      <div key={p.id} className="catalog-item-card" style={{ maxWidth: '320px', cursor: 'pointer' }} onClick={() => navigate(`/product-details?id=${p.id}`)}>
                        <div className="card-top-header">
                          <span className="card-num-badge">{p.badgeNum}</span>
                          <h4 className="card-header-title">{p.title}</h4>
                        </div>
                        <div 
                          className="card-product-img-wrap" 
                          style={{ height: '155px', padding: '6px', margin: '0 0 10px 0' }}
                          onClick={() => navigate(`/product-details?id=${p.id}`)}
                          title={`Click to view ${p.title} details`}
                        >
                          <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} onError={(e) => { e.target.src = p.fallbackImg; }} />
                        </div>
                        <ul className="card-features-list">
                          {p.features.map((f, idx) => (
                            <li key={idx}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </main>

          </div>
        </div>
      </section>


      {/* Shared Specifications & WhatsApp Inquiry Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />

      {/* High Resolution Click-to-Zoom Lightbox Modal */}
      <ImageLightboxModal 
        imageSrc={lightboxImage?.src} 
        title={lightboxImage?.title} 
        onClose={() => setLightboxImage(null)} 
      />
    </div>
  );
}
