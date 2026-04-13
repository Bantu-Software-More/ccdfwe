export const donateContent = {
  hero: {
    title: "Support Our Mission",
    subtitle: "Your generosity helps us continue our work in the community.",
  },
  whyDonate: {
    title: "Why Your Donation Matters",
    text: "CCDFWE relies on the generosity of supporters like you to fund our programs and community initiatives. Every contribution, no matter the size, makes a real difference in the lives of community members.",
    impact: [
      { amount: "$25", description: "Supports educational materials for youth programs" },
      { amount: "$50", description: "Funds participation in a community workshop" },
      { amount: "$100", description: "Helps a family access critical support services" },
      { amount: "$250", description: "Sponsors a community cultural event" },
    ],
  },
  howToDonate: {
    title: "How to Donate",
    text: "We currently accept donations through the following methods:",
    methods: [
      {
        title: "Bank Transfer",
        description: "Contact us for our bank details to make a direct transfer.",
        icon: "🏦",
      },
      {
        title: "Check",
        description: "Make checks payable to 'CCDFWE' and mail to our address.",
        icon: "✉️",
      },
      {
        title: "In Person",
        description: "Bring your contribution to any of our community events.",
        icon: "🤝",
      },
    ],
  },
  externalLink: {
    title: "Online Donation",
    text: "We are working on setting up an online donation platform. Stay tuned for updates, or contact us to learn about other ways to contribute.",
    link: null as string | null,
  },
  cta: {
    title: "Every Contribution Counts",
    text: "Thank you for supporting CCDFWE. Your generosity helps us build stronger communities.",
    button: { label: "Contact Us to Donate", href: "/contact" },
  },
};
