import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
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
  Smartphone
} from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/productsData';
import FilterTrack from '../components/FilterTrack';
import ProductModal from '../components/ProductModal';
import ImageLightboxModal from '../components/ImageLightboxModal';

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
  };

  // Flagship Cards
  const flagshipProducts = [
    {
      id: 'wires',
      catId: 'wires',
      badgeNum: '01',
      title: 'WIRES & CABLES',
      img: '/assets/images/products/wires_cables_sheet.webp',
      fallbackImg: '/assets/images/wires_cables.webp',
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
      img: '/assets/images/products/harness_battery_cables_hero.webp',
      fallbackImg: '/assets/images/wiring_harness.webp',
      features: ['Customised wiring harness', 'High performance battery cables', 'For automotive & earth movers industry', 'Reliable & durable'],
      btnText: 'VIEW DETAILS',
      detailModal: { title: 'Wiring Harness & Battery Cable', desc: 'Heavy-duty bespoke automotive wiring looms, battery power cables, and industrial harnesses built with flame-retardant connectors and high-current endurance.' }
    },
    {
      id: 'extension',
      catId: 'extension',
      badgeNum: '03',
      title: 'EXTENSION BOARDS',
      img: '/assets/images/products/extension_boards_hero.webp',
      fallbackImg: '/assets/images/product_page/prod_03_extension.webp',
      features: ['Multiple socket options', 'Safety shutters', 'Overload protection', 'Stylish & durable design'],
      btnText: 'VIEW DETAILS',
      detailModal: { title: 'Extension Boards', desc: 'Surge-protected multi-socket power distribution strips with USB ports, master circuit breakers, and unbreakable fire-retardant polycarbonate body.' }
    },
    {
      id: 'switches',
      catId: 'switches',
      badgeNum: '04',
      title: 'MODULAR SWITCHES',
      img: '/assets/images/products/modular_switches_sheet.webp',
      fallbackImg: '/assets/images/product_page/prod_04_switches.webp',
      features: ['Premium finish', 'Long life performance', 'Safe & reliable', 'Modular design'],
      btnText: 'VIEW DETAILS',
      detailModal: { title: 'Modular Switches', desc: 'Architectural switch panels and sockets crafted with silver contact tips and arc-quenching chambers for 100,000+ clicks and high-voltage endurance.' }
    },
    {
      id: 'chargers',
      catId: 'chargers',
      badgeNum: '05',
      title: 'LAPTOP CHARGERS',
      img: '/assets/images/products/laptop_chargers_hero.webp',
      fallbackImg: '/assets/images/chargers_cables.webp',
      features: ['Fast & efficient charging', 'Multiple power ratings', 'Overvoltage protection', 'Compact & reliable'],
      btnText: 'VIEW DETAILS',
      detailModal: { title: 'Laptop Chargers', desc: 'Universal and OEM replacement laptop power adapters engineered with high-frequency transformers, heavy duty DC cables, and 90%+ energy conversion efficiency.' }
    },
    {
      id: 'fans',
      catId: 'fans',
      badgeNum: '06',
      title: 'AC GRILLS & FANS',
      img: '/assets/images/products/ac_components_hero.webp',
      fallbackImg: '/assets/images/product_page/prod_06_ac_fans.webp',
      features: ['High air flow design', 'Strong & durable', 'Precision moulded', 'Multiple sizes'],
      btnText: 'VIEW DETAILS',
      detailModal: { title: 'AC Grills & Fans', desc: 'Aerodynamically balanced fan grills, ventilation diffusers, and copper motor coils engineered for high-performance HVAC and cooling dynamics.' }
    },
    {
      id: 'coolers',
      catId: 'coolers',
      badgeNum: '07',
      title: 'COOLERS (BODY & FANS)',
      img: '/assets/images/products/cooler_parts_hero.webp',
      fallbackImg: '/assets/images/product_page/prod_07_coolers.webp',
      features: ['Sturdy & stylish bodies', 'Efficient cooling', 'High quality material', 'Customised solutions'],
      btnText: 'VIEW DETAILS',
      detailModal: { title: 'Coolers (Body & Fans)', desc: 'UV-stabilized engineered plastic cooler bodies, submersible pumps, and high-thrust fan assemblies built for severe summer conditions.' }
    },
    {
      id: 'powercord',
      catId: 'powercord',
      badgeNum: '08',
      title: 'POWER CORD (6A & 16A)',
      img: '/assets/images/products/power_cords_hero.webp',
      fallbackImg: '/assets/images/product_page/prod_08_power_cord.webp',
      features: ['6A & 16A options', '3 Pin - with earthing', 'High quality PVC', 'Safe & durable'],
      btnText: 'VIEW DETAILS',
      detailModal: { title: 'Power Cord (6A & 16A)', desc: 'ISI-certified 3-pin moulded power cords available in custom lengths and gauge thicknesses (0.75 sq mm to 2.5 sq mm) with nickel-plated solid brass pins.' }
    },
    {
      id: 'datacenter',
      catId: 'datacenter',
      badgeNum: '09',
      title: 'DATA CENTER POWER CORDS',
      img: '/assets/images/products/datacenter_cords_hero.webp',
      fallbackImg: '/assets/images/product_page/prod_09_datacenter.webp',
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
      img: '/assets/images/products/mobile_chargers_hero.webp',
      fallbackImg: '/assets/images/products/mobile_chargers_hero.webp',
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
      img: '/assets/images/products/solar_battery_modules.webp',
      fallbackImg: '/assets/images/products/solar_battery_modules.webp',
      features: ['Heavy-Duty Polymer Moulded', 'Shockproof & Flame Retardant', 'UV & Thermal Resistant', 'Custom Fit for Solar/Inverter Batteries'],
      btnText: 'VIEW DETAILS',
      detailModal: { title: 'Solar & Inverter Battery Outer Modules', desc: 'Precision-moulded polymer outer covers, handles, and battery casing modules engineered for solar PV battery storage, home inverters, and industrial energy storage.' }
    },
    {
      id: 'ev',
      catId: 'ev',
      badgeNum: '12',
      title: '2 WHEELER EV CHARGERS',
      img: '/assets/images/products/ev_2w_charger_hero.webp',
      fallbackImg: '/assets/images/ev_chargers.webp',
      features: ['Safe & smart charging', 'Overload protection', 'Compact & portable', 'Compatible with multiple EVs'],
      btnText: 'VIEW DETAILS',
      detailModal: { title: '2 Wheeler EV Chargers', desc: 'Smart AC wallbox chargers for electric two-wheelers with RFID security, flame-retardant gun holster, auto cut-off, and weatherproofing.' }
    },
    {
      id: 'moulded',
      catId: 'moulded',
      badgeNum: '13',
      title: 'LARGE INJECTION MOULDED COMPONENTS',
      img: '/assets/images/product_page/prod_11_moulded.webp',
      fallbackImg: '/assets/images/moulded_parts.webp',
      features: ['For AC, Coolers & Appliances', 'Precision moulded', 'High strength', 'Customised solutions'],
      btnText: 'VIEW DETAILS',
      detailModal: { title: 'Large Injection Moulded Components', desc: 'High-tonnage CNC plastic injection moulding, bespoke component tooling, and custom electrical enclosures engineered to customer CAD drawings.' }
    }
  ];

  // 10 Dedicated Wires & Cables Products
  const wireProducts = [
    { badge: '01', title: 'HOUSE WIRING CABLES', img: '/assets/images/wires/wire_01_house_wiring.webp', features: ['PVC insulated', 'Single & multi-core', '0.5 Sq.mm to 6 Sq.mm', 'IS: 694 Compliant'], desc: 'Flame Retardant (FR/FRLS) 100% pure electrolytic copper single core and multi core cables engineered for residential, commercial and architectural wiring.' },
    { badge: '02', title: 'FLEXIBLE CABLES', img: '/assets/images/wires/wire_02_flexible.webp', features: ['High flexibility', 'Tinned / Annealed copper', '0.5 Sq.mm to 50 Sq.mm', 'IS: 694 Compliant'], desc: 'Multi-strand annealed and tinned electrolytic copper flexible conductors with high thermal insulation for switchgear panels, appliances, and industrial conduit wiring.' },
    { badge: '03', title: 'MULTI CORE CABLES', img: '/assets/images/wires/wire_03_multicore.webp', features: ['2 Core to 61 Core', 'Control & power applications', 'PVC / FR / FRLS options', 'IS: 1554 (Part 1)'], desc: 'Heavy-duty industrial round PVC sheathed multi-core power and control cables engineered with color-coded cores and high current endurance.' },
    { badge: '04', title: 'ARMOURED CABLES', img: '/assets/images/wires/wire_04_armoured.webp', features: ['Robust & mechanical protection', 'Power & control applications', 'PVC / XLPE insulation', 'IS: 7098 (Part 1)'], desc: 'Galvanized steel wire and strip armoured cables providing extreme mechanical protection against crushing and underground harsh environment for power utilities.' },
    { badge: '05', title: 'SIGNAL & CONTROL CABLES', img: '/assets/images/wires/wire_05_signal_control.webp', features: ['Shielded / Unshielded', 'Excellent signal transmission', 'Industrial & automation use', 'IS: 1554 (Part 1)'], desc: 'Aluminium mylar tape and tinned copper braid shielded multi-pair instrumentation cables preventing electromagnetic interference (EMI) in industrial automation.' },
    { badge: '06', title: 'FLAT CABLES', img: '/assets/images/wires/wire_06_flat.webp', features: ['Space saving design', 'Easy installation', '2 Core to 24 Core', 'IS: 694 Compliant'], desc: 'Parallel flat flexible multicore cables engineered for space-constrained industrial cable drag chains, elevators, and automated machinery routing.' },
    { badge: '07', title: 'SUBMERSIBLE CABLES', img: '/assets/images/wires/wire_07_submersible.webp', features: ['Suitable for submersible pumps', 'Water & moisture resistant', 'PVC / FR options', 'IS: 694 Compliant'], desc: '3-Core flat waterproof PVC jacketed cables engineered specifically for deep-well submersible pumps with high hydrostatic pressure resistance.' },
    { badge: '08', title: 'SOLAR CABLES', img: '/assets/images/wires/wire_08_solar.webp', features: ['UV & weather resistant', 'Tinned copper conductor', 'DC applications', 'IS: 694 Compliant'], desc: 'Cross-linked polyolefin (XLPO) insulated and sheathed solar DC cables with 25+ years UV, ozone and weather resistance for solar photovoltaic installations.' },
    { badge: '09', title: 'COAXIAL CABLES', img: '/assets/images/wires/wire_09_coaxial.webp', features: ['Low signal loss', 'High frequency performance', 'CCTV, Antenna & Communication', 'IS Compliant'], desc: 'High-bandwidth RG6 and RG11 coaxial communication cables featuring foam dielectric, bonded aluminium foil and dense copper shielding for minimal signal attenuation.' },
    { badge: '10', title: 'SPECIAL CABLES', img: '/assets/images/wires/wire_10_special.webp', features: ['Customized solutions', 'Special insulation & sheathing', 'Industrial applications', 'As per customer requirement'], desc: 'Bespoke high-temperature silicone, zero-halogen flame-retardant (ZHFR), and customized composite cables tailored to strict industrial engineering specifications.' }
  ];

  // 8 Applications Across Industries Cards
  const applications = [
    { title: 'Industries & Factories', icon: <Building2 size={24} />, desc: 'Heavy power distribution cables, industrial wiring looms, and high-amp power cords for automated manufacturing plants.', img: '/assets/images/about/hadrons_factory_building.webp' },
    { title: 'Data Centers & IT Parks', icon: <Server size={24} />, desc: 'IEC locking PDU server power cords and structured communication cables delivering 99.999% uptime reliability.', img: '/assets/images/product_page/prod_09_datacenter.webp' },
    { title: 'Modern Homes', icon: <Home size={24} />, desc: 'FR/FRLS house wiring cables, modular architectural switches, surge-protected extension boards for residential safety.', img: '/assets/images/product_page/prod_03_extension.webp' },
    { title: 'Corporate Offices', icon: <Briefcase size={24} />, desc: 'Under-desk cable drag chains, laptop power adapters, and modular switch socket units for commercial workspaces.', img: '/assets/images/product_page/prod_05_laptop.webp' },
    { title: 'Hospitals & Healthcare', icon: <Hospital size={24} />, desc: 'High-safety medical equipment power cords, zero-halogen cables, and isolated power grounding systems.', img: '/assets/images/product_page/prod_08_power_cord.webp' },
    { title: 'Educational Institutions', icon: <GraduationCap size={24} />, desc: 'Robust campus power cables, smart classroom extension boards, and HVAC ventilation grill assemblies.', img: '/assets/images/product_page/prod_06_ac_fans.webp' },
    { title: 'Retail & Malls', icon: <ShoppingBag size={24} />, desc: 'Commercial lighting wiring, heavy AC outdoor unit grates, and high-thrust air circulation blower units.', img: '/assets/images/product_page/prod_07_coolers.webp' },
    { title: 'EV Infrastructure', icon: <BatteryCharging size={24} />, desc: 'Smart AC wallbox chargers for 2-wheeler electric fleets and heavy-duty battery connection cables.', img: '/assets/images/product_page/prod_10_ev_charger.webp' }
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
                <img src="/assets/images/power_cords/power_cords_hero_main.webp" alt="Hadrons Power Cords" className="powercord-hero-img" onError={(e) => { e.target.src = '/power_cords.jpg'; }} />
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
                <img src="/assets/images/datacenter/datacenter_hero_main.webp" alt="Hadrons Data Center Power Cords" className="datacenter-hero-img" onError={(e) => { e.target.src = '/power_cords.jpg'; }} />
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

      {/* Official PDF Catalogs Download Section */}
      <section className="catalog-download-section" style={{ background: 'linear-gradient(135deg, #051937, #004d7a)', color: '#FFF', padding: '24px 0', margin: '0 0 10px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#FFF', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileDown size={22} style={{ color: '#00D2FF' }} /> OFFICIAL PRODUCT CATALOGUES &amp; BROCHURES
            </h3>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', color: '#B0C4DE' }}>
              Download official PDF catalogues for technical specifications, wire gauges, and OEM dimensions.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="/catalogs/hadrons_wires_cables_catalogue.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ background: '#FFF', color: '#0A1E4A', fontWeight: 600, fontSize: '0.85rem', padding: '10px 16px' }}>
              <FileDown size={16} /> Wires &amp; Cables PDF
            </a>
            <a href="/catalogs/hadrons_ac_grills_fans_catalogue.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ background: '#FFF', color: '#0A1E4A', fontWeight: 600, fontSize: '0.85rem', padding: '10px 16px' }}>
              <FileDown size={16} /> AC &amp; Fan Grills PDF
            </a>
            <a href="/catalogs/hadrons_wiring_harness_catalogue.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ background: '#FFF', color: '#0A1E4A', fontWeight: 600, fontSize: '0.85rem', padding: '10px 16px' }}>
              <FileDown size={16} /> Wiring Harness PDF
            </a>
          </div>
        </div>
      </section>

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
                      <div key={p.id} className="catalog-item-card">
                        <div className="card-top-header">
                          <span className="card-num-badge">{p.badgeNum}</span>
                          <h4 className="card-header-title">
                            {p.title} {p.isNew && <span className="badge-new-pill">NEW</span>}
                          </h4>
                        </div>
                        <div 
                          className="card-product-img-wrap" 
                          onClick={() => setLightboxImage({ src: p.img, title: p.title })}
                          title="Click to zoom in image"
                        >
                          <img src={p.img} alt={p.title} onError={(e) => { e.target.src = p.fallbackImg; }} />
                        </div>
                        <ul className="card-features-list">
                          {p.features.map((f, idx) => (
                            <li key={idx}>{f}</li>
                          ))}
                        </ul>
                        <button 
                          className="card-details-btn" 
                          onClick={() => {
                            if (p.id === 'wires' || p.id === 'harness') {
                              handleCategoryChange(p.id);
                            } else {
                              setSelectedProduct(p.detailModal);
                            }
                          }}
                        >
                          <span>{p.btnText}</span> <ArrowRight size={16} />
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
                      <div key={p.badge} className="catalog-item-card">
                        <div className="card-top-header">
                          <span className="card-num-badge">{p.badge}</span>
                          <h4 className="card-header-title">{p.title}</h4>
                        </div>
                        <div 
                          className="card-product-img-wrap" 
                          onClick={() => setLightboxImage({ src: p.img, title: p.title })}
                          title="Click to zoom in image"
                        >
                          <img src={p.img} alt={p.title} onError={(e) => { e.target.src = '/assets/images/wires_cables.webp'; }} />
                        </div>
                        <ul className="card-features-list">
                          {p.features.map((f, idx) => (
                            <li key={idx}>{f}</li>
                          ))}
                        </ul>
                        <button className="card-details-btn" onClick={() => setSelectedProduct({ title: p.title, desc: p.desc })}>
                          <span>VIEW DETAILS</span> <ArrowRight size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* View 3: Dedicated Category Fallback Cards */}
              {activeCategory !== 'all' && activeCategory !== 'wires' && (
                <div id="viewCategorySelected">
                  <div className="catalog-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 320px))', gap: '24px' }}>
                    {flagshipProducts.filter(p => p.catId === activeCategory || activeCategory.includes(p.catId)).map((p) => (
                      <div key={p.id} className="catalog-item-card" style={{ maxWidth: '320px' }}>
                        <div className="card-top-header">
                          <span className="card-num-badge">{p.badgeNum}</span>
                          <h4 className="card-header-title">{p.title}</h4>
                        </div>
                        <div 
                          className="card-product-img-wrap" 
                          onClick={() => setLightboxImage({ src: p.img, title: p.title })}
                          title="Click to zoom in image"
                        >
                          <img src={p.img} alt={p.title} onError={(e) => { e.target.src = p.fallbackImg; }} />
                        </div>
                        <ul className="card-features-list">
                          {p.features.map((f, idx) => (
                            <li key={idx}>{f}</li>
                          ))}
                        </ul>
                        <button className="card-details-btn" onClick={() => setSelectedProduct(p.detailModal)}>
                          <span>VIEW SPECIFICATIONS &amp; INQUIRE</span> <ArrowRight size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </main>

          </div>
        </div>
      </section>

      {/* Applications Across Industries Section */}
      <section className="applications-section" id="applicationsSection" style={{ padding: '70px 0', background: 'var(--bg-blue-soft)' }}>
        <div className="container">
          <div className="section-header-center">
            <div className="section-tag"><Building2 size={16} /> Applications</div>
            <h2 className="section-heading">WHERE OUR PRODUCTS <span>ARE USED</span></h2>
            <p className="section-sub">Our high quality electrical products power homes, industries, data centers and commercial spaces across India.</p>
          </div>

          <div className="applications-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {applications.map((app, idx) => (
              <div key={idx} className="app-card" style={{ background: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-blue)', boxShadow: '0 4px 16px rgba(10,30,74,0.06)' }}>
                <div 
                  className="app-card-img-wrap" 
                  style={{ height: '180px', overflow: 'hidden', cursor: 'zoom-in' }}
                  onClick={() => setLightboxImage({ src: app.img, title: app.title })}
                >
                  <img src={app.img} alt={app.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.src = '/assets/images/about/hadrons_factory_building.webp'; }} />
                </div>
                <div className="app-card-body" style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--hadrons-blue-primary)', marginBottom: '8px' }}>
                    {app.icon}
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--text-dark)' }}>{app.title}</h3>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>{app.desc}</p>
                </div>
              </div>
            ))}
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
