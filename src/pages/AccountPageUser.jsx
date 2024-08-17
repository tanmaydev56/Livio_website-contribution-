import '../styles/AccountPageUser.css';
import OrdersIcon from "../assets/orders.svg";
import KeyIcon from "../assets/key.svg";
import MapIcon from "../assets/map.svg";
import BussinessIcon from "../assets/payment.svg";
import AccountIcon from "../assets/account.svg";
import DataIcon from "../assets/data.svg";

const accountItems = [
  { icon: OrdersIcon, heading: 'Your Orders', subtext: 'Track, Return or Buy things again' },
  { icon: KeyIcon, heading: 'Login and Security', subtext: 'Edit login, name and mobile number' },
  { icon: MapIcon, heading: 'Addresses', subtext: 'Edit addresses for orders and gifts' },
  { icon: BussinessIcon, heading: 'Your Business account', subtext: 'Save on orders through a business account' },
  { icon: AccountIcon, heading: 'Payment options', subtext: 'Edit or add payment methods' },
  { icon: DataIcon, heading: 'Manage data', subtext: 'Manage what we can access' },
];

const additionalItems = [
  {
    heading: 'Email preferences',
    leftOptions: [
      'Advertising preferences',
      'Communication preferences',
      'SMS Alert preferences',
      'Message Centre',
    ],
    rightOptions: [
      'Shopping notifications',
      'Deals notifications',
      'Delivery notifications',
    ],
  },
  {
    heading: 'Shopping programs and rentals',
    leftOptions: [
      'Manage preferences',
      'Manage profiles',
      'Subscribe and Save',
      'Support the sellers',
    ],
    rightOptions: [
      'Shop the Kids’ Store by age',
      'Shop the School Store',
      'Enter Enterprise section',
    ],
  },
];


const AccountUser = () => {
  return (
    <div className="account-container">
      <div className="account-heading">
        <h1 className="account-title">Your Account</h1>
        <button className="account-btn">Wishlist</button>
      </div>
      <div className="account-grid">
        {accountItems.map((item, index) => (
          <div key={index} className="account-item">
            <div className="account-item-icon"><img src={item.icon} alt={item.heading} /></div>
            <div className="account-item-content">
              <h2 className="account-item-heading">{item.heading}</h2>
              <p className="account-item-subtext">{item.subtext}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="additional-grid">
        {additionalItems.map((item, index) => (
          <div key={index} className="additional-item">
            <h2 className="additional-item-heading">{item.heading}</h2>
            <div className="additional-item-content">
              <div className="additional-item-left">
                {item.leftOptions.map((option, i) => (
                  <p key={i} className="additional-item-option">{option}</p>
                ))}
              </div>
              <div className="additional-item-right">
                {item.rightOptions.map((option, i) => (
                  <p key={i} className="additional-item-option">{option}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountUser;
