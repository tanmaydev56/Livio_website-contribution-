import  { useState } from "react";
import "../styles/Terms.css"; // Assuming you have a CSS file for styling
import "@fortawesome/fontawesome-free/css/all.min.css";

const Terms = () => {
  const [currentContent, setCurrentContent] = useState("acceptance");
  const [activeTopic, setActiveTopic] = useState("acceptance"); // New state for active topic

  // Define your content data
  const contentData = {
    acceptance: (
      <div className="tou">
        <div className="wrapper">
          <div className="content">
            <div className="para-1">
              <h3>Acceptance of Terms:</h3>
              <p>
                <h4 className="firstLine">
                  By accessing and using the LIVIO website, you signify your
                  agreement to comply with and be bound by these
                </h4>
                Terms of Use, as well as any other applicable rules, guidelines,
                policies, and conditions set by LIVIO. This agreement includes,
                but is not limited to, adherence to our Privacy Policy, Return
                Policy, and any other policy that may be in place now or in the
                future.
              </p>
              <li>
                User Responsibility: It is your responsibility to ensure that
                you understand these terms and comply with them. If you do not
                agree with any part of these terms, you must immediately
                discontinue your use of the LIVIO website and its services.
              </li>
              <li>
                Implicit Acceptance: Your continued use of the LIVIO website
                signifies your ongoing acceptance of these terms. This includes
                any actions you take on the website, such as browsing products,
                creating an account, making purchases, or interacting with
                customer service
              </li>
            </div>
            <div className="para-2">
              <h3>Changes to Terms:</h3>
              <p>
                <h4 className="firstLine">
                  LIVIO reserves the right to amend or modify these Terms of Use
                  at any time, at our sole discretion. These
                </h4>
                changes may be necessary to reflect:
              </p>
              <li>
                Updates in Our Practices: To accommodate new services, features,
                or products that we may introduce, or changes in the way we
                operate.
              </li>
              <li>
                Legal and Regulatory Requirements: To comply with changes in
                laws, regulations, and industry standards that affect our
                business operations.
              </li>
              <li>
                Operational Reasons: To address issues or concerns related to
                the security, functionality, or integrity of our website and
                services.
              </li>
              <li>
                Notification of Changes: Although we may not provide direct
                notifications for every change, the most current version of the
                Terms of Use will always be available on this page. We encourage
                you to review this page periodically to stay informed about any
                updates.
              </li>
              <li>
                User Responsibility: It is your responsibility to regularly
                check this page for updates. Continued use of the LIVIO website
                after any changes to the terms have been posted constitutes your
                acceptance of those changes. If you do not agree to the modified
                terms, you must cease using the website and its services
                immediately.
              </li>
            </div>
          </div>
        </div>
      </div>
    ),
    websiteUse: (
      <div className="tou">
        <div className="wrapper">
          <div className="content">
            <div className="para-1">
              <h3>Use of the Website:</h3>
              <p>
                <h4 className="firstLine">
                  Users are expected to use the LIVIO website responsibly and in
                  accordance with applicable laws and regulations.{" "}
                </h4>
                The following activities are strictly prohibited to ensure a
                safe, functional, and enjoyable experience for all users:
              </p>
              <ul>
                <li>
                  Illegal Activities: Users must not engage in any activities
                  that are illegal or violate local, state, national, or
                  international laws. This includes, but is not limited to,
                  activities such as fraud, intellectual property theft, and
                  unauthorized access to computer systems.
                </li>
                <li>
                  Disruption or Interference: Users must not engage in any
                  actions that could disrupt, damage, or interfere with the
                  proper functioning of the website or the enjoyment of the
                  website by other users. This includes actions that could
                  disable, overburden, or impair our servers or networks.
                </li>
                <li>
                  Harmful Material: Introducing or transmitting any viruses,
                  malware, worms, or other harmful software or material is
                  strictly prohibited. Users must ensure that their interactions
                  with the website do not compromise its security or integrity.
                </li>
                <li>
                  Unauthorized Access: Attempting to gain unauthorized access to
                  the LIVIO website, other users' accounts, or any computer
                  systems or networks connected to the website is prohibited.
                  This includes hacking, password mining, or any other means of
                  unauthorized access.
                </li>
              </ul>
            </div>
            <div className="para-2">
              <h3>Account Registration:</h3>
              <p>
                <h4 className="firstLine">
                  To access certain features and services on the LIVIO website,
                  users are required to create an account. The following
                  conditions apply to ensure the security and integrity of user
                  accounts:
                </h4>
              </p>
              <ul>
                <li>
                  Accurate Information: During the registration process, users
                  must provide accurate, current, and complete information. This
                  includes details such as name, email address, shipping
                  address, and any other information requested. Providing false
                  or misleading information is grounds for suspension or
                  termination of the account.
                </li>
                <li>
                  Confidentiality of Credentials: Users are responsible for
                  maintaining the confidentiality of their login credentials,
                  including their username and password. Users must not share
                  their credentials with anyone or allow others to access their
                  account.
                </li>
                <li>
                  Responsibility for Activities: Users are responsible for all
                  activities that occur under their account. This includes any
                  actions taken by individuals who have obtained access to the
                  account due to the user's failure to maintain the
                  confidentiality of their login credentials.
                </li>
                <li>
                  Account Security: LIVIO reserves the right to monitor, review,
                  and take action on accounts that exhibit suspicious activity.
                  This includes suspending or terminating accounts that provide
                  false information, violate these terms, or engage in
                  prohibited activities. Users are encouraged to notify LIVIO
                  immediately if they suspect any unauthorized use of their
                  account or any other breach of security.
                </li>
                <li>
                  Profile Updates: Users are encouraged to keep their account
                  information up-to-date to ensure accurate communication and
                  delivery of services. This includes promptly updating any
                  changes to personal information, such as email addresses or
                  shipping addresses.
                </li>
                <li>
                  Multiple Accounts: Users are generally allowed to have only
                  one account. Creating multiple accounts without permission may
                  result in suspension or termination of all related accounts.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    productsOrders: (
      <div className="tou">
        <div className="wrapper">
          <div className="content">
            <div className="para-1">
              <h3>Product Descriptions and Pricing:</h3>
              <p>
                <h4 className="firstLine">
                  LIVIO is committed to providing accurate and detailed
                  information about our products to help users make
                </h4>
                informed purchasing decisions. However, discrepancies can
                sometimes occur. Here’s a detailed explanation of our practices
                and policies:
              </p>
              <ul>
                <li>
                  Accuracy of Information: LIVIO strives to ensure that all
                  product descriptions, images, specifications, and pricing
                  information on our website are accurate and up-to-date. This
                  includes details such as dimensions, materials, colors, and
                  features.
                </li>
                <li>
                  <strong>Typographical Errors:</strong> Despite our best
                  efforts, typographical errors may occasionally occur. These
                  errors could affect product descriptions, pricing, promotions,
                  offers, and availability. LIVIO reserves the right to correct
                  any errors and to update information at any time without prior
                  notice.
                </li>
                <li>
                  <strong>Inaccuracies in Descriptions:</strong> In some cases,
                  product descriptions may contain inaccuracies or omissions.
                  This could result from changes in the manufacturing process,
                  variations in materials, or updates to product designs. We
                  encourage users to contact our customer service team for
                  clarification if they have any questions about a product.
                </li>
                <li>
                  <strong>Incorrect Pricing:</strong> Pricing errors may occur
                  on our website. LIVIO reserves the right to correct pricing
                  errors and to cancel any orders placed at incorrect prices,
                  regardless of whether the order has been confirmed and payment
                  has been processed. If a pricing error is discovered, we will
                  notify you as soon as possible to discuss the issue and offer
                  you the option to proceed with the order at the correct price
                  or to cancel the order.
                </li>
                <li>
                  <strong>User Remedies:</strong> If users receive a product
                  that is not as described, they have the right to return the
                  product in an unused condition for a refund or exchange. Our
                  Return Policy provides detailed instructions on how to return
                  products and the conditions that must be met for a return to
                  be accepted.
                </li>
              </ul>
            </div>
            <div className="para-2">
              <p>
                Orders and Payment: Placing an order through the LIVIO website
                involves several steps to ensure the accuracy and security of
                the transaction. Here’s a detailed explanation of the order and
                payment process:
              </p>
              <ul>
                <li>
                  <strong>Order Acceptance:</strong> All orders placed through
                  our website are subject to acceptance by LIVIO. This means
                  that we may review your order for accuracy, availability, and
                  compliance with our policies before accepting it. LIVIO
                  reserves the right to refuse or cancel any order for any
                  reason, including but not limited to:
                </li>
              </ul>
              <ul className="products-sublist">
                <li>
                  <strong>Product Availability:</strong> If the product is out
                  of stock or discontinued.
                </li>
                <li>
                  <strong>Payment Issues:</strong> If there are problems
                  processing your payment or verifying your payment information.
                </li>
                <li>
                  <strong>Fraud Prevention:</strong> If we suspect that the
                  order is fraudulent or placed in violation of our terms and
                  policies.
                </li>
              </ul>

              <ul>
                {" "}
                <li>
                  <strong>Order Confirmation:</strong> Once your order is
                  placed, you will receive an order confirmation email. This
                  email confirms that we have received your order but does not
                  constitute acceptance of your order. Acceptance occurs when we
                  ship the product to you and send a shipping confirmation
                  email.
                </li>
                <li>
                  <strong>Payment Information:</strong> To complete a purchase,
                  users must provide accurate and complete payment information.
                  This includes:
                </li>
              </ul>
              <ul className="products-sublist">
                <li>
                  <strong>Payment Methods:</strong> LIVIO accepts various
                  payment methods, such as credit cards, debit cards, and other
                  payment options as specified on our website.
                </li>
                <li>
                  <strong>Billing Information:</strong> Users must ensure that
                  the billing information provided matches the information on
                  file with their payment provider. Incorrect billing
                  information may delay the processing of the order.
                </li>
                <li>
                  <strong>Payment Processing:</strong> Payments are typically
                  processed at the time of order placement. However, in some
                  cases, a pre-authorization may be placed on your account, with
                  the final charge occurring when the order is shipped.
                </li>
              </ul>
              <li>
                <strong>Security Measures:</strong> LIVIO employs
                industry-standard security measures to protect your payment
                information during the transaction process. This includes
                encryption and secure socket layer (SSL) technology to safeguard
                your data.
              </li>

              <li>
                <strong>Order Modifications and Cancellations:</strong> If you
                need to modify or cancel your order, please contact our customer
                service team as soon as possible. We will make every effort to
                accommodate your request, but we cannot guarantee that changes
                can be made once the order has been processed.
              </li>
            </div>
          </div>
        </div>
      </div>
    ),
    shippingReturns: (
      <div className="tou">
        <div className="wrapper">
          <div className="content">
            <div className="para-1">
              <h3>Shipping and Delivery:</h3>
              <p>
                <h4 className="firstLine">
                  LIVIO aims to provide a seamless and efficient shipping
                  experience for all customers. Here are the detailed{" "}
                </h4>
                practices and policies related to shipping and delivery:
              </p>
              <ul>
                <li>
                  <strong>Shipping Options:</strong> LIVIO offers various
                  shipping options to cater to different customer needs,
                  including standard shipping, expedited shipping, and possibly
                  same-day delivery, depending on the location and availability.
                  Each option will have different costs and delivery times,
                  which will be clearly stated at the checkout.
                </li>
                <li>
                  <strong>Delivery Times:</strong> Estimated delivery times are
                  provided at the time of purchase. These estimates are based on
                  several factors, including the selected shipping method,
                  destination address, and the availability of the items
                  ordered. While LIVIO strives to meet these estimated delivery
                  dates, several factors can affect actual delivery times:
                </li>
              </ul>
              <ul className="products-sublist">
                <li>
                  <strong>Weather Conditions:</strong> Adverse weather
                  conditions can delay shipping and delivery.
                </li>
                <li>
                  <strong>Carrier Delays:</strong> Delays caused by shipping
                  carriers, such as postal services or courier companies, are
                  beyond our control.
                </li>
                <li>
                  <strong>High Demand Periods:</strong> During peak seasons,
                  such as holidays, there may be additional delays due to high
                  order volumes.
                </li>
              </ul>
              <ul></ul>
              <li>
                <strong>Tracking Orders:</strong> Once your order is shipped,
                you will receive a shipping confirmation email that includes
                tracking information. This allows you to monitor the progress of
                your shipment in real-time.
              </li>
              <li>
                <strong>Shipping Costs:</strong> Shipping costs are calculated
                based on the shipping method selected, the destination of the
                shipment, and the weight and dimensions of the package. Shipping
                charges will be clearly displayed at the checkout before you
                complete your purchase.
              </li>
              <li>
                <strong>International Shipping:</strong> For customers outside
                the country where LIVIO is based, international shipping options
                may be available. Additional customs fees, duties, and taxes may
                apply and are the responsibility of the customer. Delivery times
                for international orders may vary significantly.
              </li>
              <li>
                <strong>Shipping Issues:</strong> If you encounter any issues
                with your shipment, such as lost or damaged items, please
                contact our customer service team. We will work with you and the
                carrier to resolve the issue as quickly as possible.
              </li>
            </div>
            <div className="para-2">
              <p>
                {" "}
                Returns and Refunds: LIVIO is committed to ensuring customer
                satisfaction with every purchase. Our return and refund policies
                are designed to be straightforward and fair. Here’s an
                elaboration on how returns and refunds are handled:
              </p>
              <ul className="list-moved">
                {" "}
                <li>
                  <strong>Return Policy:</strong> For detailed information,
                  customers should refer to LIVIO's Return Policy, which is
                  accessible on our website. Generally, the following conditions
                  apply:
                </li>{" "}
              </ul>
              <ul className="products-sublist">
                <li>
                  <strong>Return Eligibility:</strong> To be eligible for a
                  return, items must be in their original condition, unused, and
                  with all original packaging and tags attached. Some items,
                  such as clearance or custom-made products, may not be eligible
                  for return. Specific eligibility criteria will be outlined in
                  the Return Policy.
                </li>
                <li>
                  <strong>Return Timeframe:</strong> Customers must initiate the
                  return process within a specified period from the date of
                  delivery, typically 30 days. This timeframe allows sufficient
                  time for customers to inspect their purchases and decide if
                  they are satisfied.
                </li>
              </ul>
              <li>
                <strong>Return Process:</strong> To return an item, customers
                should follow these steps:
              </li>

              <ul className="products-sublist">
                <li>
                  <strong>Request a Return:</strong> Contact our customer
                  service team to request a return authorization. You will
                  receive instructions on how to proceed with the return.
                </li>
                <li>
                  <strong>Prepare the Package:</strong> Securely pack the item
                  in its original packaging. Include any accessories,
                  documentation, or other items that were originally included
                  with the product.
                </li>
                <li>
                  <strong>Shipping the Return:</strong> Use the provided return
                  shipping label (if applicable) or arrange for return shipping
                  at your expense. We recommend using a trackable shipping
                  method to ensure the item is returned safely.
                </li>
              </ul>
              <li>
                <strong>Refunds:</strong> Once the returned item is received and
                inspected, LIVIO will process the refund based on the original
                method of payment. The following details apply:
              </li>
              <ul className="products-sublist">
                <li>
                  <strong>Refund Amount:</strong> The refund amount will
                  typically include the original purchase price of the item,
                  excluding any shipping charges. In some cases, restocking fees
                  may apply, as outlined in the Return Policy.
                </li>
                <li>
                  <strong>Processing Time:</strong> Refunds are usually
                  processed within a few business days after we receive and
                  inspect the returned item. The time it takes for the refund to
                  appear in your account may vary depending on your payment
                  provider.
                </li>
                <li>
                  <strong>Refund Notification:</strong> You will receive an
                  email notification confirming that the refund has been
                  processed. If there are any issues with the return or refund,
                  our customer service team will contact you for further
                  information.
                </li>
              </ul>
              <li>
                <strong>Exchanges:</strong> If you prefer to exchange an item
                rather than receive a refund, please contact our customer
                service team. We will assist you in selecting a replacement item
                and provide instructions for the exchange process.
              </li>
            </div>
          </div>
        </div>
      </div>
    ),
    intellectualProperty: (
      <div className="tou">
        <div className="wrapper">
          <div className="content">
            <div className="para-1">
              <h3>Intellectual Property:</h3>
              <p>
                <h4 className="firstLine">
                  {" "}
                  All content on the LIVIO website, including text, graphics,
                  logos, images, and software, is owned by LIVIO or its{" "}
                </h4>
                content suppliers and is protected by intellectual property
                laws. Unauthorized use, reproduction, or distribution of this
                content is prohibited and may result in legal action.
              </p>
            </div>
            <div className="para-2">
              <h3>Limitation of Liability:</h3>
              <p>
                <h4 className="firstLine">
                  LIVIO, its directors, employees, or agents will not be liable
                  for any indirect, incidental, special, consequential,{" "}
                </h4>
                or punitive damages arising from the use of the site or products
                purchased through the site. This includes, but is not limited
                to, loss of profits, data, or other intangible losses.
              </p>
            </div>
            <div className="para-1">
              <h3>Governing Law:</h3>
              <p>
                <h4 className="firstLine">
                  These Terms of Use are governed by the laws of the state or
                  country where LIVIO is headquartered. Any disputes{" "}
                </h4>{" "}
                arising from these terms or the use of the website will be
                resolved in accordance with the local jurisdiction's laws.
              </p>
            </div>
            <div className="para-2">
              <h3>Contact Information:</h3>
              <p>
                <h4 className="firstLine">
                  For any questions or concerns regarding these Terms of Use,
                  users can contact LIVIO's customer service via email{" "}
                </h4>
                or phone as provided in the original document.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),

    // Add more sections here as needed...
  };

  // Function to handle topic change
  const handleTopicChange = (topic) => {
    setCurrentContent(topic);
    setActiveTopic(topic); // Update active topic state
  };
  return (
    <div className="tou">
      <div className="heading-and-search">
        <h1 className="heading">Terms Of Use</h1>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Find more solutions"
          />
          <i className="fa fa-search search-icon" aria-hidden="true"></i>
        </div>
      </div>
      <div className="wrapper">
        <div className="topics-box">
          <ul className="topics-list">
            <li>
              <p>Useful topics</p>
            </li>
            <li className={activeTopic === "acceptance" ? "active" : ""}>
              <a
                href="#acceptance"
                onClick={() => handleTopicChange("acceptance")}
              >
                Acceptance & Changes
              </a>
            </li>
            <li className={activeTopic === "websiteUse" ? "active" : ""}>
              <a
                href="#websiteUse"
                onClick={() => handleTopicChange("websiteUse")}
              >
                Website Use & Account
              </a>
            </li>
            <li className={activeTopic === "productsOrders" ? "active" : ""}>
              <a
                href="#productsOrders"
                onClick={() => handleTopicChange("productsOrders")}
              >
                Products & Orders
              </a>
            </li>
            <li className={activeTopic === "shippingReturns" ? "active" : ""}>
              <a
                href="#shippingReturns"
                onClick={() => handleTopicChange("shippingReturns")}
              >
                Shipping & Returns
              </a>
            </li>
            <li
              className={activeTopic === "intellectualProperty" ? "active" : ""}
            >
              <a
                href="#intellectualProperty"
                onClick={() => handleTopicChange("intellectualProperty")}
              >
                Intellectual Property and Liability
              </a>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="date">
            <li>
              Last updated on <h2>22 July 2019</h2>
            </li>
          </div>
          {contentData[currentContent]}
        </div>
      </div>
    </div>
  );
};

export default Terms;
