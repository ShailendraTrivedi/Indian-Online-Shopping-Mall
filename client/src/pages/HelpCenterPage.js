export default function HelpCenterPage() {
  const privacyPolicy = [
    {
      heading: "Account Management",
      list: [
        {
          listHeading: "",
          listParagraph:
            "Learn how to create an account, update your profile information, and manage your preferences.",
        },
        {
          listHeading: "",
          listParagraph:
            "Find answers to questions regarding account security, password management, and account deletion.",
        },
      ],
    },
    {
      heading: "Shopping Assistance",
      list: [
        {
          listHeading: "",
          listParagraph:
            "Explore guides on how to browse products, search for specific items, and navigate through different categories.",
        },
        {
          listHeading: "",
          listParagraph:
            "Get tips on adding items to your cart, viewing product details, and making purchases securely.",
        },
      ],
    },
    {
      heading: "Order Management",
      list: [
        {
          listHeading: "",
          listParagraph:
            "Understand the order process from start to finish, including placing orders, tracking shipments, and managing returns or exchanges.",
        },
        {
          listHeading: "",
          listParagraph:
            "Find information on order status, delivery times, and cancellation policies.",
        },
        {
          listHeading: "Business Transfers",
          listParagraph:
            "In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity as part of the transaction.",
        },
      ],
    },
    {
      heading: "Payment and Billing",
      list: [
        {
          listHeading: "",
          listParagraph:
            "Learn about our accepted payment methods, payment security measures, and billing inquiries.",
        },
        {
          listHeading: "",
          listParagraph:
            "Get assistance with payment processing, failed transactions, and refunds.",
        },
      ],
    },
    {
      heading: "Seller Support",
      list: [
        {
          listHeading: "",
          listParagraph:
            "Resources for sellers on how to create seller accounts, list products, manage inventory, and track sales performance.",
        },
        {
          listHeading: "",
          listParagraph:
            "Guidance on resolving seller-related issues, communicating with buyers, and optimizing product listings.",
        },
        {
          listHeading: "Cookies",
          listParagraph:
            "Most web browsers allow you to control cookies settings and opt out of certain tracking technologies.",
        },
      ],
    },
    {
      heading: "Customer Support",
      list: [
        {
          listHeading: "",
          listParagraph:
            "Access our customer support channels, including live chat, email support, and phone assistance.",
        },
        {
          listHeading: "",
          listParagraph:
            "Learn about our response times, service hours, and escalation procedures for urgent inquiries.",
        },
      ],
    },
    {
      heading: "Privacy and Security",
      list: [
        {
          listHeading: "",
          listParagraph:
            "Understand our privacy policy, data protection practices, and measures to safeguard your personal information.",
        },
        {
          listHeading: "",
          listParagraph:
            "Find guidance on account security, safe browsing practices, and reporting suspicious activity.",
        },
      ],
    },
    {
      heading: "Feedback and Suggestions:",
      list: [
        {
          listHeading: "",
          listParagraph:
            "Share your feedback, suggestions, and feature requests to help us improve IOSM and enhance your shopping experience.",
        },
        {
          listHeading: "",
          listParagraph:
            "Learn how to submit feedback through our website, social media channels, or customer support.",
        },
      ],
    },
    {
      heading: "Terms of Service",
      list: [
        {
          listHeading: "",
          listParagraph:
            "Access our terms of service for detailed information on your rights and responsibilities as a user of IOSM.",
        },
        {
          listHeading: "",
          listParagraph:
            "Find clarification on terms related to product listings, transactions, and platform usage.",
        },
      ],
    },
    {
      heading: "Community Resources",
      list: [
        {
          listHeading: "",
          listParagraph:
            "Connect with other IOSM users through community forums, discussion boards, and social media groups.",
        },
        {
          listHeading: "",
          listParagraph:
            "Share tips, advice, and experiences with fellow shoppers and sellers.",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="w-full h-[300px] bg-black10"></div>
      <div className="mx-[10rem] flex flex-col justify-center items-center">
        <h4 className="text-h4 font-semibold">Help Center</h4>
        <p className="">
          Welcome to the Help Center for Indian Online Shopping Mall (IOSM).
          Here, we provide comprehensive assistance to address any queries,
          concerns, or issues you may encounter while using our e-commerce
          platform. Our goal is to ensure a seamless and enjoyable shopping
          experience for all users. Below are some common topics and resources
          to guide you through various aspects of IOSM:
        </p>
        <ul className="list-decimal w-full p-10">
          {privacyPolicy.map((item, i) => (
            <li>
              <h5 className="text-h5">{item.heading}</h5>
              <ul className="list-disc p-5">
                {item.list.map((list) => (
                  <li>
                    <label htmlFor="" className="font-semibold">
                      {list.listHeading}
                    </label>
                    <p className="">{list.listParagraph}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
