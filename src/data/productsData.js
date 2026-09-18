export const PRODUCT_CATEGORIES = [
  { id: 'all',             label: 'All Products' },
  { id: 'wires',           label: 'Wires & Cables' },
  { id: 'harness',         label: 'Wiring Harness & Battery Cable' },
  { id: 'extension',       label: 'Extension Boards' },
  { id: 'switches',        label: 'Modular Switches' },
  { id: 'chargers',        label: 'Laptop Chargers' },
  { id: 'fans',            label: 'AC Grills & Fans' },
  { id: 'coolers',         label: 'Coolers (Body & Fans)' },
  { id: 'powercord',       label: 'Power Cord (6A & 16A)' },
  { id: 'datacenter',      label: 'Data Center Power Cords' },
  { id: 'mobile_chargers', label: 'Mobile Chargers (USB & Type-C PD)' },
  { id: 'battery_modules', label: 'Solar & Inverter Battery Outer Modules' },
  { id: 'ev',              label: '2 Wheeler EV Chargers' },
  { id: 'moulded',         label: 'Large Injection Moulded Components' }
];

export const PRODUCTS_DATA = [
  {
    id: 'wires',
    catId: 'wires',
    badgeNum: '01',
    title: 'WIRES & CABLES',
    categoryLabel: 'Electrical Wiring',
    tagline: 'High Conductivity ETP Copper • Flame Retardant Low Smoke PVC',
    img: '/assets/images/products/wires_cables_sheet.webp',
    features: [
      '99.99% Pure Electrolytic ETP Grade Annealed Copper Conductors',
      'Flame Retardant (FR) & Flame Retardant Low Smoke (FRLS) Insulation',
      '100% Spark Tested at 10kV for Zero-Defect Safety',
      'Available in Single Core, Multi Core, Armoured & Solar Cables'
    ],
    desc: 'Hadrons Wires & Cables are engineered with 99.99% pure electrolytic copper to deliver high current conductivity, minimal power loss, and extreme safety. Insulated with self-extinguishing FRLS PVC compounds, our wires resist high thermal overloads and release non-toxic low smoke during electrical fire emergencies.',
    specs: [
      { label: 'Conductor Material', val: '99.99% Electrolytic Grade ETP Copper' },
      { label: 'Insulation Type', val: 'High-Thermal Flame Retardant (FR / FRLS) PVC' },
      { label: 'Voltage Grade', val: 'up to 1100V (1.1 kV AC)' },
      { label: 'Gauge Range', val: '0.5 sq.mm to 50 sq.mm (Single & Multi-Core)' },
      { label: 'Temperature Rating', val: '-15°C to +70°C / +105°C' },
      { label: 'Compliance Standard', val: 'IS: 694, IS: 1554 (Part 1), BIS Certified' }
    ],
    certifications: ['IS: 694 Compliant', 'BIS Certified', 'RoHS Compliant', '10kV Spark Tested'],
    applications: ['Residential Building Wiring', 'Industrial Switchgear Panels', 'Commercial Towers', 'Submersible Well Pumps', 'Solar PV Power Plants'],
    catalogPdf: '/catalogs/hadrons_wires_cables_catalogue.pdf'
  },
  {
    id: 'harness',
    catId: 'harness',
    badgeNum: '02',
    title: 'WIRING HARNESS & BATTERY CABLE',
    categoryLabel: 'Automotive & Industrial Wiring',
    tagline: 'Bespoke Automotive Wire Looms • Heavy Duty Battery Connection Cables',
    img: '/assets/images/products/harness_battery_cables_hero.webp',
    features: [
      'Custom Engineered Wiring Harnesses tailored to OEM Blueprints',
      'Heavy Duty High-Amp Battery Power Connection Cables',
      'Flame Retardant Braided Sleeving & Sealed Water-Tight Connectors',
      'Engineered for Automotive, Earthmovers, & Heavy Industrial Machinery'
    ],
    desc: 'Bespoke automotive wire looms and heavy-duty battery cables manufactured using precision automated crimping, sonic welding, and 100% circuit continuity testing. Engineered to withstand intense vehicle vibration, engine heat, oil exposure, and mechanical abrasion.',
    specs: [
      { label: 'Conductor Type', val: 'Multi-strand Flexible Tinned / Bare Copper' },
      { label: 'Wire Gauge', val: 'AWG 22 to 4/0 AWG (Heavy Battery Cable)' },
      { label: 'Sheathing & Sleeving', val: 'Corrugated Conduit, Braided PET Sleeving, Heat-Shrink Tubing' },
      { label: 'Connector Types', val: 'OEM Sealed Waterproof Connectors, Ring Terminals, Quick-Disconnects' },
      { label: 'Testing Standard', val: 'Automated 100% Harness Continuity & Insulation Resistance Testing' }
    ],
    certifications: ['ISO 9001:2015 Quality Standard', 'Flame Retardant UL94 V-0', 'RoHS Compliant'],
    applications: ['Electric Vehicles (2W/3W/4W)', 'Automotive Engine Looms', 'Heavy Earth Moving Machinery', 'Solar Battery Interconnects', 'Industrial Control Cabinets'],
    catalogPdf: '/catalogs/hadrons_wiring_harness_catalogue.pdf'
  },
  {
    id: 'extension',
    catId: 'extension',
    badgeNum: '03',
    title: 'EXTENSION BOARDS',
    categoryLabel: 'Power Distribution & Surge Protection',
    tagline: 'Surge Protected Multi-Socket Strips • Unbreakable Fire-Retardant Body',
    img: '/assets/images/products/extension_boards_hero.webp',
    features: [
      'Surge & Spike Protection with Built-in Master Circuit Breaker',
      'Child-Safety Shutters on All Universal Sockets',
      'Unbreakable Fire-Retardant Polycarbonate Body Housing',
      'Integrated Dual USB & Fast Charging Ports'
    ],
    desc: 'Hadrons Extension Boards deliver safe, reliable multi-socket power distribution for homes and corporate offices. Equipped with high-energy MOV surge suppression, resettable overload circuit breakers, and heavy-duty 3-pin moulded power cords.',
    specs: [
      { label: 'Socket Options', val: '3, 4, 5 & 6 Universal Sockets with Individual Switches' },
      { label: 'Rated Current / Voltage', val: '10A / 16A, 240V AC 50Hz' },
      { label: 'Maximum Power Load', val: 'up to 2500 Watts' },
      { label: 'Cord Length', val: '1.5 Meters / 3.0 Meters Heavy Duty Copper Cord' },
      { label: 'Body Material', val: 'Fire-Retardant Polycarbonate & ABS Blend' }
    ],
    certifications: ['ISI Certified Plug & Wire', 'Surge Protected', 'RoHS Compliant'],
    applications: ['Home Entertainment Systems', 'Corporate Computer Workstations', 'Laboratory Instruments', 'Commercial Office Desks'],
    catalogPdf: '/catalogs/hadrons_wires_cables_catalogue.pdf'
  },
  {
    id: 'switches',
    catId: 'switches',
    badgeNum: '04',
    title: 'MODULAR SWITCHES',
    categoryLabel: 'Architectural Electrical Fittings',
    tagline: 'Ergonomic White Glossy Finish • Pure Silver Contact Tips for 100,000+ Clicks',
    img: '/assets/images/products/modular_switches_sheet.webp',
    features: [
      'Sleek Architectural Design with Glossy Anti-Dust Finish',
      'Pure Silver Contact Cadmium-Free Alloy for Arc Quenching',
      'Unbreakable Polycarbonate Front Plates & Snap-in Modules',
      'Spark-Proof Enclosed Chamber for Maximum Electrical Safety'
    ],
    desc: 'Architectural switch panels and modular sockets crafted for modern residential and luxury commercial interiors. Engineered with high-conductive brass terminals, silver contact tips, and smooth ergonomic rocker switches tested for 100,000+ switching operations.',
    specs: [
      { label: 'Switch Ratings', val: '6A, 10A, 16A & 25A 240V AC' },
      { label: 'Contact Material', val: 'Pure Silver Inlay Alloy' },
      { label: 'Mechanical Life', val: 'Tested for > 100,000 Clicks' },
      { label: 'Plate Sizes', val: '1 Module up to 18 Module Plates' },
      { label: 'Color Variants', val: 'Glossy White, Platinum Silver, Matte Anthracite' }
    ],
    certifications: ['IS: 3854 Compliant', 'BIS Certified', 'RoHS Compliant'],
    applications: ['Luxury Residential Apartments', 'Five-Star Hotels', 'Commercial Office Interiors', 'Hospitals & Educational Buildings'],
    catalogPdf: '/catalogs/hadrons_wires_cables_catalogue.pdf'
  },
  {
    id: 'chargers',
    catId: 'chargers',
    badgeNum: '05',
    title: 'LAPTOP CHARGERS',
    categoryLabel: 'Power Adapters & Electronics',
    tagline: 'High Efficiency Switching Power Adapters • Multi-Stage Protection',
    img: '/assets/images/products/laptop_chargers_hero.webp',
    features: [
      'Universal & OEM Replacement Laptop Power Adapters',
      'Over-Voltage, Over-Current, Short-Circuit & Heat Protection',
      'High Frequency Transformer with 90%+ Energy Conversion Efficiency',
      'Heavy Duty Strain-Relief Power Cables & Braided Tips'
    ],
    desc: 'Hadrons Laptop Chargers deliver stable, regulated DC voltage to power laptops, notebooks, and industrial electronics. Built with high-grade SMPS circuitry, low-ripple output filters, and durable fire-retardant enclosures.',
    specs: [
      { label: 'Power Ratings', val: '45W, 65W, 90W & 120W Options' },
      { label: 'Input Voltage', val: '100V - 240V AC Universal 50/60Hz' },
      { label: 'Output Voltage / Current', val: '18.5V, 19V, 19.5V, 20V DC (2.25A to 6A)' },
      { label: 'Connector Tips', val: 'Universal Multi-Pin Tips & Type-C PD' },
      { label: 'Efficiency Rating', val: 'Level VI Energy Efficiency Certified' }
    ],
    certifications: ['CE Certified', 'BIS Approved', 'RoHS Compliant'],
    applications: ['Laptop & Notebook Powering', 'Point of Sale (POS) Terminals', 'Industrial Equipment Adapters', 'IT Hardware'],
    catalogPdf: '/catalogs/hadrons_wires_cables_catalogue.pdf'
  },
  {
    id: 'fans',
    catId: 'fans',
    badgeNum: '06',
    title: 'AC GRILLS & FANS',
    categoryLabel: 'HVAC & Air Conditioner Components',
    tagline: 'Precision Plastic Fan Grills • Aerodynamic Air Distribution Louvers',
    img: '/assets/images/products/ac_components_hero.webp',
    features: [
      'Aerodynamically Balanced Grills for Low Noise & High Airflow',
      'High-Impact UV Stabilized Engineering Plastics',
      'Custom Moulded Ventilation Louvers & Directional Diffusers',
      'Trusted by Leading OEM Air Conditioner Manufacturers'
    ],
    desc: 'High-precision plastic injection moulded AC front panels, fan grills, and air diffuser louvers engineered for split ACs, window units, and commercial HVAC systems. Designed for minimal air resistance and long-lasting mechanical durability.',
    specs: [
      { label: 'Material', val: 'UV Stabilized High Impact Polystyrene (HIPS) / ABS' },
      { label: 'Compatibility', val: 'Split AC Outdoor/Indoor Units, Window ACs, HVAC Duct Vents' },
      { label: 'Dimensions', val: 'Custom Tooling Sizes to OEM Blueprint' },
      { label: 'Heat & Weathering', val: 'Resistant to Outdoor UV Rays, Moisture, and Temperature Fluctuation' }
    ],
    certifications: ['ISO 9001:2015 Production Quality', 'RoHS Compliant Plastics'],
    applications: ['Split AC Outdoor Blower Fans', 'Window Air Conditioner Front Grills', 'Commercial HVAC Ventilation Ducts'],
    catalogPdf: '/catalogs/hadrons_ac_grills_fans_catalogue.pdf'
  },
  {
    id: 'coolers',
    catId: 'coolers',
    badgeNum: '07',
    title: 'COOLERS (BODY & FANS)',
    categoryLabel: 'Air Cooler Plastic Parts & Assemblies',
    tagline: 'UV-Stabilized Plastic Cooler Bodies • High Thrust Blower Fan Assemblies',
    img: '/assets/images/products/cooler_parts_hero.webp',
    features: [
      'Complete Air Cooler Plastic Body Shells & Front Panels',
      'High-Thrust Aerodynamic Plastic Fan Blades & Blower Impellers',
      'Submersible Water Pumps & Water Distribution Trays',
      'Heavy Duty Corrosion-Proof & Shockproof Plastic Assemblies'
    ],
    desc: 'UV-stabilized engineered plastic cooler bodies, submersible water pumps, and high-thrust fan blade assemblies built for severe summer conditions. Manufactured using high-tonnage CNC plastic injection moulding machines.',
    specs: [
      { label: 'Body Material', val: 'Corrosion-Free Shockproof Polymer' },
      { label: 'Fan Blade Types', val: '3-Blade & 5-Blade Aerodynamic Axial Fan Impellers' },
      { label: 'Cooler Capacities', val: 'Personal Coolers (20L) up to Desert Coolers (90L)' },
      { label: 'Custom Tooling', val: 'OEM Custom Tooling Available for Brand Manufacturing' }
    ],
    certifications: ['ISO 9001 Certified', 'RoHS Compliant'],
    applications: ['Domestic Personal Coolers', 'Heavy Duty Industrial Desert Coolers', 'Commercial Air Cooling Units'],
    catalogPdf: '/catalogs/hadrons_ac_grills_fans_catalogue.pdf'
  },
  {
    id: 'powercord',
    catId: 'powercord',
    badgeNum: '08',
    title: 'POWER CORD (6A & 16A)',
    categoryLabel: 'Appliance Power Connectivity',
    tagline: 'ISI-Certified 3-Pin Moulded Cords • Solid Nickel-Plated Brass Pins',
    img: '/assets/images/products/power_cords_hero.webp',
    features: [
      'ISI Certified 3-Pin Moulded Plugs with Earthing Connection',
      'Heavy Copper Conductors with Flexible PVC Insulation',
      'Available in 6A (Light Appliance) & 16A (Heavy Duty Power Cord) Ratings',
      'Robust Strain Relief Grommets to Prevent Wire Snap'
    ],
    desc: 'ISI-certified 3-pin moulded power cords available in custom lengths and gauge thicknesses (0.75 sq mm to 2.5 sq mm) with nickel-plated solid brass pins. Designed for reliable power connectivity across household and industrial appliances.',
    specs: [
      { label: 'Current Ratings', val: '6 Amp & 16 Amp 250V AC' },
      { label: 'Plug Type', val: 'IS 1293 Certified 3-Pin Moulded Plug with Brass Pins' },
      { label: 'Cable Gauge', val: '3 Core 0.75 sq.mm, 1.0 sq.mm, 1.5 sq.mm & 2.5 sq.mm' },
      { label: 'Length Options', val: '1.0m, 1.5m, 2.0m, 3.0m Custom Lengths' }
    ],
    certifications: ['IS: 1293 Plug Certified', 'IS: 694 Cable Standard', 'BIS Approved'],
    applications: ['Refrigerators & Air Conditioners', 'Microwave Ovens & Washing Machines', 'Computers & Power Tools', 'Industrial Equipment'],
    catalogPdf: '/catalogs/hadrons_wires_cables_catalogue.pdf'
  },
  {
    id: 'datacenter',
    catId: 'datacenter',
    badgeNum: '09',
    title: 'DATA CENTER POWER CORDS',
    categoryLabel: 'Mission-Critical Server Infrastructure',
    tagline: 'IEC 60320 C13/C14 & C19/C20 Locking Server Rack PDU Cables',
    img: '/assets/images/products/datacenter_cords_hero.webp',
    features: [
      'IEC 60320 Locking Connectors to Prevent Accidental Disconnection',
      'Heavy-Gauge High-Purity Copper Conductors for Continuous 24/7 Power',
      'High Temperature & Flame Retardant Low Smoke (LSZH) Cable Jacket',
      'Color-Coded Cables (Red, Blue, Black) for Server Phase Balancing'
    ],
    desc: 'High performance power cords specifically designed for data center server racks, PDU units, UPS systems, and IT infrastructure. Engineered for 99.999% uptime, extreme thermal resilience, and high current load stability.',
    specs: [
      { label: 'Connector Types', val: 'IEC C13/C14, C19/C20, C5/C6, Locking IEC Connectors' },
      { label: 'Current / Voltage', val: '10A / 16A / 20A, 250V AC' },
      { label: 'Wire Gauge', val: '14 AWG / 16 AWG / 18 AWG Heavy Duty SJT Cables' },
      { label: 'Temperature Rating', val: '105°C Flame Retardant Outer Jacket' }
    ],
    certifications: ['UL Listed', 'CE Certified', 'IEC 60320 Standard', 'RoHS Compliant'],
    applications: ['Server Rack Power Distribution Units (PDU)', 'Data Center Enterprise Servers', 'Uninterruptible Power Supply (UPS)', 'Networking Switches & Routers'],
    catalogPdf: '/catalogs/hadrons_wires_cables_catalogue.pdf'
  },
  {
    id: 'mobile_chargers',
    catId: 'mobile_chargers',
    badgeNum: '10',
    title: 'MOBILE CHARGERS (USB & TYPE-C PD)',
    categoryLabel: 'Smart Fast Charging Adapters',
    tagline: 'Type-C Power Delivery (PD) • Intelligent Overvoltage IC Protection',
    img: '/assets/images/products/mobile_chargers_hero.webp',
    features: [
      'Fast PD (Power Delivery) & Quick Charge (QC 3.0/4.0) Wall Chargers',
      'Multi-Layer IC Safety against Overvoltage, Short-Circuit & Overheating',
      'Compact Ergonomic Design with Fire-Retardant Polycarbonate Housing',
      'Universal Compatibility with Android, iOS, Tablets, & Powerbanks'
    ],
    desc: 'High-speed smart mobile wall adapters and Type-C Power Delivery (PD) fast chargers engineered with intelligent IC power management, low energy loss, and flame-retardant enclosures.',
    specs: [
      { label: 'Output Power', val: '20W, 33W, 45W & 65W GaN Fast Chargers' },
      { label: 'Ports', val: 'Single USB-C, Dual USB-A + USB-C PD Ports' },
      { label: 'Input Voltage', val: '100V - 240V AC Universal Global Input' },
      { label: 'Cable Companion', val: 'TPE / Braided Type-C to Type-C & Type-C to Lightning Cables' }
    ],
    certifications: ['BIS Approved', 'Level VI Energy Efficiency', 'RoHS Compliant'],
    applications: ['Smartphones & Tablets', 'Smartwatches & Earbuds', 'Portable Powerbanks', 'Type-C Powered Accessories'],
    catalogPdf: '/catalogs/hadrons_wires_cables_catalogue.pdf'
  },
  {
    id: 'battery_modules',
    catId: 'battery_modules',
    badgeNum: '11',
    title: 'SOLAR & INVERTER BATTERY OUTER MODULES',
    categoryLabel: 'Energy Storage Polymer Enclosures',
    tagline: 'Heavy-Duty Injection Moulded Covers • Shockproof & Thermal Resistant Body',
    img: '/assets/images/products/solar_battery_modules.webp',
    features: [
      'Precision Injection Moulded Battery Outer Covers & Carrying Handles',
      'High Impact Strength & Acid-Resistant Polypropylene (PP) Polymer',
      'UV Stabilized Weatherproof Design for Solar PV Battery Storage',
      'Custom Moulded Tooling Available for OEM Battery Manufacturers'
    ],
    desc: 'Precision-moulded polymer outer covers, handles, and battery casing modules engineered for solar PV battery storage, home inverters, and industrial energy storage systems.',
    specs: [
      { label: 'Material', val: 'Acid-Resistant High-Impact Polypropylene (PP) / Polycarbonate' },
      { label: 'Features', val: 'Integrally Moulded Carrying Handles, Terminal Caps, Acid Level Indicator Vents' },
      { label: 'Applications', val: 'Tubular Inverter Batteries, Solar Gel Batteries, EV Battery Packs' },
      { label: 'Tooling Customization', val: 'Bespoke Molds Engineered to Customer Drawings' }
    ],
    certifications: ['ISO 9001 Quality Production', 'Acid & Impact Tested', 'RoHS Compliant'],
    applications: ['Solar Photovoltaic Storage Batteries', 'Home Inverter Tubular Batteries', 'Industrial UPS Battery Banks', 'EV Battery Casing Modules'],
    catalogPdf: '/catalogs/hadrons_wiring_harness_catalogue.pdf'
  },
  {
    id: 'ev',
    catId: 'ev',
    badgeNum: '12',
    title: '2 WHEELER EV CHARGERS',
    categoryLabel: 'Electric Mobility Charging Stations',
    tagline: 'Smart AC Chargers for Electric 2-Wheelers • IP65 Weatherproof Housing',
    img: '/assets/images/products/ev_2w_charger_hero.webp',
    features: [
      'Smart Portable & Wallbox AC Chargers for Electric Two-Wheelers',
      'Automatic Cut-Off on Full Charge to Extend Battery Life',
      'Over-Temperature, Short-Circuit, & Reverse Polarity Protection',
      'IP65 Weatherproof Housing & Flame Retardant Charging Cable'
    ],
    desc: 'Smart AC wallbox chargers for electric two-wheelers with RFID security, flame-retardant gun holster, auto cut-off, and weatherproofing.',
    specs: [
      { label: 'Power Output', val: '750W, 1.2kW, 1.5kW & 3.3kW Fast AC Chargers' },
      { label: 'Input Plug', val: '6A / 16A 3-Pin Indian Standard Power Plug' },
      { label: 'Charging Gun Connector', val: 'Custom EV 2W Charging Connector Guns' },
      { label: 'Enclosure Rating', val: 'IP65 Weatherproof Water & Dust Resistant' }
    ],
    certifications: ['ARAI Tested / Compliant', 'BIS Certified', 'RoHS Approved'],
    applications: ['Electric Scooters & Motorcycles', 'E-Rickshaws & 3-Wheelers', 'Home EV Charging Stations', 'Commercial Fleet Charging Docks'],
    catalogPdf: '/catalogs/hadrons_wiring_harness_catalogue.pdf'
  },
  {
    id: 'moulded',
    catId: 'moulded',
    badgeNum: '13',
    title: 'LARGE INJECTION MOULDED COMPONENTS',
    categoryLabel: 'High-Tonnage CNC Plastic Tooling',
    tagline: 'High Dimensional Accuracy • Engineering Polymers to CAD Blueprints',
    img: '/assets/images/product_page/prod_11_moulded.webp',
    features: [
      'High-Tonnage CNC Plastic Injection Moulding up to 800 Tons',
      'Precision Moulding for Electrical Cabinets, Appliances & HVAC Bodies',
      'Engineering Plastics: ABS, Polycarbonate, Nylon, Polypropylene, HIPS',
      'Complete In-House Tool Design, Mould Development, & Component Assembly'
    ],
    desc: 'High-tonnage CNC plastic injection moulding, bespoke component tooling, and custom electrical enclosures engineered to customer CAD drawings.',
    specs: [
      { label: 'Tonnage Capacity', val: '100 Tons up to 800 Tons Injection Machines' },
      { label: 'Resins Processed', val: 'ABS, PC, PC+ABS, Nylon 6/66, PP, HIPS, POM' },
      { label: 'Services', val: 'CAD Mould Design, Rapid Prototyping, Production Tooling, Component Assembly' }
    ],
    certifications: ['ISO 9001:2015 Certified', 'RoHS Compliant'],
    applications: ['Air Conditioner & Cooler Bodies', 'Electrical Junction Enclosures', 'Automotive Interior Panels', 'Home Appliance Chassis'],
    catalogPdf: '/catalogs/hadrons_ac_grills_fans_catalogue.pdf'
  }
];
