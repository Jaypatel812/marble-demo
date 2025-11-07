import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  Star,
  X,
} from "lucide-react";

const MarbleWebsite = () => {
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeSection, setActiveSection] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const marbleProducts = [
    {
      name: "Calacatta Gold",
      type: "white",
      finish: "polished",
      description: "Luxurious white marble with gold veining",
    },
    {
      name: "Statuario Venato",
      type: "white",
      finish: "polished",
      description: "Classic white with gray veins",
    },
    {
      name: "Nero Marquina",
      type: "black",
      finish: "polished",
      description: "Deep black with white veins",
    },
    {
      name: "Emperador Dark",
      type: "brown",
      finish: "polished",
      description: "Rich brown with light veins",
    },
    {
      name: "Carrara White",
      type: "white",
      finish: "honed",
      description: "Timeless Italian white marble",
    },
    {
      name: "Verde Guatemala",
      type: "green",
      finish: "polished",
      description: "Exotic green marble",
    },
    {
      name: "Crema Marfil",
      type: "beige",
      finish: "polished",
      description: "Warm beige tones",
    },
    {
      name: "Portoro Gold",
      type: "black",
      finish: "polished",
      description: "Black with golden veins",
    },
    {
      name: "Rosa Portuges",
      type: "pink",
      finish: "polished",
      description: "Elegant pink marble",
    },
    {
      name: "Bianco Sivec",
      type: "white",
      finish: "polished",
      description: "Pure white crystalline",
    },
    {
      name: "Blue Sodalite",
      type: "blue",
      finish: "polished",
      description: "Rare deep blue marble",
    },
    {
      name: "Breccia Oniciata",
      type: "multi",
      finish: "polished",
      description: "Multi-colored breccia",
    },
    {
      name: "Calacatta Borghini",
      type: "white",
      finish: "polished",
      description: "Premium white with dramatic veins",
    },
    {
      name: "Thassos White",
      type: "white",
      finish: "polished",
      description: "Purest white Greek marble",
    },
    {
      name: "Rosso Levanto",
      type: "red",
      finish: "polished",
      description: "Rich red with white veins",
    },
    {
      name: "Arabescato",
      type: "white",
      finish: "polished",
      description: "White with arabesque patterns",
    },
    {
      name: "Travertino Romano",
      type: "beige",
      finish: "honed",
      description: "Classic Roman travertine",
    },
    {
      name: "Onyx Fantastico",
      type: "multi",
      finish: "polished",
      description: "Translucent onyx beauty",
    },
    {
      name: "Pietra Grey",
      type: "gray",
      finish: "honed",
      description: "Sophisticated gray limestone",
    },
    {
      name: "Calacatta Vagli",
      type: "white",
      finish: "polished",
      description: "Rare white with bold veining",
    },
    {
      name: "Black Galaxy",
      type: "black",
      finish: "polished",
      description: "Black granite with gold flecks",
    },
    {
      name: "Golden Spider",
      type: "beige",
      finish: "polished",
      description: "Beige with spider-web veins",
    },
    {
      name: "Azul Macaubas",
      type: "blue",
      finish: "polished",
      description: "Stunning blue quartzite",
    },
    {
      name: "White Princess",
      type: "white",
      finish: "polished",
      description: "Delicate white with gray",
    },
    {
      name: "Emperador Light",
      type: "brown",
      finish: "polished",
      description: "Light brown elegance",
    },
    {
      name: "Verde Alpi",
      type: "green",
      finish: "polished",
      description: "Alpine green serpentine",
    },
    {
      name: "Calacatta Monet",
      type: "white",
      finish: "polished",
      description: "Artistic white marble",
    },
    {
      name: "Fusion Wow",
      type: "multi",
      finish: "polished",
      description: "Dramatic multi-color quartzite",
    },
    {
      name: "Bianco Lasa",
      type: "white",
      finish: "polished",
      description: "Premium Italian white",
    },
    {
      name: "Portofino Limestone",
      type: "beige",
      finish: "honed",
      description: "Coastal beige limestone",
    },
  ];

  const filteredProducts =
    activeFilter === "all"
      ? marbleProducts
      : marbleProducts.filter((p) => p.type === activeFilter);

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll("section");
    sections[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-6xl font-light tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-white"
            >
              LUXE MARBLE
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dot Navigation */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        {["Hero", "Products", "About", "Gallery", "Contact"].map((label, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(i)}
            className="group relative"
          >
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === i
                  ? "border-amber-400 bg-amber-400"
                  : "border-white/30 hover:border-white"
              }`}
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm text-white/70">
              {label}
            </span>
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M10 10 L90 10 L50 90 Z" fill="%23ffffff" opacity="0.03"/%3E%3C/svg%3E")',
              backgroundSize: "200px 200px",
            }}
          />
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl md:text-8xl font-light mb-6 tracking-wider"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-white">
              LUXE MARBLE
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-3xl font-light text-gray-300 mb-12 tracking-wide"
          >
            Experience the Art of Natural Elegance
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection(1)}
            className="group relative px-12 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-medium rounded-full overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore Collection
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200">
              Our Collection
            </h2>
            <p className="text-gray-400 text-lg">
              Discover timeless beauty in every stone
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {[
              "all",
              "white",
              "black",
              "beige",
              "brown",
              "green",
              "blue",
              "multi",
            ].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-amber-500 text-white"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, i) => (
              <ProductCard
                key={i}
                product={product}
                index={i}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-2xl p-8 max-w-2xl w-full relative"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X />
              </button>

              <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-6xl text-amber-500/20">◆</div>
              </div>

              <h3 className="text-3xl font-light mb-2 text-amber-200">
                {selectedProduct.name}
              </h3>
              <p className="text-gray-400 mb-4">
                {selectedProduct.description}
              </p>

              <div className="flex gap-4 text-sm">
                <span className="px-4 py-2 bg-amber-500/20 rounded-full">
                  Type: {selectedProduct.type}
                </span>
                <span className="px-4 py-2 bg-amber-500/20 rounded-full">
                  Finish: {selectedProduct.finish}
                </span>
              </div>

              <button className="w-full mt-6 py-3 bg-amber-500 hover:bg-amber-600 rounded-full font-medium transition-colors">
                Request Quote
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* About Section */}
      <section className="relative py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-gray-900" />
                <div className="absolute inset-0 flex items-center justify-center text-9xl text-white/5">
                  ◆
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-light mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200">
                Crafting Excellence
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                For over two decades, we've been at the forefront of luxury
                natural stone curation. Each piece in our collection is
                carefully selected from quarries around the world, ensuring
                unparalleled quality and timeless beauty.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <Counter end={25} label="Years Experience" />
                <Counter end={100} label="Stone Types" suffix="+" />
                <Counter end={5000} label="Projects" suffix="+" />
              </div>

              <button className="px-8 py-3 bg-white/5 hover:bg-amber-500/20 border border-amber-500/30 rounded-full transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-light mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200">
              Inspiration Gallery
            </h2>
            <p className="text-gray-400 text-lg">See our stones come to life</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <GalleryItem key={i} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-light mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-lg">
              Let's bring your vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <ContactInfo
                icon={<Phone />}
                title="Phone"
                info="+1 (555) 123-4567"
              />
              <ContactInfo
                icon={<Mail />}
                title="Email"
                info="info@luxemarble.com"
              />
              <ContactInfo
                icon={<MapPin />}
                title="Location"
                info="123 Luxury Lane, Design District"
              />

              <div className="pt-8 border-t border-white/10">
                <p className="text-gray-400 mb-4">Follow Us</p>
                <div className="flex gap-4">
                  {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-full bg-white/5 hover:bg-amber-500/20 border border-amber-500/30 flex items-center justify-center transition-all"
                    >
                      <Icon className="text-amber-400" size={20} />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p className="mb-2">© 2025 Luxe Marble. Crafted with excellence.</p>
          <p className="text-sm">All natural stones are ethically sourced.</p>
        </div>
      </footer>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, index, onClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="group relative cursor-pointer rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-white/5 hover:border-amber-500/30 transition-all duration-300"
    >
      <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
        />
        <div className="text-7xl text-amber-500/20 group-hover:text-amber-500/30 transition-colors">
          ◆
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-light mb-1 group-hover:text-amber-400 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="flex gap-2 mt-3">
          <span className="text-xs px-2 py-1 bg-amber-500/10 text-amber-400 rounded">
            {product.finish}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// Counter Component
const Counter = ({ end, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-light text-amber-400 mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
};

// Gallery Item Component
const GalleryItem = ({ index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center text-8xl text-white/10 group-hover:text-white/20 transition-colors">
        ◆
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white font-light">Interior Design {index}</p>
      </div>
    </motion.div>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-amber-500/50 focus:outline-none transition-colors text-white placeholder-gray-500"
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-amber-500/50 focus:outline-none transition-colors text-white placeholder-gray-500"
          required
        />
      </div>
      <div>
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-amber-500/50 focus:outline-none transition-colors text-white placeholder-gray-500"
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          rows={5}
          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-amber-500/50 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
          required
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-medium rounded-lg hover:from-amber-500 hover:to-amber-400 transition-all duration-300"
      >
        Send Message
      </motion.button>
    </form>
  );
};

// Contact Info Component
const ContactInfo = ({ icon, title, info }) => {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-lg"
    >
      <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-xl">
        {icon}
      </div>
      <div>
        <p className="text-gray-400 text-sm mb-1">{title}</p>
        <p className="text-white font-light">{info}</p>
      </div>
    </motion.div>
  );
};

export default MarbleWebsite;
