import farmNursery1 from "@/assets/farm-nursery-1.jpg";
import farmWorker from "@/assets/farm-worker.jpg";
import farmCommunity from "@/assets/farm-community.jpg";
import farmMacadamiaTree from "@/assets/farm-macadamia-tree.jpg";
import farmMacadamiaFarmer from "@/assets/farm-macadamia-farmer.jpg";
import farmNursery2 from "@/assets/farm-nursery-2.jpg";

const photos = [
  { src: farmNursery1, alt: "Coffee seedlings growing in our nursery beds in Liberia", caption: "Nursery Seedlings" },
  { src: farmWorker, alt: "Farm worker tending to seedlings in the forest nursery", caption: "Nursery Care" },
  { src: farmCommunity, alt: "Community members working together in the seedling nursery", caption: "Community Effort" },
  { src: farmNursery2, alt: "Rows of young coffee and cashew seedlings in polybags", caption: "Ready for Planting" },
  { src: farmMacadamiaTree, alt: "A mature macadamia tree at our partner farm", caption: "Macadamia Tree" },
  { src: farmMacadamiaFarmer, alt: "Farmer standing beside a young macadamia tree", caption: "Our Farmers" },
];

const FarmGallery = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="badge-origin mb-4">From the Field</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-4 mb-4">
            Life on Our Farms
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the nurseries, landscapes, and communities behind every OriginKind product.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <div
              key={photo.caption}
              className={`relative group overflow-hidden rounded-2xl opacity-0 animate-fade-in ${
                i === 0 ? "md:row-span-2" : ""
              }`}
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  i === 0 ? "h-full min-h-[300px] md:min-h-full" : "h-48 md:h-64"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-3 left-3 text-sm font-medium text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {photo.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FarmGallery;
