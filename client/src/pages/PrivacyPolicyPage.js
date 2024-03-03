export default function PrivacyPolicyPage() {
  const privacyPolicy = [
    {
      heading: "Information We Collect",
      list: [
        {
          listHeading: "Personal Information: ",
          listParagraph:
            "When you register an account, make a purchase, or interact with our platform, we may collect personal information such as your name, email address, phone number, shipping address, and payment details.",
        },
        {
          listHeading: "Usage Data",
          listParagraph:
            "We may gather information about your interactions with our website, including pages visited, products viewed, and actions taken, to enhance your shopping experience and improve our services.",
        },
        {
          listHeading: "Cookies",
          listParagraph:
            "IOSM uses cookies and similar tracking technologies to personalize your experience, analyze trends, and gather demographic information. You can control the use of cookies through your browser settings.",
        },
      ],
    },
    {
      heading: "How We Use Your Information",
      list: [
        {
          listHeading: "Transaction Processing",
          listParagraph:
            "We use your personal information to process orders, facilitate payments, and fulfill your purchases.",
        },
        {
          listHeading: "Communication",
          listParagraph:
            " IOSM may send you transactional emails, order confirmations, updates, and promotional offers based on your preferences. You can opt out of promotional communications at any time.",
        },
        {
          listHeading: "Improvement of Services",
          listParagraph:
            "Your information helps us understand user preferences, tailor content, enhance product offerings, and optimize our website's functionality.",
        },
      ],
    },
    {
      heading: "Information Sharing and Disclosure",
      list: [
        {
          listHeading: "Third-Party Service Providers",
          listParagraph:
            "We may share your information with trusted third-party service providers to perform functions on our behalf, such as payment processing, order fulfillment, and marketing services. These providers are bound by confidentiality agreements and are prohibited from using your information for any other purpose.",
        },
        {
          listHeading: "Legal Compliance",
          listParagraph:
            " IOSM may disclose your information when required by law or in response to valid legal requests, such as subpoenas or court orders.",
        },
        {
          listHeading: "Business Transfers",
          listParagraph:
            "In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity as part of the transaction.",
        },
      ],
    },
    {
      heading: "Data Security",
      list: [
        {
          listHeading: "",
          listParagraph:
            "IOSM employs industry-standard security measures to protect your information from unauthorized access, misuse, or alteration.",
        },
        {
          listHeading: "",
          listParagraph:
            "We use secure socket layer (SSL) technology to encrypt sensitive data during transmission.",
        },
        {
          listHeading: "",
          listParagraph:
            "Despite our efforts to safeguard your information, please note that no method of transmission over the internet or electronic storage is entirely secure.",
        },
      ],
    },
    {
      heading: "Your Choices and Rights",
      list: [
        {
          listHeading: "Access and Updates",
          listParagraph:
            "You can access and update your account information by logging into your IOSM account.",
        },
        {
          listHeading: "Data Deletion",
          listParagraph:
            "You may request the deletion of your account and associated information, subject to legal and contractual obligations.",
        },
        {
          listHeading: "Cookies",
          listParagraph:
            "Most web browsers allow you to control cookies settings and opt out of certain tracking technologies.",
        },
      ],
    },
    {
      heading: "Children's Privacy",
      list: [
        {
          listHeading: "",
          listParagraph:
            "IOSM is not intended for individuals under the age of 18. We do not knowingly collect personal information from children without parental consent. If you believe that we have inadvertently collected information from a child, please contact us immediately.",
        },
      ],
    },
    {
      heading: "Changes to this Privacy Policy:",
      list: [
        {
          listHeading: "",
          listParagraph:
            "IOSM reserves the right to update or revise this Privacy Policy at any time. We will notify users of any material changes through our website or via email.",
        },
      ],
    },
    {
      heading: "Contact Us",
      list: [
        {
          listHeading: "",
          listParagraph:
            "If you have any questions, concerns, or feedback regarding this Privacy Policy or our privacy practices, please contact us at contact@email.com.",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="w-full h-[300px] bg-black10"></div>
      <div className="mx-[10rem] flex flex-col justify-center items-center">
        <h4 className="text-h4 font-semibold">Privacy Policy</h4>
        <p className="">
          At Indian Online Shopping Mall (IOSM), we are committed to protecting
          the privacy and security of our users' personal information. This
          Privacy Policy outlines how we collect, use, disclose, and safeguard
          the information provided to us through our e-commerce platform. By
          accessing or using IOSM, you agree to the terms outlined in this
          policy.
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
