import PriceOption from "./PriceOption";

const PricingOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Towel service",
        "Fitness assessment",
        "24/7 access",
        "Free Wi-Fi",
      ],
      price: "$30",
    },
    {
      id: 2,
      name: "Premium Membership",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Towel service",
        "Fitness assessment",
        "Unlimited group classes",
        "Personal trainer sessions",
        "Nutritional counseling",
        "24/7 access",
        "Free Wi-Fi",
      ],
      price: "$50",
    },
    {
      id: 3,
      name: "Platinum Membership",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Towel service",
        "Fitness assessment",
        "Unlimited group classes",
        "24/7 access",
        "Free Wi-Fi",
      ],
      price: "$80",
    },
  ];

  return (
    <div className="p-5">
      <h1 className="text-2xl md:text-4xl font-bold text-center py-10">
        Flexible Price for You!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
